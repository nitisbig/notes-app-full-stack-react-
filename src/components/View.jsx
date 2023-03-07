import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/view.css'

const View = () => {
  const [data,setData] = useState([])
  const [article, setArticle] = useState('')
  const [heading,setHeading] = useState('')
  useEffect(()=>{
    fetchNotes()
  },[])

  async function fetchNotes(){
    const res = await axios.get('http://localhost:3000/api/notes')
    setData(res.data)
  }
  async function deleteItem(id){
    await axios.delete(`http://localhost:3000/api/notes/${id}`)
  }
  function showArticle(article,title){
    setHeading(title)
    setArticle(article)
  }
  console.log(data)
  return (
    <div className='view'>
      <div className="sideIndex">
        <ul className="myNoteList">
          {data.map(item=>(
              <li key={item._id} onClick={()=>showArticle(item.body,item.title)} ><div className="title">{item.title}</div><button className='deleteBtn' onClick={()=>deleteItem(item._id)}>delete</button></li>
          ))}
        </ul>
      </div>
      <div className='bodySection'>
        <h1>{heading}</h1>
        <p>{article}</p>
      </div>
    </div>
  )
}

export default View
