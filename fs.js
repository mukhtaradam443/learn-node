const { dir } = require("console");
const fs = require("fs");
const path = require("path");

// fs.readFile('./files/start.txt', "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFile(path.join(__dirname, "files", "lorem.txt"), "utf-8", (err, data) => {
//     if(err) throw err
//     console.log(data)
// })

fs.writeFile(
  path.join(__dirname, "files", "newfile.txt"),
  "My name is Yusuf",
  (err) => {
    if (err) throw err;
    console.log("File written successfully");

    setTimeout(() => {
      fs.appendFile(
        path.join(__dirname, "files", "newfile.txt"),
        " Lawal",
        (err) => {
          if (err) throw err;
          console.log("File edited successfully");

          setTimeout(() => {
            fs.rename(
              path.join(__dirname, "files", "newfile.txt"),
              path.join(__dirname, "files", "newestfile.txt"),
              (err) => {
                if (err) throw err;
                console.log("filename changed successfully");
              }
            );
          }, 5000);
        }
      );
    }, 5000);
  }
);

//
// fs.writeFile(path.join(__dirname, "files", "start.txt"), "hello guys", (err) =>{
//     if(err) throw err;
//     console.log("fine work")
// })

// setTimeout(() =>{
//     fs.rename(path.join(__dirname, "files", "lorem"), path.join,(__dirname, "files", "lorem.txt"), (err)=>{
//         if(err) throw err;
//         console.log("fine work")
//     })

// setTimeout(() =>{
//     fs.rename(path.join(__dirname, "files", "Lorem"), path.join(__dirname, "files", "lorem.txt"), (err) =>{
//         if(err) throw err;
//         console.log("fine work")
//     })
// })

// fs.writeFile(path.join(__dirname, "files", "start.txt"), "hello world", (err)=>{
//     if(err) throw err;
//     console.log("fine work")
// })

// fs.appendFile(path.join(__dirname, "files", "start.txt"),"\ngood day",(err) =>{
//     if(err) throw err;
//     console.log("good")
// })

// fs.writeFile(path.join(__dirname, "files", "lorem"), "who gose there", (err) =>{
//     if(err) throw err,
//     console.log('very good')
// })

// setTimeout(() =>{
//     fs.rename(path.join(__dirname,"files", "start"), path.join(__dirname, "files", "start.txt"), (err) =>{
//         if(err) throw err,
//         console.log('good')
//     })
// })
