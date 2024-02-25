"use client";
import { useGetPokemonsFilteredQuery } from "@/api/pokemonApi";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import PokemonList from "@/components/PokemonList";
import { useState } from "react";

export default function Home() {
  const [filterParams, setFilterParams] = useState({
    name: "",
    type: "",
  });

  const {
    data: pokemons,
    isError,
    isLoading,
  } = useGetPokemonsFilteredQuery(filterParams);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className="flex w-full flex-col bg-white px-6 dark:bg-black">
        <div className="flex flex-col items-center justify-center gap-12 text-center lg:flex-col ">
          <Header />
          <Filters setFilterParams={setFilterParams} />
        </div>

        <PokemonList pokemons={pokemons} />
      </div>
    </>
  );
}
