var peso;
var altura;
var imc;
var resultado;

var tabela = [
    document.getElementById("result_calc_0")
    , document.getElementById("result_calc_1")
    , document.getElementById("result_calc_2")
    , document.getElementById("result_calc_3")
    , document.getElementById("result_calc_4")
    , document.getElementById("result_calc_5")
    , document.getElementById("result_calc_6")]

resultado = document.getElementById('resultado');


function changeColorChecker() {
    if (tabela[0].style == "background-color: lightskyblue;" ||
        tabela[1].style == "background-color: lightskyblue;" ||
        tabela[2].style == "background-color: lightskyblue;" ||
        tabela[3].style == "background-color: lightskyblue;" ||
        tabela[4].style == "background-color: lightskyblue;" ||
        tabela[5].style == "background-color: lightskyblue;" ||
        tabela[6].style == "background-color: lightskyblue;") {

        return true;
    }
}

function changeColor() {
    if (changeColorChecker) {
        tabela[0].style = "background-color: white;"
        tabela[1].style = "background-color: white;"
        tabela[2].style = "background-color: white;"
        tabela[3].style = "background-color: white;"
        tabela[4].style = "background-color: white;"
        tabela[5].style = "background-color: white;"
        tabela[6].style = "background-color: white;"

    }
}

function calcular(event) {
    event.preventDefault();
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    altura = altura / 100;

    imc = peso / (altura * altura);



    if (imc < 17) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está MUITO ABAIXO DO PESO.'
        changeColor()
        tabela[0].style = "background-color: lightskyblue;"


    } else if (imc >= 17 && imc <= 18.5) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está ABAIXO DO PESO.'
        changeColor()
        tabela[1].style = "background-color: lightskyblue;"

    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Parabéns você está no PESO NORMAL.'
        changeColor()
        tabela[2].style = "background-color: lightskyblue;"

    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está PROXIMO A OBESIDADE.'
        changeColor()
        tabela[3].style = "background-color: lightskyblue;"

    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está no Grau I de OBESIDADE.'
        changeColor()
        tabela[4].style = "background-color: lightskyblue;"

    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está no Grau II de OBESIDADE.'
        changeColor()
        tabela[5].style = "background-color: lightskyblue;"

    } else if (imc >= 40) {
        resultado.innerHTML = 'Seu IMC está: ' + imc.toFixed(2) + '<br /> Cuidado você está no Grau III de OBESIDADE.'
        changeColor()
        tabela[6].style = "background-color: lightskyblue;"

    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

}
