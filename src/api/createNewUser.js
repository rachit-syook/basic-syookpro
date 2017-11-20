import {handleApiResponse} from './utils';

const headers = {

}

export async function createNewUser(newUserJson, token) {
  console.log('Object =>>>>', newUserJson);
  const data = JSON.stringify({ user: newUserJson });
  console.log('DATA Object =>>>>', data)
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3000/users.json`, {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Token':token
        },
        body: data
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
