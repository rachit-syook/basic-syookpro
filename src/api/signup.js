import {handleApiResponse} from './utils';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export async function signUpUser(signUpJson) {
  console.log('Object =>>>>', signUpJson);
  const data = JSON.stringify({ account: signUpJson });
  console.log('DATA Object =>>>>', data)
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3000/accounts.json`, {
        method:'POST',
        headers: headers,
        body: data
      })
        .then(response => {
            console.log("get signup api response", response)
            // response.json()
            // .then(responseJson => {
            //   console.log(responseJson)
            //   resolve(responseJson)
            // })
            // .catch(error => {
            //   console.log(error)
            //   reject(error)
            // });
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
