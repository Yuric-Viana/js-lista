import { criarItemLista } from "./scripts/criarItemDaLista.js";
import { verificarListaVazia } from "./scripts/listaVazia.js";

const salvarItem = document.getElementById( 'adicionar-item' );
const listaCompras = document.getElementById( 'lista-de-compras' );

salvarItem.addEventListener( 'click', (evento) => {
    evento.preventDefault();

    const criarLista = criarItemLista();
    
    listaCompras.appendChild( criarLista );
    verificarListaVazia();
})

verificarListaVazia();
