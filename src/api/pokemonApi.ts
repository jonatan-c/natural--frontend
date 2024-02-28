import { IRespPokemon, IRespPokemonByID, IRespTypes } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:4000/api";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: builder => ({
    getPokemonsFiltered: builder.query<
      IRespPokemon,
      { name?: string; type?: string; limit?: number; page?: number }
    >({
      query: ({ name, type, limit, page }) => ({
        url: `pokemon`,
        params: { name, type, limit, page },
      }),
    }),
    getTypesOfPokemons: builder.query<IRespTypes, any>({
      query: () => `/types`,
    }),
    getPokemonById: builder.query<IRespPokemonByID, any>({
      query: id => `/pokemon/${id}`,
    }),
  }),
});

export const {
  useGetPokemonsFilteredQuery,
  useGetTypesOfPokemonsQuery,
  useGetPokemonByIdQuery,
} = pokemonApi;
