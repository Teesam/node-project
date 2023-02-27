const { writeFile, readFile, appendFile } = require('fs');

console.log('start');

writeFile('newFile.txt', 'Hello baby girl!', (err) => {
    if(err){
        console.log('Error');
    }else{
        console.log('Saved');
    }
});

appendFile('newFile.txt', 'You\'re fine.', (err) => {
    if(err){
        console.log('Error');
    }else{
        console.log('Added');
    }
});

readFile('newFile.txt', (err, result) => {
    if(err){
        console.log('Error');
    }else{
        console.log(result.toString());
    }
});

console.log('end');