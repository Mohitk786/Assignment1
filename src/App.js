// App.js
import React, { useState } from 'react';
import {Cars} from './components/Data';
import {Card} from './components/Card';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from'react-icons/ai';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';

 function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [moveThroughArrow, setMoveThroughArrow] = useState(1);
  const itemsPerPage = 6;

  // function to filter Car data
  const filteredData = Cars.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber) => { setCurrentPage(pageNumber)};

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredData.slice(startIndex, endIndex).map((item) => (
      <Card key={item.id} {...item} />
    ));
  };

  function handlePageChange(index,type){
    if (index < 10 && type==="right"){
    paginate(index+1);
      
    }
    else if(index > 1 && type==="left"){
    paginate(index-1);
    
  }
}
  return (

    <div className="  flex flex-col items-center bg-slate-300">
      <div className='w-10/12'>
       
        <div className='flex  justify-center rounded-xl p-4 bg-slate-300 shadow-lg'>
          <input
            type="text"
            className='p-1 rounded-xl px-7 font-black'
            placeholder="Search car..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
       
      
      

      <div className="flex flex-wrap mt-6 justify-center">{renderCards()}</div>
      
      <div className="flex justify-around bg-slate-200 p-4 m-9 rounded-xl">
       <span>{currentPage} from 10 </span>
       <div className='flex gap-4 font-bold'>

        <Link to={`/${currentPage}`}>
         <button className=' hover:bg-cyan-400 rounded-md'><AiOutlineArrowLeft onClick={()=>{handlePageChange(currentPage,"left")}}/></button>
          {Array.from({ length: totalPages }).map((_, index) => (
          <button
              key={index}
              onClick={() => paginate(index + 1)}
              className='bg-white px-2 rounded-md hover:bg-cyan-400'
              >
              {index + 1}
            </button>
        ))}
          <button className='hover:bg-cyan-400 rounded-md'><AiOutlineArrowRight onClick={()=>handlePageChange(currentPage,"right")}/></button>
          </Link>
       </div>
       
      </div>

      </div>
    </div>
  );
}


export default App;