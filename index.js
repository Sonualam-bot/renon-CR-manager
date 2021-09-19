const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
// console.log(cashGiven.value);
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const proceedButton = document.querySelector("#proceed-button");
const denomonationListElemRef = document.querySelector("#denomonation-list");


const nextStep = document.querySelector('#SectionName');

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];








function show() {
    var billAmountValue = billAmount.value;



    if (billAmountValue == '') {
        showMessage("Invalid Bill Amount");
    } else if (billAmountValue < 0) {
        showMessage("Entered value should not be less than 0")
    } else {

        proceedButton.style.display = 'none';


        nextStep.style.display = 'block';


        message.style.display = 'none';
    }

}




checkButton.addEventListener("click", function validateBillAndCashAmount() {


    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Do you wanna wash plates?");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
    denomonationListElemRef.style.display = 'block';

}




billAmount.addEventListener("keypress", event => restrictedCodes(event, [45]))
cashGiven.addEventListener("keypress", event => restrictedCodes(event, [45]))

function restrictedCodes(event, keyCodes = []) {
    const keyCode = event.which || event.code;
    if (keyCodes.includes(keyCode)) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

