import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

function App() {

  let [data,setdata]=useState([])
  let [totalpages,settotalpages]=useState(1280/10)
  useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`).then((res)=>{setdata(res.data.results);console.log(res.data.results)}).catch((err)=>{})
  },[])
  return (
    <div className="App">
      <h1>Pokemon's</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,200px)",justifyContent:"center",alignItems:"center",gap:"50px",marginTop:"60px"}}>

      
      {
        data.map((elem)=>{
          return(
            <div style={{boxShadow:"0px 0px 10px 1px black",borderRadius:"30px"}}>
              <h1>{elem.name}</h1>
            </div>
          )
        })
      }
      </div>
      <div style={{marginTop:"100px"}}>
      <Pagination totalPages={10} handlePageChange={setdata} />
      </div>
      
    </div>
  );
}

export default App;
