const path = require ('path');
const express = require ('express');
const app = express ();

const staticDirPath = path.join (__dirname, '../static');

app.use (express.static (staticDirPath));
app.set('view engine', 'hbs');

app.get ('/', (req, res) =>
{
    res.render ('index')
})

app.listen (3000, () => 
{
    console.log ("The server is running on port 3000");
})
