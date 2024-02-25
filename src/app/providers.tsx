"use client";

import { store } from "@/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export function Providers({ children }: any) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
      ;
    </>
  );
}
