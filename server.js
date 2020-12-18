const express = require('express');
const app = express();
//use static middlware to serve up static files
//express static makes this whole directory available on the port. so index and bundle
app.use(express.static('./client/dist'));

app.listen(3000, ()=> {
    console.log('listening at port 3000');
});
//only sending index but not the bundle
// app.get('/', (req,res) =>
//     res.sendFile('index.html', {root: 'client/dist'}));