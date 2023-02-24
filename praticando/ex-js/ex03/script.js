const btn = document.querySelector('.btn');

function somar() {
    const res = document.querySelector('.res');
    const total = +res.innerText + 1;
    if (total <= 10) {
        res.innerText = total;
    } else {
        res.innerText = `Não é possivel adicionar mais números!!`
    }
}

if(btn) {
    btn.addEventListener('click', somar);
}
