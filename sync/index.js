const call = require("./src/call")

// call.greet("Luis Arturo");


const asynFunc = async () =>{
    const fullName = await call.withPromise("Luis", "Arturo")
    console.log(fullName);
}

asynFunc();

// call.withPromise('Luis', 'Arturo')
//     .then(n => console.log(n));

