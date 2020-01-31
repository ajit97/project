const http = require('http');
const port = 3000;
const hostName = "127.0.0.1";
const url = require('url');
const cars = [
  {
    make:"Audi",
    model:"A3",
    year: 2015,
    price : 10000,
    transmission :"Automatic",
    url:`https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  },
  {
    make:"Mercedes",
    model:"B Class",
    year : 2018,
    price : 20000,
    transmission : "Manual",
    url:`https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  },
  {
    make:"Ford",
    model:"Focus",
    year:2018,
    price:13000,
    transmission:"Manual",
    url:`https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
  }
];

//callback function to be executed when a user makes a request to our server
const respond = (req,resp) =>{
  console.log(req.url);
  if(req.url !== '/favicon.ico'){
  console.log(url.parse(req.url,true));
  console.log(url.parse(req.url,true).query);
  console.log(url.parse(req.url,true).pathname);
  console.log(url.parse(req.url,true).path);

  const query = url.parse(req.url,true).query;
  const pathname = url.parse(req.url,true).pathname;
  console.log(`query make = ${query.make}`);
  const check = car => (query.make === undefined || query.make === car.make) && (query.model === undefined || query.model == car.model) && (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase());
   resp.setHeader('Content-Type','text/plain');
  resp.writeHead(234,{'Content-Type' :'text/html'});
  resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Node</title>
</head>
<body>
  <p>Node is fun</p>`);
  if(pathname === "/cars"){
    console.log(cars.filter(check).length);
    cars.filter(check).forEach(car => {
      resp.write(`
      <hr>
      <img src = ${car.url} height='200' width:'200' alt='car'>
      <p>Make: ${car.make}</p>
      <p>Model: ${car.model}</p>
      <p>Year: ${car.year}</p>
      <p>Transmission: ${car.transmission}</p>
      <p>Price: $${car.price}</p>
      `);
    });
  }
  resp.end(`</body>
  </html>`);
  }
}



//create server
const server = http.createServer(respond);

//listen to user request

server.listen(port,hostName,() => {console.log(`listening on port ${port}, hostName ${hostName}`)});