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
        buyseats(seat)
        purchaseSeatnum()
        calculateTotalprice()
        grandTotalprice()    
        applyCupon()
    })
})


// a person can not buy more then 4 seat
function buyseats(seatName){
    if(selectedSeat.length > 4){
       alert('you can not buy more then 4 seat')
       console.log(seatName)
       seatName.classList.remove('bg-green-500')
       seatName.classList.add('bg-slate-200') 
       selectedSeat.pop();
    }
}

// apply the cupon code
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
            console.log(currentPrice + 'discout');
            getDiscout(discount) 
            let grandTotal = document.getElementById('grand-total');
            grandTotal.innerHTML = currentPrice;  
        }else if(totalPrice >= 2200 && inputCupon.value === 'Couple20'){
            let discount =  totalPrice * 0.20; 
            let currentPrice = totalPrice - discount
            console.log(currentPrice + 'discount');
            getDiscout(discount)
            let grandTotal = document.getElementById('grand-total');
            grandTotal.innerHTML = currentPrice; 
        }
        else{
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
// get discount details
function getDiscout(discount) {
    let discoutBox = document.getElementById('discout-box');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    p1.innerHTML = 'Discount';
    p2.innerHTML = discount;
}
// calculate total price
function calculateTotalprice(){
    let totalPrice = document.getElementById('total-price');
    let currentPrice =  selectedSeat.length * 550
    console.log('currentPrice ' + currentPrice);
    totalPrice.innerHTML = currentPrice
}

// calculate grandtotal price 
function grandTotalprice(){
    let grandTotal = document.getElementById('grand-total');
    grandTotal.innerHTML = selectedSeat.length * 550;  
}

// pudate purchase seat number
function purchaseSeatnum(){
    let purchaseSeat = document.getElementById('purchaseSeat');
    purchaseSeat.innerHTML = selectedSeat.length
}

function getSuccesfullsms(){
    let phoneNumber = document.getElementById('ph-number')
    let submitButton = document.getElementById('submit-button')
    let mainDiv = document.getElementById('main-section')
    let successfull = document.getElementById('successfull')
    let continueButton = document.getElementById('continue-button')
    submitButton.addEventListener('click' , function(){
        mainDiv.classList.add('hidden')
        successfull.classList.remove('hidden')
    })
    continueButton.addEventListener('click' , function (){
        mainDiv.classList.remove('hidden')
        successfull.classList.add('hidden')
    })

}
getSuccesfullsms()