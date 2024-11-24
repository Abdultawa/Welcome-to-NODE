const fs = require('fs');
//reading files

// fs.readFile('./docs/blog.txt', (error, data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString());
// });

//writing files

// In writing file even if the file doesn't exist.

// fs.writeFile('./docs/blog.txt', "Hello World!", ()=>{
//     console.log("Writing");
// });

//directories

// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (error) => {
//     if(error){
//         console.log("Error creating", error);
//     }
//     console.log('folder created');
// });
// }else{
//     fs.rmdir('./assets', (error) => {
//         if(error){
//             console.log("Error removing", error);
//         }
//         console.log('folder removed');
// })
// }

//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (error) => {
        if(error){
            console.log(error);
        }
        console.log('file deleted');
    });
}