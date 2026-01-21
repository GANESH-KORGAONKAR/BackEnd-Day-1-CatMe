const express = require("express");
const catMe = require("cat-me");

const app = express();
const PORT =  process.env.PORT || 3000; 
// Define port (Render provides PORT, otherwise use 3000)

app.get( '/', (req,res) => {
    res.send(`<pre>${catMe()}</pre>`)
})

app.listen(PORT, ()=> {
console.log(`Server running on http://localhost:${PORT}`)
})

// Print cat in the terminal
console.log(catMe());

// Open  http://localhost:3000 to see cat in Browser