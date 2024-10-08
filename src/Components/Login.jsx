import React, { useState } from 'react'
import axios from 'axios';
export default function Login() {
    const [state,stateChange] =useState({
        name:'',
    });

    const handlechange=(e)=>{
        stateChange({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
       try{
        const login = await axios.post('http://localhost:4000/login',state); 
        console.log(login.data);
       }
       catch(error){
        console.log(error);
       }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text" name="name" onChange={handlechange} placeholder='enter name'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
