const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');


var outputFolder = "out"
var inputFolder = './img/'
// --------------------------------------------
// 
// --------------------------------------------
const convertit = async (file,i) => {
    
  const inputBuffer = await promisify(fs.readFile)('./img/' + file);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'PNG'
  });

  await promisify(fs.writeFile)( `./${outputFolder}/0${i+1}.png`, outputBuffer);
}
 
// --------------------------------------------
// 
// --------------------------------------------
fs.readdir(inputFolder, (err, files) => {
    files.forEach((file,i) => {
        convertit(file,i)
    })
});