import { Datum } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Datum;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="mx-auto max-w-xs cursor-pointer overflow-hidden rounded-lg border shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="bg-gray-200 px-6 py-4 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <h3 className="mb-2 text-center text-2xl font-semibold">
          {pokemon.name}
        </h3>
        <div className="mx-auto">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold">Stats:</p>
          <ul className="list-inside list-disc">
            {pokemon.stats?.map((stat: any) => (
              <li key={stat.name} className="capitalize">
                {stat.name}: {stat.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Types:</p>
          <p className="capitalize">{pokemon.types.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
