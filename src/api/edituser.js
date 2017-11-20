import {handleApiResponse} from './utils';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export async function editUserFields(editUserJson, token) {
  console.log('Object =>>>>', editUserJson, token);
  const data = JSON.stringify({ user: editUserJson });
  console.log('DATA Object =>>>>', data)
  return new Promise(function(resolve, reject) {
    try {
      fetch(`http://localhost:3000/users/1`, {
        method:'PUT',
        headers: headers,
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
