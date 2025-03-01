// let findMax = (arr) => 
// {
//     if(arr.length === 1){
//         return arr.length[0];
//     }

//  let mid = Math.floor(arr.length / 2); // se redondea al numero menor. 
//  let maxIzquierda = findMax(arr.slice(0, mid)); // Mitad izquierda 
//  let maxDerecha = findMax(arr.slice(mid)); // Mitad derecha 


//  return Math.max(maxIzquierda, maxDerecha); // Combinar resultados };
// }

// const numbers = [3, 8, 2, 10, 5, 7];

let findMax = (arr) => 
{
    if(arr.length === 1)    return arr[0];//solo cuando es un arreglo de un dato

    let mid = Math.floor(arr.length / 2);
    
    if(arr[mid] < arr[mid - 1]){
        dato = arr[mid];
        arr[mid] = arr[mid - 1];
        arr[mid - 1] = dato;
    }
}

const numbers = [3, 8, 2, 10, 5, 7];