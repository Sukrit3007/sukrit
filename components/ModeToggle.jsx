"use client"
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"


const ModeToggle = () => {
  const { setTheme, theme } = useTheme()
  return (
    <div className="flex flex-row gap-2 items-center" >
      <Switch 
      onClick ={()=>setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div>{theme === "dark" ? <MoonIcon /> : <SunIcon />}</div>
    </div>
  )
}

export default ModeToggle
