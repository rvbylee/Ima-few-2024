

function squares(val){

    for(let i = 1; i <= val; i++){

        /* displayText.innerHTML += '<p> The Square of ' + i + ' is: ' +
        (i * i) + '</p>';  */  
//innerHTML is an element of what is what is in the body
// displayText is an element

        displayText.innerHTML += `
        <p>
            The square of ${i} is: ${i * i}.
        </p>
        `;
    }               
};

goButton.onclick = function(){
    squares(maxNumInput.value);
};

maxNumInput.oninput = function (){ //oninput is automatic output
    squares(maxNumInput.value);
};

clearButton.onclick = function (){
    displayText.innerHTML = '';
    maxNumInput.value = '';
};

bgColorInput.onchange = function (){ //onchange is different from onclick, is changing something
    document.body.style.backgroundColor = bgColorInput.value; //document... makes  it easier to access than giving an id to the body
};





