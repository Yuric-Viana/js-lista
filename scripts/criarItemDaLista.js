const inputItem = document.getElementById( 'input-item' );
let contador = 0;

export function criarItemLista() {
    if( inputItem.value === "" ) {
        alert( 'Por favor, insira um item.')
        return;
    }
   
    const itemDaLista = document.createElement( 'li' );

    const containerItemDaLista = document.createElement( 'div' );
    containerItemDaLista.classList.add( 'lista-item-container' );

    const inputLista = document.createElement( 'input' );
    inputLista.id = 'checkbox-' + contador++;
    inputLista.type = 'checkbox';
    
    const nomeLista = document.createElement( 'p' );
    nomeLista.innerText = inputItem.value;

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });
    let horarioCompleto = `${diaDaSemana} (${data}) às ${hora}`;
    
    const dataLista = document.createElement( 'p' );
    dataLista.classList.add( 'texto-data' );
    dataLista.innerText = horarioCompleto;

inputLista.addEventListener('click', function() {

    if(inputLista.checked) {
        nomeLista.style.textDecoration = 'line-through';
    } else {
        nomeLista.style.textDecoration = '';
    }
})

    containerItemDaLista.appendChild( inputLista );
    containerItemDaLista.appendChild( nomeLista );
    
    itemDaLista.appendChild( containerItemDaLista );
    itemDaLista.appendChild(dataLista);   

    inputItem.value = "";

    return itemDaLista;
}