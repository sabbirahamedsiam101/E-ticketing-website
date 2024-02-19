let openMenu = document.getElementById('open-menu');
let colseMenu = document.getElementById('close-menu');
let menu = document.getElementById('menu');
let allseats = document.querySelectorAll('.btn'); // all seats classname
let totalseat = document.getElementById('totalSeats') // total seat number
// console.log(allseats)

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

let selectedSeat = []
allseats.forEach((seat)=>{
    seat.addEventListener('click' , function(){
        console.log(seat)
        if(seat.classList.contains('bg-slate-200')){
            seat.classList.remove('bg-slate-200')
            seat.classList.add('bg-green-500')
            //selectedSeat = selectedSeat + 1 ;
            selectedSeat.push(seat)
          

        }else{
            seat.classList.remove('bg-green-500')
            seat.classList.add('bg-slate-200') 
            //selectedSeat = selectedSeat - 1 ;
            selectedSeat.pop(seat)   
        }
        console.log(selectedSeat)
        let currentseat = allseats.length -selectedSeat.length;
        console.log(currentseat);
        totalseat.innerHTML = currentseat;
        getPricedetails(seat.innerHTML)
        console.log("seat name " + seat.innerHTML);
        purchaseSeatnum()
        calculateTotalprice()
        grandTotalprice()
        applyCupon()
    })
})

function applyCupon(){
    let inputCupon = document.getElementById('input-cupon');
    let applyButton = document.getElementById('apply');
    let totalPrice  = selectedSeat.length * 550 ;
   console.log(totalPrice) 
    console.log( inputCupon.value)
    console.log( applyButton)
    applyButton.addEventListener('click' , function (){
        if(totalPrice >= 2200 && inputCupon.value === 'NEW15'){
            let discount =  totalPrice * 0.15; 
            let currentPrice = totalPrice - discount
            console.log(currentPrice);
            let grandTotal = document.getElementById('grand-total');
            grandTotal.innerHTML = currentPrice;  
        }else{
            grandTotalprice()
        }
    })
}


// get price details
function getPricedetails(seat) {
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
    ul.appendChild(newli)
}

function calculateTotalprice(){
    let totalPrice = document.getElementById('total-price');
    let currentPrice =  selectedSeat.length * 550
    console.log('currentPrice ' + currentPrice);
    totalPrice.innerHTML = currentPrice

}

function grandTotalprice(){
    let grandTotal = document.getElementById('grand-total');
    grandTotal.innerHTML = selectedSeat.length * 550;  
}

function purchaseSeatnum(){
    let purchaseSeat = document.getElementById('purchaseSeat');
    purchaseSeat.innerHTML = selectedSeat.length
}

