import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes , setjokes] = useState([]);

  useEffect(()=>{
    axios.get('https://localhost:3000/jokes')
    .then((response)=>{
      setjokes(response.data)
    }
  )
    .catch(()=>{
      console.log(error)
    }
  )
  })

  return (

    <>
      <h1>Hello World</h1>
      <p>JOKES: {jokes.length}</p>
    {
      jokes.map((jokes, index) =>{
        <div key = {jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
        </div>
      })
    }
    </>
  )
}

export default App
