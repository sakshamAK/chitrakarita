'use client'
import style from "./page.module.css"
import { ImBrightnessContrast } from "react-icons/im";
import { BiCrop } from "react-icons/bi";
import { MdOutlineRotate90DegreesCcw } from "react-icons/md";
import { useState } from "react";

const HomePage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`grid grid-cols-8 grid-rows-6 h-screen place-items-center ${style.gridarea} bg-${theme}`}>
      <div className={`${style.preview} flex flex-col justify-center gap-4 items-center p-5 h-full w-4/5`}>
        <div className={`p-5 rounded-2xl bg-sec-${theme}`}>
          <img src="https://picsum.photos/800/800" className="w-full shadow-md rounded-xl" />
        </div>
      </div>
      <div className={`${style.settings} flex flex-col justify-center gap-12 h-full w-full p-5`}>
        <div className="flex items-center gap-4 h-max w-full">
          <h1 className={`text-4xl font-bold text-${theme}`}>Edit Your Photo</h1>
          <div className={`text-2xl ml-auto cursor-pointer select-none text-${theme}`} onClick={() => setTheme(p => p === "light" ? "dark" : "light")}><ImBrightnessContrast /></div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full">
            <h1 className={`ml-5 text-${theme}`}>Warmness</h1>
            <input type="range" className={`${style["thumb-custom"]} ${style["thumb-temp"]} w-full h-12 bg-temp rounded-full appearance-none`} />
          </div>
          <div className="w-full">
            <h1 className={`ml-5 text-${theme}`}>Brightness</h1>
            <input type="range" className={`${style["thumb-custom"]} ${style["thumb-brightness"]} w-full h-12 bg-brightness rounded-full appearance-none`} />
          </div>
          <div className="w-full">
            <h1 className={`ml-5 text-${theme}`}>Contrast</h1>
            <input type="range" className={`${style["thumb-custom"]} ${style["thumb-contrast"]} w-full h-12 bg-bandw rounded-full appearance-none`} />
          </div>
        </div>
        <div className="w-full flex items-center justify-around">
          <div className={`h-20 w-20 radius-lg flex flex-col items-center justify-center text-2xl rounded-lg cursor-pointer bg-sec-${theme}`}>
            <div className={`text-${theme}`}><BiCrop /></div>
            <h4 className={`text-sm text-${theme}`}>Crop</h4>
          </div>
          <div className={`h-20 w-20 radius-lg flex flex-col items-center justify-center text-2xl rounded-lg cursor-pointer bg-sec-${theme}`}>
            <div className={`text-${theme}`}><MdOutlineRotate90DegreesCcw /></div>
            <h4 className={`text-sm text-${theme}`}>Rotate</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage