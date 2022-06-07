import React, { useState } from "react";
import useDarkSide from "./useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Tooltip } from "@mui/material";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <Tooltip title={colorTheme === "light" ? "Dark mode" : "Light Mode"}>
        <button className="z-50 flex items-center justify-center bg-white/[.08] h-11 w-11 rounded-full ml-2">
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={18}
          />
        </button>
      </Tooltip>
    </>
  );
}
