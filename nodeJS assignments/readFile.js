var fs = require('fs'); 
var data = '';
var readStream = fs. createReadStream('readme.txt', 'utf8'); 
readStream. on('data', (chunk) => { 
    data += chunk;
    
    console.log(data.length);
   let count = 0;
   data.split('');
   console.log(data);

    for(let i=0; i<data.length; i++){
        if(data[i] = 'j'){
            count++;
        }
    }
    console.log(count);
});
