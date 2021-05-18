//main menu mobile
document.querySelector('#menu-btn').addEventListener('click',
    () => document.querySelector('#main-menu').style.transform = 'translate(0,0)');

document.querySelector('#close-btn').addEventListener('click',
    () => document.querySelector('#main-menu').style.transform = 'translate(900px,0)');

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 960){
    document.querySelector('#main-menu').style.transform = 'translate(0,0)';
    }
    if(window.innerWidth < 960){
        document.querySelector('#main-menu').style.transform = 'translate(900px,0)';
    }
    }, true);    
//hover menu mobile
document.querySelector('#drop-btn-a').addEventListener('click',
    () => document.querySelector('#hover-menu').style.transform = 'translate(0,0)');

document.querySelector('#close-hover').addEventListener('click',
    () => document.querySelector('#hover-menu').style.transform = 'translate(900px,0)');    

//overlay
document.querySelector('#close-btn').addEventListener('click',
    () => document.querySelector('#overlay').style.display = 'none');

document.querySelector('#menu-btn').addEventListener('click',
    () => document.querySelector('#overlay').style.display = 'block');  