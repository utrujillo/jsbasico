function suma( numero1, numero2 ){
  return numero1 + numero2
}

function calcular( numero1, numero2, callback ){
  return callback(numero1, numero2)
}

console.log( calcular(10, 100, suma) )

function date(callback){
  console.log('date', new Date )
  
  setTimeout( () => {
    console.log( '(☞ﾟヮﾟ)☞ 3 Doritos despues' )
    let date = new Date
    callback(date)
  }, 3000 )
}

function printDate(dateNow){
  console.log('printDate', dateNow)
}

date(printDate)