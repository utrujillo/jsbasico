import users from './users.js'

const getUsers = () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Load users...' )

    if(true){
      setTimeout( () => {
        resolve( users )
      }, 3000 )
    }else{
      reject( new Error('An error has ocurr') )
    }
  } )
}

const something = () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Second promise...' )

    if(true){
      setTimeout( () => {
        resolve( 'Success!! ⭐' )
      }, 1000 )
    }else{
      reject( new Error('An error has ocurr in second promise') )
    }
  } )
}

Promise.all( [ getUsers(), something() ] )
  .then( response => {
    console.log( 'Array of results', response )
  } )
  .catch( err => console.log( err ) )
