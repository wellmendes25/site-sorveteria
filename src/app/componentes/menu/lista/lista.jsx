import estilos from './lista.module.css'
import Link from 'next/link'

export default function Menu(){
    return(
        <main>
            <div className={estilos.container}>
                <ul>
                <li><Link className={estilos.nav} href={"/"}>Home</Link></li>
                <li><Link className={estilos.nav} href={"../componentes/sabores"}>Sabores</Link></li>
                <li><Link className={estilos.nav} href={"../componentes/sobre"}>Sobre</Link></li>
                </ul>
            </div>
        </main>
    )
}