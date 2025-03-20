import React, { useEffect, useState } from 'react'
//fetching a data through normal method 

function FetchData() {
    const[records,setRecords]=useState([]);
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setRecords(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <ul>
        {records.map((list,index)=>(
            <li key={index}>{list.id} | {list.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData
