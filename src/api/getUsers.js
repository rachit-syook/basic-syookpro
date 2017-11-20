import {handleApiResponse} from './utils';

const headers = {

}

export async function getUser(authtoken) {
  console.log(authtoken,"get users authtoken")
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3000/users`, {
        method:'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Token':authtoken
        },
      })
        .then(response => {
            console.log("get login api response", response)
            handleApiResponse(response)
              .then(responseJson => {
                console.log("responseJson", responseJson)
                resolve(responseJson)
              })
              .catch(error => {
                console.log("error", error)
                reject(error)
              })
        })
        .catch(error => {
          console.log("error", error);
          reject(error)
        })
      }catch(error){
        console.log("error", error)
        reject(error)
      }
  });
}
