import Image from "next/image";
import estilos from './sobre.module.css';
import BannerSobre from '../../../../public/banner-sobre.png';
import Sorveteria from '../../../../public/sorveteria.jpg'
import SobreImagem from '../../../../public/sobre-image.jpg'

export default function Sobre(){
    return(
        <main>
            <section className={estilos.container_banner}>
                <Image className={estilos.imagem_sobre} src={BannerSobre}></Image>
                <h1>A GALETERIA</h1>
            </section>
              
            <section>
            <div className={estilos.sobre_container}>
                <h2>Sobre Nós</h2>
                    <h6>Nós simplismente amamos sorvete!</h6>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </div>
            </section>

            <section className={estilos.container_imagens}>
                        <div className={estilos.imagens_in_container}>
                            <Image className={estilos.imagem} src={SobreImagem}></Image>
                        </div>
                        <div className={estilos.imagens_in_container}>
                            <Image className={estilos.imagem} src={Sorveteria}></Image>
                        </div>
                    
            </section>
        </main>
    )
}