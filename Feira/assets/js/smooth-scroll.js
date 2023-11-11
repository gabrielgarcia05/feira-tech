const botao = document.querySelector('.btn-vermais');

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

const inicio = document.querySelector('.navbar-item-1');

inicio.addEventListener('click', () =>{
    window.scroll({top: 600, behavior: "smooth"})
})

const app = document.querySelector('.navbar-item-2');

app.addEventListener('click', () =>{
    window.scroll({top: 1250, behavior: "smooth"})
})

const solu = document.querySelector('.navbar-item-3');

solu.addEventListener('click', () =>{
    window.scroll({top: 1900, behavior: "smooth"})
}) 