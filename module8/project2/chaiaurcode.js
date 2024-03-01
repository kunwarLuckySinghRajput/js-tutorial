const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    e.preventDefault();
    if(height === '' || height <= 0 || isNaN(height)){
        result.innerText = 'enter valid number';
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerText = 'enter valid number';
    }
    else{
        const bmi = (weight/((height*height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`
    }
   
})
