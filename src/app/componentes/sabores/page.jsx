import Image from "next/image";
import estilos from './sabor.module.css';
import BannerSabores from '../../../../public/banner-sabores.jpg';
import imagem1 from '../../../../public/sabor-oreo.png';
import imagem2 from '../../../../public/sabor-pistache.png';
import imagem3 from '../../../../public/sabor-cookies-avela.png';
import imagem4 from '../../../../public/sorbet-kiwi.png';
import imagem5 from '../../../../public/sorbet-morango.png';
import imagem6 from '../../../../public/sorbet-limao.png';
import Sorvete from './Sorvete';

export default function Sabores() {
    const sabores = [
        { imagem: imagem1, titulo: "Sorvete de Oreo", descricao: "Delicioso sorvete sabor Oreo. Uma explosão de sabor." },
        { imagem: imagem2, titulo: "Sorvete de Pistache", descricao: "Sorvete cremoso sabor pistache, rico em sabor e textura." },
        { imagem: imagem3, titulo: "Sorvete de Cookies e Avelã", descricao: "Combinação perfeita de cookies crocantes com avelã." },
        { imagem: imagem4, titulo: "Sorbet de Kiwi", descricao: "Refrescante e saudável, o sorbet de kiwi é perfeito para o verão." },
        { imagem: imagem5, titulo: "Sorbet de Morango", descricao: "Feito com morangos frescos, esse sorbet é irresistível." },
        { imagem: imagem6, titulo: "Sorbet de Limão", descricao: "O sorbet de limão é azedinho na medida certa, refrescante e saboroso." },
    ];

    return (
        <main>
            <section className={estilos.container_main}>
                <Image className={estilos.imagem_sabores} src={BannerSabores} alt="Banner Sabores" />
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className={estilos.second_section}>
                <div><h2>Sabores de Sorvete</h2></div>

                <div className={estilos.container_sorvetes}>
                    {sabores.map((sabor, index) => (
                        <Sorvete
                            key={index}
                            imagem={sabor.imagem}
                            titulo={sabor.titulo}
                            descricao={sabor.descricao}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
