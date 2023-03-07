import axios from 'axios'
import React, { useState } from 'react'
import '../styles/create.css'

const Create = () => {
    const [title,setTitle] = useState('')
    const [text,setText] = useState('')
    console.log(title)
    const addItem = async() =>{
        const response = await axios.post('http://localhost:3000/api/notes',{title,text})
        console.log(response)
    }
  return (
    <div className='createNotes'>
      
      <div className="myInputNote">
        <form onSubmit={(e)=>{e.preventDefault(); addItem();}}>
            <h1>Create Notes</h1>
            <input type="text" className='titleInput' placeholder='Untitled' onChange={(e)=>{setTitle(e.target.value)}} />
    
            <textarea className='mainText' cols="60" rows="40" placeholder='Write anything...' onChange={(e)=>{setText(e.target.value)}}></textarea>
            <button type='submit' className='saveBtn'>Save</button>
        </form>
      </div>
      
    </div>
  )
}

export default Create
