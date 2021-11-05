import React,{useContext} from 'react' 
import {NavLink} from 'react-router-dom';
import {Context} from './context'
const QuizFinish = (props) => {
    const {userAnswers} = props
    const rightAnswers = userAnswers.filter(answer => answer === true)
    console.log(rightAnswers);
    const {returnToHome} = useContext(Context)
    const calcTotal = () => {
       if ((rightAnswers.length / userAnswers.length) * 100 >= 80){
 return `Wow, you are a genius!`
       }
       else if ((rightAnswers.length / userAnswers.length) * 100 >= 50)  {
           return `Not bad!`
       }
       else {
           return `I am sure you could do better!`
       }
    }
return(
    <>
    <div className="quiz-finish">{calcTotal()} </div>
    <div className="quiz-finish-counter">{`You gave ${rightAnswers.length} right answers out of ${userAnswers.length} questions`}</div>
    <h2 className="quiz-return-home" onClick={()=> returnToHome()}>Return to home</h2>
    </>
)
}
export default QuizFinish