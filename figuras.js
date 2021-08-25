//Este es el código del cuadrado
function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
}

//Este es el código del triangulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (altura, base) {
    return (base * altura) / 2;
}

//Este es el código del circulo
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
// const areaCirculo = (radioCirculo * radioCirculo) * PI;


//Aqui interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};

function calcularAreaTriangulo() {
    const base = document.getElementById("InputLado3");
    const altura = document.getElementById("InputAltura");
    const value1 = base.value;
    const value2 = altura.value;
    const area = areaTriangulo(value2, value1);
    alert (area);
    };

function calcularPerimetroTriangulo() {
    const base = document.getElementById("InputLado3");
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const value1 = Number (base.value);
    const value2 = Number (lado1.value);
    const value3 = Number (lado2.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert (perimetro);
};

/*Para calcular altura de un triangulo isoceles:
1. comparar lado1 y lado2 para asegurar que sean iguales y  al mismo tiempo base sea diferente
    Esto se puede hacer con una funcion if comparando lado 1 con lado 2 && lado3
2. Si la validacion es positiva corremos una función para hallar la altura utilizando el teorema de pitagoras
*/
function alturaTrianguloIsosceles (lado1,base) {
    return Math.sqrt((lado1 * lado1) - (base * base)/4);
}

function calcularAlturaTrianguloIsosceles () {
    const lado1 = document.getElementById("InputLado1_2");
    const lado2 = document.getElementById("InputLado2_2");
    const lado3 = document.getElementById("InputLado3_2");
    const value1 = Number (lado1.value);
    const value2 = Number (lado2.value);
    const value3 = Number (lado3.value);
    if (value1 == value2 && value1 != value3) {
        const alturaIsosceles = alturaTrianguloIsosceles(value1, value3);
        alert (alturaIsosceles);
    }
    else {
        alert("Este no es un triangulo isosceles");
    };
};