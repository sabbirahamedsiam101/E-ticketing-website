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
            
            arrayOfselectedseat.push(seat.id);
            console.log(arrayOfselectedseat + "32")
          }
          console.log(arrayOfselectedseat)
          let availableseats = document.getElementById('totalSeats').innerText =  allseats.length - arrayOfselectedseat.length;
          price(seat.id);
          
            console.log(getTotalprice())
          
       })
    })
    
}

// get price details
 getSelectedseat()

// 
 function price(seat) {
    const ul = document.getElementById('seat-details')
    const newli  = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.innerText = seat;
    p2.innerText = 'Economoy';
    p3.innerText = 550
    newli.appendChild(p1);
    newli.appendChild(p2);
    newli.appendChild(p3);
    newli.classList.add('flex' , 'py-1' , 'justify-between')
    if(arrayOfselectedseat.length ++){
        ul.appendChild(newli)
    }else if(!arrayOfselectedseat.includes(seat)){
        ul.removeChild(newli)
    }
    
   
 }


 //  get total price 
 function getTotalprice(){
  let totalPrice =  document.getElementById('total-price')
   totalPrice.innerText = parseInt( arrayOfselectedseat.length * 550);
   console.log(arrayOfselectedseat.length+  " 75")
   return totalPrice
 }

  //  get Grand total price
  let applyCupon = document.getElementById('apply');
  applyCupon.addEventListener('click' , function(){
    let cuponFill = document.getElementById('input-cupon');
    if(cuponFill.value === 'NEW15'){
      
       
    }else {
        // If it doesn't match, you can handle it accordingly
        alert('Invalid coupon code. Please enter a valid code.');
    }
  })

