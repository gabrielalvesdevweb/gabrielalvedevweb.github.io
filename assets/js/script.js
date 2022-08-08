const titulo = document.querySelector('#name');

function write(element){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, index) => {
        
        setTimeout(() => element.innerHTML += letra, 140 * index);
    });
}

write(titulo)
