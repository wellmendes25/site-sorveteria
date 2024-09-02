'use client'
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import BannerHome from '../../public/banner-home.png';
import ImagemSabores from '../../public/banner-sabores.jpg'
import ImagemEventos from '../../public/eventos-image.jpg';
import ImagemSobre from '../../public/sobre-image.jpg'


export default function Home() {
  
  return (
    <main id="Home" className={estilos.main}>
  
      <div className={estilos.container_main}>
        <Image className={estilos.imagem_sorvete_float} src={BannerHome} alt="imagem sorvete"></Image>
        <h1>Sorvete artesanal</h1>
      </div>
      <section className={estilos.second_container}>
      <div className={estilos.div_home}>
        <div className={estilos.div_in_div}>
        <Image className={estilos.imagem_home} src={ImagemSabores} alt="Imagem sabores de sorvetes"></Image>
        </div>
        <div className={estilos.div_in_div}>
        <h3>Nossos Sabores</h3>
        <h6>Novos e deliciosos</h6>
        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
        <div  className={`${estilos.div_in_div} ${estilos.terceira_div}`}>
        <h3>Nossos eventos</h3>
        <h6>Delicias com sorventes</h6>
        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
        </p>
        </div>
        <div className={`${estilos.div_in_div} ${estilos.quarta_div}`}>
        <Image className={estilos.imagem_home} src={ImagemEventos} alt="Imagem de eventos"></Image>
        </div>
        <div className={estilos.div_in_div}>
        <Image className={estilos.imagem_home} src={ImagemSobre} alt="Imagem sobre"></Image>
        </div>
        <div className={estilos.div_in_div}>
        <h3>Sobre nós</h3>
        <h6>Alegria em cada conquista</h6>
        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
        </p>
        </div>
      </div>
      </section>
    </main>
  );
}
