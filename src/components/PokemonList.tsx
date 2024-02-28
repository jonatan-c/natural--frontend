import PokemonCard from "@/components/PokemonCard";
import { Datum } from "@/interfaces";
import { useRouter } from "next/navigation";

const PokemonList = ({ pokemonList }: any) => {
  const router = useRouter();

  const handleClick = (id: any) => {
    router.push(`/${id}`);
  };

  return (
    <div className="flex flex-row flex-wrap  justify-center gap-10 bg-white px-6 dark:bg-black">
      {pokemonList.data.length === 0 && <h1>No Pokemons Found</h1>}
      {pokemonList?.data?.map((pokemon: Datum) => (
        <div key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
