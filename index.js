// // const R = require ('ramda');

// // var we = R.propEq ('suit','%');
// // var ll = R.propEq ('suit', '&');
// // var ly = R.anyPass([we, ll]);

// // const result1 = ly({rank: '10', suit: '%'});
// // const result2 = ly({rank: 'Q', suit: '&'});
// // const result3 = ly({rank: 'Q', suit: '$'});

// // console.log(result1);
// // console.log(result2);
// // console.log(result3);

// // const http = require("http")
// // const port = 8000
// // const host = '127.0.0.1'

// // const server = http.createServer((Request, Response)=>{
// //     Response.writeHead(200, {'content-type': 'text/plain'})
// //     Response.end('hello my node')
// // })

// // server.listen(port, host,(error)=>{
// //     console.log(`server running at http://${host}:${port}`)
// // })

// // const http = require("http")
// // const host = "localhost"
// // const port = 3000

// // const RequestHandler = (Request, Response) => {
// //     console.log(requestAnimationFrame.url);
// //     Response.end("hello my Node")
// // }

// // const server = http.createServer(RequestHandler)
// // server.listen(port,host, err =>{
// //     if(err){
// //         return console.log("Something bad happend", err);
// //     }
// //     console.log(`server is listning on ${host}:${port}`);
    
// // })

// var readline = require ('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log(" MY Calculate with Node JS");
// console.log("===============================");
// console.log("1. Plus(+)");
// console.log("2. Minus(-)");
// console.log("3. Times(/)");
// console.log("4. Divide(*)");

// rl.question("Choose Vocabulary: ", function(option){
//     console.log("Your Option ", option);
// rl.question("input the first number :", function(number1){
//     rl.question("input the second number :", function(number2){
//         console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
//         console.log("first Number : ", + number1);
//         console.log("Second Number : ", + number2);
//         console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

//         if(option == "1"){
//             console.log("value :" + (number1) + (number2));
//         }else if(option == "2"){
//             console.log("value :" + (number1) - (number2));
//         }else if(option == "3"){
//             console.log("value :" + (number1) / (number2));
//         }else if(option == "4"){
//             console.log("value :" + (number1) * (number2));  
//         }else{
//             console.log("Your option not available");
//         }
//         rl.close();
        
        
//     });
// });
// });

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let coffe = require('./data')

app.use(bodyParser.json())
app.get('/', (req, res)=>res.send('Welcome to Fake json API'))
app.get('/api/followers', (req,res)=>{
    res.send(followers)
})

const addfollowers = (list, item)=>{
    list.push(item)
    return list
}

app.post('/api/followers', (req, res)=>{
    const newfollowers = req.body
    const newitem = addfollowers(followers, newfollowers)
    followers = newitem
    res.send(followers)
})
app.listen(3000,()=>console.log('App Listen In Port 3000'))