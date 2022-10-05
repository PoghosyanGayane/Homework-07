const express=require('express');
const app = express();
const port=8383;
var cors = require('cors')


app.use(cors())
//app.use(express.static('public'))

app.get('/info', (req, res) => { 
    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
      }
    var i=0;
const num = [];
for (i=0;i<256;i++)
{
num[i]= randomNumber(-1, 6);

}
    res.send (num.toString())
})

app.listen(port, () => console.log(`server has started on port: ${port}`) ) 