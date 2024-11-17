
display=document.querySelector('#display')// selects the input space id

function appendValue(value) {
   
    display.value += value  // adds the value of append function to the already value of the input space
}
function clearDisplay(params) {
    display.value = ''; // function sets the value of the input space to be empty
    
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate and update the display
    } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
        console.log(error)
    }
}