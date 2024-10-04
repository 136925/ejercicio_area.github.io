function ejercicio3() {
    const dato1 = new Date(document.getElementById('dato1').value);
    const dato2 = new Date(document.getElementById('dato2').value);
    
    const diferenciaTiempo = Math.abs(dato2 - dato1);
    const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    const difereciaHoras = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 60)) / (1000 * 60 ));
    
    document.getElementById('resultado').innerHTML = 
        `Diferencia: ${diferenciaDias} dias y ${difereciaHoras} horas`;
}


