import axios from "axios";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}
let index=0;
function Pagination({totalPages,handlePageChange}) {
  let funn=(va)=>{
    let funct=async(va)=>{
      await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${va}0&limit=10`).then((res)=>{{handlePageChange(res.data.results);console.log(res.data,"data")}}).catch((err)=>console.log(err))
     }
     funct(va)
  }
  let pages = createArrayOfSize(totalPages).map((a,ii) => {
    return<button onClick={()=>{funn(ii+1) ; index=ii+1}} >{ii+1}</button>;
  });
  return <div  >
    <button onClick={()=>funn(index--)}>{"<<"}</button>
    {pages}
    <button onClick={()=>funn(index++)}>{">>"}</button>
    </div>;
}

export default Pagination;