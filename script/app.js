let openMenu = document.getElementById('open-menu');
let colseMenu = document.getElementById('close-menu');
let menu = document.getElementById('menu');
let allSeat = document.getElementById('allSeat');
const buttonsWithId = allSeat.querySelectorAll('button[A2]');


// show the menu 
function showMenu(){
    openMenu.classList.add('hidden')
    colseMenu.classList.remove('hidden')
    menu.classList.remove('hidden')
}

// when I scroll the website the menu automatically hide
window.onscroll = ()=> {
    openMenu.classList.remove('hidden')
    colseMenu.classList.add('hidden')
    menu.classList.add('hidden')
}


// select sit 
function selectSeat() {
    let selectedSeats = [];
    const allSeat = document.querySelectorAll(".btn");
     allSeat.forEach((seat)=>{
        seat.addEventListener('click' , (e)=>{
            if(selectedSeats.includes(e.target.id)){
                e.target.style.backgroundColor = '';
                let index = selectedSeats.indexOf(e.target.id);
                selectedSeats.splice(index, 1 );
            }else if(selectedSeats.length < 4 ){
                e.target.style.backgroundColor = '#1DD100';
                selectedSeats.push (e.target.id);
                console.log(selectedSeats)
            }
            else{
                alert('you can not book more then 4 seat')
            }
        })
     })
     
}
selectSeat()

