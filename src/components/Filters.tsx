import { useGetTypesOfPokemonsQuery } from "@/api/pokemonApi";
import React, { useEffect } from "react";

const Filters = ({ setFilterParams, filterParams }: any) => {
  const { data: types } = useGetTypesOfPokemonsQuery("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFilterParams({
      name: e.target.name.value,
      type: e.target.type.value,
    });
  };

  useEffect(() => {
    setFilterParams((params: any) => ({
      ...params,
      page: filterParams?.currentPage,
    }));
  }, [filterParams?.currentPage]);

  return (
    <>
      <div className="mb-10 flex flex-col items-center justify-center gap-6 bg-white px-6 dark:bg-black lg:flex-row">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-screen-md flex-col gap-6 lg:flex-row"
        >
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="flex-grow rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
          />
          <div>
            <label htmlFor="type" className="sr-only">
              Type
            </label>
            <select
              name="type"
              className="rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
            >
              <option value="">All</option>
              {types?.data?.map((type: any, index: any) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Filters;
