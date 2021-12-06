const express = require('express')

// initialize app
const app = express()
const port = 3000

// // host static files from public folder
// app.use(express.static('public'))

// route to a dynamic path
app.get("/now", (request, response) => {
    const date = new Date()
    console.log(request.baseurl)
    response.send(date)
})

// Listen on port 3000
app.listen(port, ()=> {
    console.log(`server listening at htttp://localhost:${port}`)
})