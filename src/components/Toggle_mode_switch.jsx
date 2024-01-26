import {useState, useEffect} from "react";

import React from 'react'
import { useTheme } from "../contexts/ThemeProvider";
import { LightIcon, MoonIcon } from "../assets/icons";
import { Icon } from "./Icon";

const Toggle = () => {
    const [theme, setTheme] = useTheme();
    return (
        <div className={`flex flex-column gap-xxs items-center gap-20 toggle-slider ${ theme == 'dark' ? 'down' : 'up' }`}>
            <button className="grid" onClick={() => setTheme('light')}><Icon className={'colored'} iconelement={LightIcon}/></button>
            <button className="grid" onClick={() => setTheme('dark')}><Icon className={'colored'} iconelement={MoonIcon}/></button>
        </div>
    )
}

export default Toggle