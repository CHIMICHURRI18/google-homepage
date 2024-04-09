'use strict';





// funtcion that grabs the content from input that same function will grab the content that will be displayed in the alert box

function showAlert() {
    const inputText = document.querySelector('.searchbartext').value;


    alert(inputText);

}




//event listner that will listen for the enter key to be pressed and then will call the function that will grab the content from the input
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        showAlert();
    }
});



//event listenr that will listen for the button to be clicked and then will call the function that will grab the content from the input

document.querySelector('.button1').addEventListener('click', function () {
    showAlert();
});
