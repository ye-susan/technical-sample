const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Post will return every third letter of "string_to_cut".');
})

app.post('/test', (req, res) => {

    const data = {
        "string_to_cut": "iamyourlyftdriver"
    }

    res.send(JSON.stringify(everyThirdLetter(data)));
});


const everyThirdLetter = (req) => {
    const { string_to_cut } = req;
    let stringToReturn = "";  
    let i = 2; 
    
    //adding every 3rd letter to stringToReturn
    while (i < string_to_cut.length ) {
        stringToReturn += string_to_cut[i];
        i = i+3;
    }

    //setting stringToReturn inside objToReturn
    let objToReturn = {
        return_string: stringToReturn
    }
    return objToReturn;  
};
  

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

