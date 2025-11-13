import type { cardProdutoProps } from '../../types/cardProdutoProps';
import './cardProduto.css';
import bolo_default from '../../assets/imgs/bolo-default.png';
import { formatosServices } from '../../services/formatosService';



export default function CardProduto( {nome, descricao, preco, imagem, id, peso} : cardProdutoProps ) {

    return (
        <div  key={id} className="card_produtos">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <div>
            <span>{ formatosServices.precoBR(preco)}</span>
            <br />
            <span>{ (peso !=null) ?formatosServices.pesoEmKg
            (peso) : "qtde não informada" }</span>

            </div>
        </div>
    )
}
