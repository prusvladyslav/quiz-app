const Card = (props) => {
    const {question,answers,onClick,rightAnswerId,shouldShowCorrect} = props
   
    return(
        <>
        <h2 className="test-header">{question}</h2>
        <ul className="button-container">
      {answers.map((answer)=> {
 return   <li style={{backgroundColor: rightAnswerId === answer.id && shouldShowCorrect ? `green` : `none`}} onClick={() => onClick(answer.id)} key={answer.id} className="answer">{answer.text}</li> 
      } )}
        </ul> 
        </>
    )
}
export default Card