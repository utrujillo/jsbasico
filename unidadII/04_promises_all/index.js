import users from './users.js'

const getUsers = () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Load users...' )

    if(true){
      setTimeout( () => {
        resolve( users )
      }, 3000 )
    }else
      reject( new Error('An error has occur') )
  } )
}

const something = () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Second promise...' )

    if(true){
      setTimeout( () => {
        resolve( 'Success!! ⭐' )
      }, 7000 )
    }else
      reject( new Error('An error has occur in second') )
  } )
}

Promise.all( [getUsers(), something()] )
  .then( response => {
    console.log('Array of responses', response)
  })
  .catch( err => console.error(err))

