const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); // função para evitar que a pagina seje carregada assim que o form for enviado

    const weight = document.getElementById('weight').value; // pegar o valor do peso 
    const height = document.getElementById('height').value; // pegar o valor da altura

    const bmi = (weight/ (height * height)).toFixed(2);
    
    const value = document.getElementById('value'); 

    let description = '';

    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden'); // para remover a class que deixa os elementos em tranparentes 


    if(bmi < 18.5){
        description = "Cuidado! Você esta abaixo do peso!"
    } else if ( bmi >= 18.5 && bmi <= 25){
        description = 'Você esta no peso ideal!'
        value.classList.remove('attention')
        value.classList.add('normal')
    }else if (bmi >= 25 && bmi <=30){
        description = "Cuidado! Você esta com sobrepeso!"
    }else if (bmi >= 30 && bmi <= 35){
        description = "Cuidado! Você esta com obesidade moderada!"
    }else if ( bmi > 35 && bmi <= 40){
        description = "Cuidado! Você esta com obesidade severa! "
    }else {
        description = "Cuidado! Você esta com obesidade morbida"
    }


    value.textContent = bmi.replace('.' , ',') // adicionar o texto no elemento 
    document.getElementById('description').textContent = description; // adicionar o texto no elemento html
})