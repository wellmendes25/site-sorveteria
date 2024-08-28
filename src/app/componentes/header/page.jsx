import Image from "next/image";
import estilos from './topo.module.css';
import ImagemTopo from '../../../../public/logo.png';
import Link from "next/link";

export default function Topo (){
    return(
        <header>
            <div className={estilos.container_topo}>
                <Image className={estilos.topo_imagem} src={ImagemTopo}></Image>
                <nav>
                    <Link className={estilos.menu_navegacao} href={"/"}>Home</Link>
                    <Link className={estilos.menu_navegacao} href={"/componentes/sabores"}>Sabores</Link>
                    <Link className={estilos.menu_navegacao} href={"/componentes/sobre"}>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}