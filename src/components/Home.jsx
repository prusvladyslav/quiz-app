import React,{useState,useEffect} from 'react'
import {listOfQuizes as quizes} from "./listOfQuizes"
import  Test from './Test'
import {NavLink} from 'react-router-dom';
import {Context} from './context'

const Home = ()=>{
    const [listOfQuizes,setListOfQuizes]=useState(quizes)
    const [activeQuize,setActiveQuize]= useState(0)

   const  quizeHandlerClick =(id)=>{
      setActiveQuize(id)

   }
   const returnToHome = () => {
       setActiveQuize(0)
   }
 
    return(
        <Context.Provider value={{
returnToHome
        }}>
        <>
        <h2 className='quiz-header'>Take a look at our amazing quizes!</h2>
    {activeQuize===0?
      <ul className='quiz-list'>
          {listOfQuizes.map(listOfQuize=>{
              return (
                  <li className='quiz-list-item' onClick={() => quizeHandlerClick(listOfQuize.id)} key={listOfQuize.id}>{listOfQuize.name}</li>

              )

        })}
        </ul>: <Test  listOfQuize={listOfQuizes[activeQuize-1].questions}/>
        
        

    }</>
    </Context.Provider>
    )

}
export default Home