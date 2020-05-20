/**
 * Si tuvieras que escribir una componente que extiende de React.component, y
 * que ejecuta una función que hace un request a una API externa: ¿En qué método
 * del lifecycle de la componente la llamarías? ¿Por qué?
 */

La recomendación es hacer la llamada a una API dentro del ComponentDidMount() 
porque es el momento en el cual el componente ya se montó.
