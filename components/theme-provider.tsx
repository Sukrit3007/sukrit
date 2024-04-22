"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import LoadingScreen from "./LoadingScreen";


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return <NextThemesProvider {...props}>
    {loading && <LoadingScreen />}
    {!loading && (children )}
    {/* {children} */}
    </NextThemesProvider>
}
