const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

const articlesInfo = {
    "learn-figma":{
        comments:[],
    },
    "learn-adobexd":{
        comments:[],
    },
    "learn-tailwindCSS":{
        comments:[],
    }
}

//middleware initition
app.use(express.json({extended: false}))

//test route
// app.get("/", (req, res) => res.send("Test 213 3test"))
// app.post("/", (req,res) => res.send(`Hi mister ${req.body.name}`))
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`))

app.post('/api/articles/:name/add-comments', (req, res) =>{
    const {username, text} = req.body
    const articleName = req.params.name
    articlesInfo[articleName].comments.push({username, text})
    res.status(200).send(articlesInfo[articleName])
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))