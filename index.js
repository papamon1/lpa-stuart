const {
    Authenticator,
    Environment,
    ApiResponse,
    HttpClient
  } = require('stuart-client-js')
  
  const environment = Environment.SANDBOX()
  const api_client_id = '76b880c1caeb1beb36bbb9b774a9e2ccbda7f8bb236c968d4a006dadb68ccdd1' // can be found here: https://admin-sandbox.stuart.com/client/api
  const api_client_secret = '25656580107bb626771c2c95c5027f4f0b67e1d8abe8b6abfe6dc0b1dad3867c' // can be found here: https://admin-sandbox.stuart.com/client/api
  const auth = new Authenticator(environment, api_client_id, api_client_secret)
  
  const httpClient = new HttpClient(auth)

 // console.log(httpClient)

  // const job = {
  //   job: {
  //     transport_type: "bike",
  //     pickups: [
  //       {
  //         address: "46 Boulevard Barbès, 75018 Paris",
  //         comment: "Wait outside for an employee to come.",
  //         contact: {
  //           firstname: "Martin",
  //           lastname: "Pont",
  //           phone: "+33698348756'",
  //           company: "KFC Paris Barbès"
  //         }
  //       }
  //     ],
  //     dropoffs: [
  //       {
  //         address: "156 rue de Charonne, 75011 Paris",
  //         package_description: "Red packet.",
  //         client_reference: "12345678ABCDE", // must be unique
  //         comment: "code: 3492B. 3e étage droite. Sonner à Durand.",
  //         contact: {
  //           firstname: "Alex",
  //           lastname: "Durand",
  //           phone: "+33634981209",
  //           company: "Durand associates."
  //         }
  //       }
  //     ]
  //   }
  // }
  
  // httpClient.performPost('/v2/jobs', JSON.stringify(job))
  //   .then((apiResponse) => { console.log(apiResponse) })
  //   .catch((error) => { console.log("Error "+error) })


  let driver=null;
  let pricing=null;

  // httpClient.performGet('/v2/jobs')
  // .then((apiResponse) => { 
  //   //console.log(apiResponse) 
  //   driver=apiResponse.body[0].driver
  //   pricing=apiResponse.body[0].pricing    
  //   console.log(pricing)
  // })
  // .catch((error) => { console.log(error) })

  
  const  address= 'Avenida%20de%20Irun%2C%2028830%2CSan%20Fernando%20de%20Henares%2C%20Madrid%2C%20Spain'
  const  type='&type=picking'
  



  httpClient.performGet('/v2/addresses/validate?'+address+type)
  .then((apiResponse) => { 
    console.log(apiResponse) 
    // driver=apiResponse.body[0].driver
    // pricing=apiResponse.body[0].pricing    
    // console.log(pricing)
  })
  .catch((error) => { console.log(error) })
  