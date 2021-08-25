console.group("Cuadrados");


//Este es el código del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cudrado miden: "+ ladoCuadrado  + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
}

perimetroCuadrado(5);
areaCuadrado(10);
console.log("El perimetro del cuadrado es: "+  perimetroCuadrado + " cm");
console.log("El area del cuadrado es: "+  areaCuadrado + " cm2");


//const areaCuadrado = ladoCuadrado * ladoCuadrado  + " cm2";
//console.log("El área del cudrado es: "+ areaCuadrado + " cm2");

console.groupEnd();

//Este es el código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triangulo miden: "
//     + ladoTriangulo1  + " cm2, " 
//     + ladoTriangulo2+ " cm2 y "  
//     + baseTriangulo+ " cm2" );

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (altura, base) {
    return (base * altura) / 2;
}
perimetroTriangulo(5, 4, 10);
areaTriangulo(10, 5)

console.log("El perimetro del traingulo es: "+ perimetroTriangulo + " cm");
console.log("El área del traingulo es: " + areaTriangulo + " cm2");
console.groupEnd();

//Este es el código del circulo
//Radio
const radioCirculo  = 4;
//Diametro
function diametroCirculo (radio) {
    return radioCirculo * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function circunferenciaCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area Circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.group("Circulos");
console.log("El radio del circulo es: " + radioCirculo + " cm");
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
console.log("El area del circulo es: " + areaCirculo + " cm2");
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm");
console.groupEnd();
