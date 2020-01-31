const fs = require("fs");
const file = "./file/file.txt";
//Syncronus 
// console.log(fs.existsSync(file));
// console.log(fs.readFileSync(file,'utf-8'));
// fs.writeFileSync(file,"console.log(`you are so sweet`)");
// console.log(fs.readFileSync(file,"utf-8"));

// fs.appendFileSync(file,"\nYou need to be smart");
// console.log(fs.readFileSync(file,'utf-8'));

// fs.chmodSync(file,0444);
// fs.writeFileSync(file,"You fucekede");


//  Asyncronus

// fs.stat(file,err => {
//   if(err) {
//     console.log(`${err} exits`);
//   }
//   else{
//     console.log(`${file} exit`);
//   }
// });
// fs.chmodSync(file,0457);
// fs.access(file,fs.constants.R_OK,err => {
//   console.log(`${err}`);
// });
// fs.chmod(file,0764,err  => {
//   console.log("Mod error");
// });
// fs.writeFile(file,"I am peace",err => {
//   if(err){
//     console.log("Error exits");
//   }
//   else{
//       fs.readFile(file,'utf-8',(err,data) => {
//       if(err){
//         console.log("Read error exits");
//       }
//       else{
//         console.log(data);

//     fs.appendFile(file,"\nI have so many confidence.",err => {
//       if(err){
//         console.log("Appending error exits");
//       }
//       else{
//         fs.readFile(file,'utf-8',(err,data) => {
//           if(err){
//             console.log("Error exits")
//           }
//           else{
//             console.log(data);
//           }
            
//         });
//       }
//     });
//   }
//   });          
//   }

// });
// fs.promises.writeFile(file,"I am learning code !")
// .then(() => fs.promises.readFile(file,'utf-8'))
// .then(data => console.log(data))
// .then(() =>fs.promises.appendFile(file,"\nI will learn php"))
// .then(() => fs.promises.readFile(file,'utf-8'))
// .then(data => console.log(data))
// .catch(err => console.log(err));
// async function f(){
//   await fs.promises.writeFile(file,"I am learning Node");
//   let data = await fs.promises.readFile(file,'utf-8');
//   console.log(data);
//   await fs.promises.appendFile(file,"I will learn React");
//   data = await fs.promises.readFile(file,'utf-8');
//   console.log(data);

// }
// f().catch(err => {
//   console.log(err);
// });
// console.log("File not exits");
fs.unlink("file.txt",err =>{
  if(err){
    console.log(err);
  }
  else{
    "File deleted successfully";
  }
});