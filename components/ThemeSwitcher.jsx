"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Switch
      defaultSelected
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
    </div>
  )
}

export default ThemeSwitcher
