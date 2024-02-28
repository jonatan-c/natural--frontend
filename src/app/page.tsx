/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import { useGetPokemonsFilteredQuery } from "@/api/pokemonApi";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import PokemonList from "@/components/PokemonList";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const [filterParams, setFilterParams] = useState({
    name: "",
    type: "",
    limit: 10,
    page: currentPage,
  });

  const { name, type } = filterParams;

  const {
    data: pokemons,
    isError,
    isLoading,
  } = useGetPokemonsFilteredQuery(filterParams);

  useEffect(() => {
    setFilterParams(params => ({ ...params, page: currentPage }));
  }, [currentPage]);

  const pokePagination = pokemons?.data?.pagination;
  const pokemonList = pokemons?.data;

  useEffect(() => {
    if (pokePagination) {
      setCurrentPage(pokePagination?.currentPage);
    }
  }, [pokePagination]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return (
    <>
      <div className="flex w-full flex-col bg-white px-6 dark:bg-black">
        <div className="flex flex-col items-center justify-center gap-12 text-center lg:flex-col ">
          <Header />
          <Filters
            filterParams={filterParams}
            setFilterParams={setFilterParams}
          />
        </div>

        <PokemonList pokemonList={pokemonList} />
      </div>
      {!name && !type && (
        <>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(oldPage => oldPage - 1)}
              className={`rounded-lg px-4 py-2 font-semibold text-white transition-colors duration-200 ${currentPage === 1 ? "cursor-not-allowed bg-gray-500" : "bg-blue-500 hover:bg-blue-700"}`}
            >
              Previous
            </button>
            <button
              disabled={currentPage === pokemons?.data?.pagination?.totalPages}
              onClick={() => setCurrentPage(oldPage => oldPage + 1)}
              className={`rounded-lg px-4 py-2 font-semibold text-white transition-colors duration-200 ${currentPage === pokemons?.data?.pagination?.totalPages ? "cursor-not-allowed bg-gray-500" : "bg-green-500 hover:bg-green-700"}`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
