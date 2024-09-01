'use client'
import estilos from './botao.module.css'
import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import Menu from '../lista/lista'

export default function Menu_Sand(){
    const [abriMenu, setAbrirMenu] = useState(false);
    
    function AbrindoMenu (){
        setAbrirMenu(!abriMenu);
    }
    return(
        <main className={estilos.container_botao}>
        <div><button className={estilos.botao} onClick={AbrindoMenu}>{abriMenu ? <CgClose color='black' size={"25px"} /> : <CiMenuBurger color='black' size={"25px"}  /> }</button></div>
        {abriMenu ? <Menu/>  : null}
        </main>
    )
}