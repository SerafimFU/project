/* Константа инвалидного ввода данных формы */

function InvalidInput(event: any) {
    (event.target as HTMLInputElement).setCustomValidity(event.target.title)
} 

export default InvalidInput
