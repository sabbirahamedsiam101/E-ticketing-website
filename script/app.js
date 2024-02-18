let openMenu = document.getElementById('open-menu');
let colseMenu = document.getElementById('close-menu');
let menu = document.getElementById('menu');
let allseats = document.querySelectorAll('.btn');


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

let arrayOfselectedseat = []; // total select seat
function getSelectedseat(){ 
    allseats.forEach((seat)=>{    
       seat.addEventListener('click' , ()=>{
          if(seat.classList.contains('bg-green-500')){
             seat.classList.remove('bg-green-500');
             arrayOfselectedseat = arrayOfselectedseat.filter(selectedSeat => selectedSeat !== seat.id);
          }else{
            seat.classList.add('bg-green-500');
            console.log(seat.innerHTML)
            arrayOfselectedseat.push(seat.id);
          }
          console.log(arrayOfselectedseat)
          let availableseats = document.getElementById('totalSeats').innerText =  allseats.length - arrayOfselectedseat.length;
       })
    })
    
}
getSelectedseat()

