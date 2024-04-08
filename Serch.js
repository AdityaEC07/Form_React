import React, { useState } from 'react'             // data input and delete

const Serch = () => {
const [input,setInput]=useState()
const [data,setData]=useState([])
const fun1=(e)=>
{
  setInput(e.target.value)
}
const add =()=>{
  setData([...data,input])
  setInput('')
}

function Delete (id){
  // console.log(id);
    
  let newAA = data.filter((val,index)=>
  {

    return index!=id
  })
setData(newAA)

}

  return (
    <div    style={{  marginLeft: '50%',marginTop: '68px'}}  >
   <input   name='input'  value={input} onChange={fun1}  type='tex'placeholder='Enter your todo' />
   <button onClick={add} > Add</button>    
  
   {
    data.map((a,b,c)=>{
    
    return(<>
    <ol>
    <li>{a}</li>
   
     </ol>
     
    <button   style={{color:'green'}}  onClick={()=>Delete(b)} >Delete</button>
      </>

      )
    })
   }
    </div>
  )
}

export default Serch