import React, { useEffect, useState } from 'react'
import './App.css'; 
const App = () => {
  let [input,SetInput]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""

  })
  let [data,SetData]=useState(null)
    useEffect(()=>{
      let val=   localStorage.getItem('data')
      let newData=   JSON.parse(val)
   console.log(newData,"rrr");
  SetData(newData)


    },[])





  
  function fun1(e){
    // console.log(e.target.value);   
    let {name,value}=e.target
    SetInput({...input, [name]:value})
    // console.log(input,"r");

  }


function delet(){
  localStorage.clear('data')
  SetData(null)
}

function chalaja(e){
  e.preventDefault();
  console.log(input);
     let a=  JSON.stringify(input)
  localStorage.setItem('data',a)


 
}
  return (
    <div>
      <form onSubmit={chalaja}>
        <h1>STUDENT FORM</h1>
        <label for="fname">First name</label><br></br>
        <input type='text'  onChange={fun1}  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
        <br/>
        <br/>
        <label for="fname"> LastName</label><br></br>
        <input type='text'  onChange={fun1} name='lastName'  value={input.lastName}  placeholder='Enter your lastName'/>
        <br/>
        <br/>
        <label for="fname">Email</label><br></br>
        <input type='email'  onChange={fun1} name='email'  value={input.email} placeholder='Enter your email'/>
        <br/>
        <br/>
        <label for="fname">Passward</label><br></br>
        <input type='password'    onChange={fun1} name='password' value={input.password} placeholder='Enter your passWord'/>
        <br/>
        <br/>
<button   type='submit'> add</button>
<button onClick={delet} >delet</button>

      </form>



      {/* <h1> {data?.firstName}</h1>
      <h4>{data.lastName}</h4>
      <p>   {data.email}</p> */}

      {
        data?(<>
        <h1> {data.firstName}</h1>
        <h4>   {data.lastName}</h4>
        <h4>  {data.email}</h4>
        </>):(<>    <h2>  nhi mila kuch </h2></>)
      }

      
    </div>
  )
}

export default App






