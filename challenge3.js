/**
 * Escribir una funcion que, utilizando el metodo &quot;reduce&quot; de Array, devuelva un
 * objeto que tenga como propiedad el elemento del array, y como value el número
 * de ocurrencias en el array. 
 * Ejemplo:
 * INPUT: [1,3,4,2,2,1,5,2]
 * OUTPUT: {
 * 1: 2,
 * 3: 1
 * 4: 1,
 * 2: 3,
 * 5: 1,
 * } 
 * 
 */

const input = [1,3,4,2,2,1,5,2];

// Mi opción preferida y la primera que pensé rápidamente es la del Map
const ocurrencesMap = (numbersArray) => {
    let map = new Map();
    numbersArray.forEach(num => map[num] ? map[num] += 1 : map[num] = 1);
    return map;
}

// Con reduce lo pensé y no me salió en el tiempo que definimos para el challenge.
// Me queda pendiente resolverlo como algo personal.
const ocurrencesReduce = (numbersArray) => {
    //return numbersArray.reduce((prev, next) => { return prev + next }, {});
}

console.log(ocurrencesMap(input));
