


function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date){
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth() + 1);
    const y  = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const s = zeroFill(date.getSeconds());

    return `${d}/${mo}/${y} ${h}:${mi}:${s}`
}

function render(data){
    const date = document.querySelector('.date');
    date.innerHTML = data;
}



const stringDate = '2019-04-20T10:00:00-03:00';

const date = new Date(stringDate);

//reserva de 30 dias
date.adicionarDias(30)


render(formatDate(date));


const start = new Date(stringDate);


const end = new Date('2019-05-20T10:00:00-03:00');


const result = end - start;

console.log(result);