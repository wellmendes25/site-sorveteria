'use client'
import estilos from './botao.module.css'
import { useState, useRef, useEffect } from 'react';
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import Menu from '../lista/lista';

export default function Menu_Sand() {
    const [abriMenu, setAbrirMenu] = useState(false);
    const menuRef = useRef(null);

    function AbrindoMenu() {
        setAbrirMenu(!abriMenu);
    }

    function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setAbrirMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <main className={estilos.container_botao}>
            <div>
                <button className={estilos.botao} onClick={AbrindoMenu}>
                    {abriMenu ? <CgClose color='black' size="25px" /> : <CiMenuBurger color='black' size="25px" />}
                </button>
            </div>
            {abriMenu && (
                <div ref={menuRef}>
                    <Menu />
                </div>
            )}
        </main>
    );
}
