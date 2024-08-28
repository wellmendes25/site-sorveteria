import Image from "next/image";
import estilos from './sabor.module.css'
import BannerSabores from '../../../../public/banner-sabores.jpg'
import imagem1 from '../../../../public/sabor-oreo.png';
import imagem2 from '../../../../public/sabor-pistache.png';
import imagem3 from '../../../../public/sabor-cookies-avela.png';
import imagem4 from '../../../../public/sorbet-kiwi.png';
import imagem5 from '../../../../public/sorbet-morango.png';
import imagem6 from '../../../../public/sorbet-limao.png';
export default function Sabores(){
    return(
        <main>
        <section className={estilos.container_main}>
            <Image className={estilos.imagem_sabores} src={BannerSabores}></Image>
            <h1>NOSSOS SABORES</h1>
               
        </section>

        <section className={estilos.second_section}>
            <div><h2>sabores de sorvete</h2></div>

            <div className={estilos.container_sorvetes}>
                <div className={estilos.sorvete}>
                    <Image className={estilos.imagem_sorvete} src={imagem1}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.sorvete}>
                <Image className={estilos.imagem_sorvete} src={imagem2}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.sorvete}>
                <Image className={estilos.imagem_sorvete} src={imagem3}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.sorvete}>
                <Image className={estilos.imagem_sorvete} src={imagem4}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.sorvete}>
                <Image className={estilos.imagem_sorvete} src={imagem5}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.sorvete}>
                <Image className={estilos.imagem_sorvete} src={imagem6}></Image>
                    <h6>Sorvete de Oreo</h6>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
            </div>
        </section>
        </main>
    )
}