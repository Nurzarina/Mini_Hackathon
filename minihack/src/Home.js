import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <br></br>
        <h1>Welcome to our website!</h1>
        <h3>Here you can add your list of tasks to do and manage them.</h3>
        <br></br>
        <br></br>
        <div id='BtnLocation'>
        <Link to="/panel"><Button variant='primary'>Click here to start your To-do List</Button></Link>
        </div>
    </div>
  )
}

export default Home