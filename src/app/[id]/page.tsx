/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
"use client";

import React from "react";
import Image from "next/image";
import { useGetPokemonByIdQuery } from "@/api/pokemonApi";

const PokemonDetail = ({ params }: any) => {
  const { id } = params;

  const { data: pokemonData, isLoading, isError } = useGetPokemonByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="mx-auto w-full p-6">
      <button
        className="mb-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        onClick={handleBack}
      >
        {"< Back"}
      </button>
      <div className="my-4 w-full rounded-md   border bg-white p-4 hover:shadow-slate-300 dark:bg-gray-800">
        <h3 className="mb-2 text-center text-2xl font-bold">
          {pokemonData?.data.name}
        </h3>
        <Image
          src={pokemonData?.data?.sprites?.front_default || ""}
          alt={pokemonData?.data?.name || ""}
          width={200}
          height={200}
          className="mx-auto"
          priority
        />
        <p className="mb-4 text-center">ID: {id}</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800">
            <h4 className="mb-2 text-lg font-semibold">Abilities:</h4>
            <ul>
              {pokemonData?.data.abilities?.map(
                (ability: any, index: number) => (
                  <li key={index} className="mb-1">
                    {ability.ability.name}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800">
            <h4 className="mb-2 text-lg font-semibold">Stats:</h4>
            <ul>
              {pokemonData?.data.stats?.map((stat: any, index: number) => (
                <li key={index} className="mb-1">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800">
            <h4 className="mb-2 text-lg font-semibold">Moves:</h4>
            <p>
              {pokemonData?.data.moves
                ?.map((move: any) => move.move.name)
                .join(", ")}
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow-md dark:bg-gray-800">
            <h4 className="mb-2 text-lg font-semibold">Game Indices:</h4>
            <p>
              {pokemonData?.data.game_indices
                ?.map((gameIndex: any) => gameIndex.version.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
