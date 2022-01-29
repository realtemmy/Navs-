toggleBtn = document.getElementById('btn');
Xbtn = document.getElementById('x-btn');
sidenav = document.getElementById('sidenav');

console.log(sidenav)

toggleBtn.addEventListener('click', ()=>{
    sidenav.classList.toggle('show')
});
Xbtn.addEventListener('click', ()=>{
    sidenav.classList.toggle('show')
});



