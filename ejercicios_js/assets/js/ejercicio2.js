function ejercicio2() {
    const Radio = document.getElementById('Radio').value;
    
    const Lateral = 4 * Math.PI * Math.pow(Radio, 2);
    const volumen = (4/3) * Math.PI * Math.pow(Radio, 3);
    
    document.getElementById('result').innerHTML = 
        `Lateral Area: ${Lateral.toFixed(2)}<br>
        Volume: ${volumen.toFixed(2)}`;
}
