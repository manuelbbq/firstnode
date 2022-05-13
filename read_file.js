const fs = require('fs');

// fs.readFile('./testfile.txt', "utf8", function (err, data) {
//     if(err) throw err;
//
//
//     console.log(data)
// })
//
fs.writeFile('test.txt','', 'utf8', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Write operation complete')


})
let string = `Julian stinkt `
for (let i = 0; i < 10000; i++) {

    string += `Julian stinkt `;
    if (i%10==0){
        string+='\n'
    }
}
    fs.appendFile('test.txt', string, 'utf-8', function (err) {
        if(err)
            console.log(err);
        else
            console.log('Append operation done');

    })
