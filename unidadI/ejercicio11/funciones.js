const user = {
  name: 'Jonathan',
  last_name: 'Gonzalez Zarate',
  scores: [
    { subject: 'Programacion Orientada a Objetos', score: 100 },
    { subject: 'Simulacion', score: 71 },
    { subject: 'Calculo Diferencial', score: 'N/A' },
    { subject: 'Etica', score: 100 },
  ],
  suma: (x, y) => {
    return x + y
  }
}

const saludo = 'hola mundo'

const arrayToDisplay = [
  { nombre: 'juan' },
  { nombre: 'perla' },
]

export { user, saludo, arrayToDisplay }