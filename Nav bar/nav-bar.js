const btn = document.getElementById('btn');
const ul = document.querySelector('nav ul');

btn.addEventListener('click', ()=>{
    ul.classList.toggle('show');
    btn.classList.toggle('show')
})