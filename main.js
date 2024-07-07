

// let nameFunc = ()=>{
//     console.log("arjun");
//    }
   

//    function callback(){
//     console.log("test");
//     nameFunc()
//     }
//     callback()



// let promise = new Promise((resolve,reject)=>{
//     resolve("test completed")
// })



let city = "Delhi"
let apiKey = "54991825a1229842db9b12cf2a89d999"


// function apiLearning(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

// .then(response =>{
//     if(!response.ok){
//         console.log("error");
//     }else{
        
//     }


//     return response.json()
// })


// .then( data =>{
//     console.log(data)
// })
// .catch( error =>{
//     console.log(error)
// }

// )

// }
// apiLearning()


async function apiLearning(){


    let city = "Delhi"
    let apiKey = "54991825a1229842db9b12cf2a89d999"


    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) 

    
    let newresp = await response.json()
    let data = JSON.stringify(newresp)

    console.log(data)
}
apiLearning()