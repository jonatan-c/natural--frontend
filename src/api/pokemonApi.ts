import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:4000/api";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: builder => ({
    getPokemonsFiltered: builder.query<any, { name?: string; type?: string }>({
      query: ({ name, type }) => ({
        url: `pokemon`,
        params: { name, type },
      }),
    }),
    getTypesOfPokemons: builder.query({
      query: () => `/types`,
    }),
    getPokemonById: builder.query<any, any>({
      query: id => `/pokemon/${id}`,
    }),
  }),
});

export const {
  useGetPokemonsFilteredQuery,
  useGetTypesOfPokemonsQuery,
  useGetPokemonByIdQuery,
} = pokemonApi;
