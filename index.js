let click_btn = document.querySelector('.click-me');
let side_bar = document.querySelector('.sidenav');


click_btn.addEventListener('click', ()=>{
//    console.log('clicked')
    side_bar.classList.toggle('clicked')


})