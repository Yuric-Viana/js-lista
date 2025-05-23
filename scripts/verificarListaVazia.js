const listaVazia = document.querySelector('.mensagem-lista-vazia');     

export default function verificarListaVazia(listaCompras) {
    const itensDaLista = listaCompras.querySelectorAll('li');

    if(itensDaLista.length === 0) {
        listaVazia.textContent = 'A lista está vazia. Adicione um item para começar!'
        listaVazia.style.display = 'block';
    } else {
        listaVazia.style.display = 'none';
    }
}