function limpiar(){
document.getElementById('Formulario').reset();
}
function sumar(){
    var x = parseInt(document.getElementById('N1').value);
    var y = parseInt(document.getElementById('N2').value);
    alert(x+y);
}
function resta(){
    var x = parseInt(document.getElementById('N1').value);
    var y = parseInt(document.getElementById('N2').value);
    alert(x-y);

}
function division(){
    var x = parseInt(document.getElementById('N1').value);
    var y = parseInt(document.getElementById('N2').value);
    alert(x/y);

}
function multiplicacion(){
    var x = parseInt(document.getElementById('N1').value);
    var y = parseInt(document.getElementById('N2').value);
    alert(x*y);

}