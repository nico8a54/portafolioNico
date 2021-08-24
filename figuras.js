console.group("Cuadrados");


//Este es el código del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cudrado miden: "+ ladoCuadrado  + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cudrado es: "+ perimetroCuadrado  + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado  + " cm2";
console.log("El área del cudrado es: "+ areaCuadrado + " cm2");

console.groupEnd();

//Este es el código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: "
    + ladoTriangulo1  + " cm2, " 
    + ladoTriangulo2+ " cm2 y "  
    + baseTriangulo+ " cm2" );
console.log("El perimetro del traingulo es: "+ladoTriangulo1 + ladoTriangulo2 + baseTriangulo + " cm");
console.log("El área del traingulo es: " + baseTriangulo * alturaTriangulo + " cm2");
console.groupEnd();

//Este es el código del circulo
//Radio
const radioCirculo  = 4;
//Diametro
const diametroCirculo = radioCirculo * 2;
//PI
const PI = Math.PI;
//Circunferencia
const circunferenciaCirculo = diametroCirculo * PI;
//Area Circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.group("Circulos");
console.log("El radio del circulo es: " + radioCirculo + " cm");
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
console.log("El area del circulo es: " + areaCirculo + " cm2");
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm");
console.groupEnd();
