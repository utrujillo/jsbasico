const somethingWillHappend = () => {
  return new Promise( (resolve, reject) => {
    if(false)
      resolve('(☞ﾟヮﾟ)☞ Promesa resuelta!!')
    else
      reject('Que malas son las mujeres 💥')
  } )
}

somethingWillHappend()
  .then( response => console.log( response ) )
  .catch( err => console.error( err ) )

const something = () => {
  return new Promise( (resolve, reject) => {
    if(false){
      setTimeout( () => {
        resolve('True')
      }, 2000 )
    }else{
      reject(new Error('Woops!!'))
    }
  } )
}

something()
  .then( response => console.log(response) )
  .then( () => console.log( 'Ejecutando despues...' ) )
  .catch( err => console.error(err) )