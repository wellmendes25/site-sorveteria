import Image from "next/image";
import estilos from './sabor.module.css';

export default function Sorvete({ imagem, titulo, descricao }) {
    return (
        <div className={estilos.sorvete}>
            <Image className={estilos.imagem_sorvete} src={imagem} alt={titulo} />
            <h6>{titulo}</h6>
            <p>{descricao}</p>
        </div>
    );
}
