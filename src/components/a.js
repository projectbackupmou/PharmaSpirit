import React, { Component, Fragment } from 'react'
//import flagged_ques_home from "../../images/flagged_ques_home.png"
import commonTitleBg from "../../images/common-title-bg.png"
import flPuIcon from "../../images/fl-qu-icon.png"
import re_pr_icon from "../../images/re-pr-icon.png"
import ch_re_btn_icon from "../../images/ch-re-btn-icon.png"
import Navbar from "../Navbar"
//import { Button } from 'react-bootstrap'
import Answer from './Answer'
import Question from './Question'
import Footer from '../Footer'

export default class QuestionMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: {
                1: "What is the pointer",
                2: "syntex of for loop",
                3: "what is static vaeiavle"
            },
            answer: {
                1: {
                    1: "int x = 5, *p=&x, **q=&p;1",
                    2: "int x = 6, *p=&x, tr**q=&p",
                    3: "int x = 115, *p=&x, **q=&p;"
                },
                2: {
                    1: "for(expression-1;expression-2;expression-3)",
                    2: "for(expression-111;expression-222;expression-333)",
                    3: "for(expression-6661;expression-662;expression-663)"

                },
                3: {
                    1: "static local variables",
                    2: "static localll variables",
                    3: "static local vvvariables"
                }
            },
            correctAnswers: {
                1: "2",
                2: "3",
                3: "1"
            },
            correctAnswer: 0,
            step: 1,
            checkResult: 0,
            clickAnswer: 0,
            score: 0
        }
    }
    nextstep = (step) => {
        this.setState({
            step: step + 1
        })
    }
    previousstep = (step) => {
        this.setState({
            step: step - 1
        })
    }
    checkAnswr = (ans) => {
        //  alert("hi")
        const { correctAnswers, step, score } = this.state
        if (ans === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickAnswer: ans

            })
            //console.log(this.state)
        } else {

            this.setState({
                correctAnswer: 0,
                clickAnswer: ans

            })
        }
    }


    render() {
        const { score, question, step, answer, clickAnswer, correctAnswer } = this.state
        return (
            <Fragment>
               <Navbar/>
                <section className="new-question-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="new-question-block win-height">
                                    <h1>Harold Hobson</h1>
                                    <div className="new-question-box">
                                        <h3>What are the objectives of launching the Chandrayaan-2 moon mission?</h3>
                                        <ul>
                                            <li>
                                                <input id="radio-1" className="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-1" className="radio-custom-label">To map the surface of the moon.</label>
                                            </li>
                                            <li>
                                                <input id="radio-2" className="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-2" className="radio-custom-label">Signature of water-ice on the lunar surface.</label>
                                            </li>
                                            <li>
                                                <input id="radio-3" className="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-3" className="radio-custom-label">To collect data on minerals and the formation of rocks.</label>
                                            </li>
                                            <li>
                                                <input id="radio-2" className="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-2" className="radio-custom-label">Signature of water-ice on the lunar surface.</label>
                                            </li>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="new-question-side-bar" >
                                    <h2 className="common-title" style={{ "backgroundImage": `url(${commonTitleBg})` }}>New Questions</h2>
                                    <ul className="m-0 p-0">
                                        <li><a href="#" className="boder-bg-btn fl-qu-btn" style={{ "backgroundImage": `url(${flPuIcon})` }}>Flag this Question</a></li>
                                        <li><a href="#" className="boder-bg-btn re-pr-btn" style={{ "backgroundImage": `url(${re_pr_icon})` }}>Report a Problem</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="new-question-btn-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="prev-check-next-btn">
                                    <ul>
                                        <li><button  className="new-qu-btn" href="#">Previous</button ></li>
                                        <li><button className="new-qu-btn red-btn" href="#">Check</button></li>
                                        <li><button  className="new-qu-btn" href="#">Next</button ></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="check-my-serult-btn">
                                    <a href="#" className="boder-bg-btn ch-re-btn" style={{ "backgroundImage": `url(${ch_re_btn_icon})` }} >Check My Result</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}


{/* <section className="new-question-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <Question question={question[step]} />
                            
                                <Answer answer={answer[step]} step={step} checkAnswr={this.checkAnswr}
                                    correctAnswer={correctAnswer}
                                    clickAnswer={clickAnswer}
                                    score={score}
                                    question={question} />
                                  <Button type="submit" onClick={() => this.previousstep(step)}
                                    disabled={(step == 1) ? true : false}>previous step</Button> {"   "}

                                <Button type="submit" onClick={() => this.nextstep(step)}>next step</Button>
                                <div class="new-question-block win-height">
                                    <h1>Harold Hobson</h1></div>
                                <div class="new-question-box">


                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="new-question-side-bar" >
                                    <h2 class="common-title" style={{ "backgroundImage": `url(${commonTitleBg})` }}>New Questions</h2>
                                    <ul class="m-0 p-0">
                                        <li><a href="#" class="boder-bg-btn fl-qu-btn" style={{ "backgroundImage": `url(${flPuIcon})` }}>Flag this Question</a></li>
                                        <li><a href="#" class="boder-bg-btn re-pr-btn" style={{ "backgroundImage": `url(${re_pr_icon})` }}>Report a Problem</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}


            // my work
            //     <div className="newquestion">
            //       { step <= Object.keys(question).length ?
            //       (<>
            //      <Question question={question[step]}/>
            //      <Answer answer={answer[step]} step={step} checkAnswr={this.checkAnswr} 
            //      correctAnswer={correctAnswer} 
            //      clickAnswer={clickAnswer}
            //      score={score}
            //      question={question}/>
            //      <Button type="submit" onClick={()=>this.previousstep(step)} 
            //      disabled={(step==1)?true:false}>previous step</Button> {"   "}

            //      <Button type="submit" onClick={()=>this.nextstep(step)}>next step</Button> {"        "}
            //      {/* <Button type="submit" onClick={this.mayResult} >check my result</Button> */}

            //      </>):(
            //         <div>
            //             <h1>quize complate</h1>
            //             <p>your score{score} of 

            //              </p>

            //         </div>
            //     )
            //       } 
            // </div>
