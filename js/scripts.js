// get the buttons
var plusButton  = document.getElementsByClassName('plus-btn');
var minusButton  = document.getElementsByClassName('minus-btn');

//call dynamic button event listeners
addEventListenerOnButton(plusButton, 'increase');
addEventListenerOnButton(minusButton, 'decrease');

// Loop through each buttons and dynamically add event listeners
function addEventListenerOnButton(buttons, query){
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            //change input field value on clicking on +/- button
            changeValue(event, query);
            //update cart total for every click
            updateTotal();
        })
    }
}

// Dynamically change input field value on button click
function changeValue(event, query){
    //get the parent of the input wrapper
    let inputField = event.target.parentNode.parentNode.querySelector('input');
    let inputValue = inputField.value;
    let newInputValue = inputValue;

    //increase or decrease the input field value
    if(query == 'increase'){
        newInputValue = ++inputValue;
    }else if(query == 'decrease'){
        newInputValue = --inputValue;
    }else{
        newInputValue = inputValue;
    }
    //validation for negative values
    if(inputValue < 0){
        return;
    }
    //assign new value to the input field
    inputField.value = newInputValue;
}

//update cart total
function updateTotal(){
    //first class field
    let getFirstClassTickets = document.getElementById('first-class').value;
    let firstClassTicketPrice = 150;

    //economy class field
    let getEconomyClassTickets = document.getElementById('economy-class').value;
    let economyClassTicketPrice = 100;

    //subtotal, vat and total fields for form
    let subTotalField = document.getElementById('subtotal');
    let vatField = document.getElementById('vat');
    let totalField = document.getElementById('total');

    let subtotal = (getFirstClassTickets * firstClassTicketPrice) + (getEconomyClassTickets * economyClassTicketPrice);
    subTotalField.innerText = subtotal;

    let vat = (subtotal * 0.1);
    vatField.innerText = vat;

    let total = subtotal + vat;
    totalField.innerText = total;

    //subtotal, vat and total fields for modal
    let modalSubTotalField = document.getElementById('booking-subtotal');
    let modalVatField = document.getElementById('booking-vat');
    let modalTotalField = document.getElementById('booking-total');

    modalSubTotalField.innerText = subtotal;
    modalVatField.innerText = vat;
    modalTotalField.innerText = total;
}


//book button click event
let bookButton = document.getElementById('book-button');
bookButton.addEventListener('click', getFormInformation);

//modal booking information
function getFormInformation(){
    //Flying From
    let flyingFrom = document.getElementById('flying-from').value;
    document.getElementById('booking-flying-from').innerText = flyingFrom;

    //Flying To
    let flyingTo = document.getElementById('flying-to').value;
    document.getElementById('booking-flying-to').innerText = flyingTo;

    //Departure
    let departure = document.getElementById('departure').value;
    document.getElementById('booking-departure').innerText = departure;

    //Return
    let bookingReturn = document.getElementById('return').value;
    document.getElementById('booking-return').innerText = bookingReturn;
}