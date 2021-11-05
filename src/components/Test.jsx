import React from 'react'
import Card from './Card'
import {useState} from 'react'
import QuizFinish from './QuizFinish'

const Test = ({listOfQuize}) => {
  const questionsArray = listOfQuize;
   const [counter,setCounter] = useState(0)
   const [userAnswers,setUserAnswers] = useState([])

const clickHandler = (id) =>{
if (userAnswers.length - 1 === counter){
  return
}
else {
  if  ( questionsArray[counter].rightAnswerId === id){
    setUserAnswers([...userAnswers,true])
   }
   else {
     setUserAnswers([...userAnswers,false])
   }
   setTimeout(()=>{
     setCounter(counter + 1)
     
   },2000)
}



    }

    const renderQuestion = () => {

        return questionsArray?.map(question => {
           return <>
          <Card key={question.id} shouldShowCorrect={userAnswers.length - 1 === counter} onClick={clickHandler} question={question.question} answers={question.answers} rightAnswerId={question.rightAnswerId}  />
      </>
        })
    }
    const render = renderQuestion()
   
return(
    <div className="test-container">
       {counter <= questionsArray?.length - 1 ? render[counter] : <QuizFinish userAnswers={userAnswers}/>}
       {counter !== questionsArray?.length&& <div className="counter">{`${counter+1}/${questionsArray?.length}`}</div>   }
    </div>
)
}
export default Test