import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function ValidName(){
         let regex = /^[a-z A-Z]+$/
         if(!regex.test(name)){
            return 'Name is required'
         }else{
            return;
         }
    }
    
    function validemail(){
        let regex = /^[\w-]+@[a-z]+\.[a-z]{2,3}/
        if(!regex.test(email)){
            return 'invalid email format'
        }else{
            return;
        }
    }

    function ValidPassword(){
        let regex = /^[\w]{6}$/
        if(!regex.test(password)){
            return 'password must be atleast 6 characters'
        }else{
            return;
        }

    }
    let nameError = ValidName()

    let emailerror = validemail()

    let passworderror = ValidPassword()

  return (
    <div>
    <form>
        <label>Name: <br/> <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /></label><br/>{nameError && <p style={{color:'red'}}>{nameError}</p>}
        <label>Email:<br/><input type='text'value={email} onChange={(e)=>setEmail(e.target.value)} /></label><br/>{emailerror && <p style={{color:'red'}}>{emailerror}</p>}
        <label>Password:<br/> <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/></label><br/>{passworderror&&<p style={{color:'red'}}>{passworderror}</p>}
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Form