let currentDisplay = '';
let sum = 0;

function clicked(event){
    let value = event.value;
    if (value == 'C')
    {
        currentDisplay = '';
        document.querySelector('#input-display-box').value = 0
    }
    else if(value == '=')
    {
        document.querySelector('#input-display-box').value = eval(currentDisplay);
        currentDisplay = '';
    }
    else{
        currentDisplay += value;
        document.querySelector('#input-display-box').value = currentDisplay
    }    
}