import Express from 'express'
import connect from './db/db.js'
import MyNotes from './model/MyNotes.js'
import cors from 'cors'
const app = Express()
connect()
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/api/notes',async(req,res)=>{
    await MyNotes.create({
        title: req.body.title,
        body: req.body.text
    })
})
app.get('/api/notes',async(req,res)=>{
    const data = await MyNotes.find()
    res.json(
        data
    )
})

app.delete('/api/notes/:id',async(req,res)=>{
    await MyNotes.findByIdAndDelete(req.params.id)
})
app.listen(3000)