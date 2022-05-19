var tempo = new Date();
var ano_atual = tempo.getFullYear();

var resultado = document.getElementById("res");
var img = document.getElementById("imagem");

function verificar(){
    
    var txt_ano = document.getElementById("ano");
    var ano_nasc = Number(txt_ano.value);
    var idade =  ano_atual - ano_nasc;

    var sexo = document.querySelector("input[name=sexo]:checked").value;
    
    resultado.innerHTML = `<b>Detectamos ${sexo} com ${idade} anos.</b> <br><br> `;

    if (ano_nasc.lenght == 0 || ano_nasc >= ano_atual ) {
        
        alert("[ERRO] - Verifique os dados e preencha novamente");

    } else {

        if (idade >= 1 && idade <= 7) {

            if (sexo == 'Mulher') {
                resultado.innerHTML += "<img src='./img/bebe-ml.png'>";
            } else {
                resultado.innerHTML += "<img src='./img/bebe-hm.png'>";
            }
    
        } else if (idade <= 15){
    
            if (sexo == 'Mulher') {
                resultado.innerHTML += "<img src='./img/crianca-ml.png'>";
            } else {
                resultado.innerHTML += "<img src='./img/crianca-hm.png'>";
            }
    
        } else if (idade <= 26){
    
            if (sexo == 'Mulher') {
                resultado.innerHTML += "<img src='./img/jovem-ml.png'>";
            } else {
                resultado.innerHTML += "<img src='./img/jovem-hm.png'>";
            }
    
        }else if (idade <= 55){
    
            if (sexo == 'Mulher') {
                resultado.innerHTML += "<img src='./img/adulto-ml.png'>";
            } else {
                resultado.innerHTML += "<img src='./img/adulto-hm.png'>";
            }
    
        }else{
    
            if (sexo == 'Mulher') {
                resultado.innerHTML += "<img src='./img/idoso-ml.png'>";
            } else {
                resultado.innerHTML += "<img src='./img/idoso-hm.png'>";
            }
    
        }
    }
    
}