function highOrderFunction(func){
    const text = func('mary')
    return `dialog "${text}"`
}

console.log(highOrderFunction(name => {
    return `hello ${name}`
}))

const charters = [
    {name: 'jonas', idade: 24},
    {name: 'juana', idade: 24},
    {name: 'thales', idade: 26},
    {name: 'fernando', idade: 25},
]

let isTwoFour = charter => charter.idade == 24
//Exemplo de high order function
const response = charters.filter(isTwoFour)

console.log(response)