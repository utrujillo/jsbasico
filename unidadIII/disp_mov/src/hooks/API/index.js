import React from 'react'

const useAPI = () => {

  const getRequest = async ( URL ) => {
    try {
      let response = await fetch( URL )
      return response.json()
    } catch ( error ) {
      console.log( 'Error', error )
    }
  }

  // const postRequest = () => {}

  return { getRequest }

}

export default useAPI