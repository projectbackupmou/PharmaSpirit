import React from 'react'
import { Button } from 'react-bootstrap'

const Answer = (props) => {


    let showAnswer = Object.keys(props.answer).map((ans, i) => {
        return (
            <div  >
                <input type="radio" value="" name="" className="radio-custom"
                    onChange={() => props.checkAnswr(ans)} checked />
                    <label for="radio-1" className="radio-custom-label">{props.answer[ans]}</label>
                    
            </div>
        )
    }
    )
   
    const check = () => {
        // console.log("hi")
        let show = Object.keys(props.answer).map((ans, i) => props.correctAnswer === ans)
        console.log(show.includes(true))
        if (show.includes(true)) {
            alert("correct")
           
        }
    }

   const myResult=()=>{
        console.log(`${props.score} and ${Object.keys(props.question).length }`)
    }

    return (
        <>
        {showAnswer}
       
            
            <Button type="submit" onClick={check}>check Answer</Button>
            {/* <Button type="submit" onClick={myResult} >check my result</Button> */}
        
      
        {/* <div class="check-my-serult-btn">
          <a href="#" class="boder-bg-btn ch-re-btn">Check My Result</a>
        </div> */}
 
        <Button type="submit"  onClick={myResult} >check my result</Button>
        
     
        </>
    )
}
export default Answer
