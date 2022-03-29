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

getUsers()
  .then( response => console.log( response ) )
  .catch( err => console.log(err) )
