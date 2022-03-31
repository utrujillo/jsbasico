import users from './users.js'

const getUsers = async () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Load users...' )

    if(true){
      setTimeout( () => {
        resolve( users )
      }, 7000 )
    }else
      reject( new Error('An error has occur') )
  } )
}

const allUsers = await getUsers()

console.log( allUsers )

const something = async () => {
  return new Promise( (resolve, reject) => {
    console.log( 'Second promise...' )

    if(true){
      setTimeout( () => {
        resolve( 'Success!! ⭐' )
      }, 1000 )
    }else
      reject( new Error('An error has occur in second') )
  } )
}

const some = await something()
console.log( some )

