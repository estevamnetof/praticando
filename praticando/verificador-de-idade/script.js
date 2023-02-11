function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value.length > ano) {
        window.alert('[ERRO] operação inválida, tente com outros valores!')
    } else {
        var gênero = ''
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
        }
        res.style.alignItems = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }   
}
}