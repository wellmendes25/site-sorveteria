import estilos from './footer.module.css';
import Image from 'next/image';
import Logo from '../../../../public/logo.png' 
export default function Footer(){
    return(
        <footer className={estilos.footer_container}>
            <div className={estilos.container_rodape}>
                <div className={estilos.texto_footer}><Image  className={estilos.imagem_rodape} src={Logo}></Image></div>
                <div className={estilos.texto_footer}>
                    <h3>Endereço</h3>
                    <p>Av. Bernadino de Campos,98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className={estilos.texto_footer}>
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7891</p>
                </div>
                <div className={estilos.texto_footer}>
                    <h3>horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={estilos.texto}><p>Desenvolvido por Wellison Mendes</p></div>
        </footer>
    )
}