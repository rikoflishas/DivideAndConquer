
/**
 * Proyecto del Divide y Vencerás
El paradigma Divide and Conquer es un enfoque poderoso para resolver problemas complejos al dividirlos en partes más pequeñas y resolverlos recursivamente.
 Aunque puede parecer complicado al principio, con la práctica se convierte en una herramienta esencial para diseñar algoritmos eficientes. Es ampliamente utilizado en la vida cotidiana y en aplicaciones técnicas.

Objetivo
El alumno debe usar "divide and conquer" encontrar el número máximo un arreglo. 
Practicará cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base (nuevamente).

Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer 
para encontrar el número máximo.

Instrucciones para resolver el problema:
Divide el arreglo en dos mitades.
Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
Combina las soluciones comparando los máximos de ambas mitades.
Devuelve el número máximo encontrado.
Puedes consultar un extracto de código para comenzar con la solución, 
se incluye un ejmplo de lo que se espera en la siguiente url:
 https://gist.github.com/heladio-devf-mx/3b019c2bcdb4354d6b7b51e1e9e48f7f

 */

function mergeSort(numbers)
{
    //Usaremos mergeSort para hallar el número más grande del arreglo.
    if(numbers.length <= 1)    return numbers.length === 0 ? null : numbers[0];
    //                                  condition ? valueIfTrue : valueIfFalse
    

    let mid = Math.floor(numbers.length / 2);
    let leftArray = numbers.slice(0, mid);// divide del principio hasta la mitad (no agarra el último elemento)
    let rightArray = numbers.slice(mid); //desde la mitad al final

    //Conquer. Aplicando recursividad para seguir dividiendo. Conquer se refiere a dividirlo lo que más se pueda
    const leftMax = mergeSort(leftArray);
    const rightMax = mergeSort(rightArray);

    //Combinar
    if (leftMax > rightMax) {
        return leftMax;
    } else {
        return rightMax;
    }
}

const numbers = [3, 8, 2, 10, 5, 7, 12, 1, -4, 88, 0, -90, 100];
console.log(
    mergeSort(numbers)
);


