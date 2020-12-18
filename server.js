const express = require('express');
const app = express();
//use static middlware to serve up static files
app.use(express.static('./client/dist'));

app.listen(3000, ()=> {
    console.log('listening at port 3000');
});
// app.get('/', (req,res) =>
//     res.sendFile('index.html', {root: 'client/dist'}));