import React from "react";
import { ThemeChanger } from "./ThemeChanger";

const Header = () => {
  return (
    <>
      <section className="flex flex-row content-center items-center gap-6 bg-white dark:bg-black">
        <h1 className="text-center text-2xl">Pokemon List</h1>
        <ThemeChanger />
      </section>
    </>
  );
};

export default Header;
