const user = {
  name: 'Jonathan',
  last_name: 'Gonzalez Zarate',
  scores: [
    { subject: 'Programacion Orientada a Objetos', score: 100 },
    { subject: 'Simulacion', score: 71 },
    { subject: 'Calculo Diferencial', score: 'N/A' },
    { subject: 'Etica', score: 100 },
  ]
}

const data = user.scores.filter(
  item => typeof(item.score) == 'number' 
).reduce( (sum, { score }) => sum + score, 0 )

console.log( data / user.scores.length )

