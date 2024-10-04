function resultado(){
    
    const Radio = parseFloat(document.getElementById('Radio').value);
    const Altura = parseFloat(document.getElementById('Altura').value);
    
    if (isNaN(Radio) || isNaN(Altura)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }
    
    const areaLateral = 2 * Math.PI * Radio * Altura;
    const areaBase = Math.PI * Math.pow(Radio, 2);
    const areaTotal = areaLateral + 2 * areaBase;

    document.getElementById('resultado').innerHTML = 
    `Area Lateral: ${areaLateral.toFixed(2)}<br>
    Area Base: ${areaBase.toFixed(2)}<br>
    Area Total: ${areaTotal.toFixed(2)}`;
};
