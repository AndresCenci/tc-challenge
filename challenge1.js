/**
 * Escribir una función que reciba como parámetro un array de funciones
 * asíncronas, y las ejecute secuencialmente. Es decir, primero la funcion array[0],
 * luego array[1], etc.
 * 
 */
const fetch = require('node-fetch');

const getCharacterById = async (id) => {
    const current = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = await current.json();
    return json || {};
}

const getAsyncFunctions = () => {
    let asyncFunctions = [];
    for (let i = 1; i < 15; i++) {
        asyncFunctions.push(getCharacterById(i));
    }
    return asyncFunctions;
}

const getCharactersList = async (asyncFunctions) => {
    for (const f of asyncFunctions) {
        await f.then(data => console.log(`Id: ${data.id} Name: ${data.name} from origin: ${data.origin.name}`));
    }
}

getCharactersList(getAsyncFunctions());

