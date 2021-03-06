import React, { Component } from 'react'
import Navbar from "../Navbar"
import Footer from '../Footer'
import axios from "axios"

import commonTitleBg from "../../images/common-title-bg.png"
import flPuIcon from "../../images/fl-qu-icon.png"
import re_pr_icon from "../../images/re-pr-icon.png"
import ch_re_btn_icon from "../../images/ch-re-btn-icon.png"
import Question from './Question'

export default class QuestionMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: [],
            optionAnswer: [],
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
            step: 0,
            checkResult: 0,
            clickAnswer: 0,
            score: 0,

        }
    }


    componentDidMount() {
        var type = this.props.location.state.id
        //console.log("qum",this.props.location.state.id)
        axios.get(`https://elvirainfotechcloud.com/pharmaspirit/Users/QuestionOption_Controller/getQuestionType/${type}`)
            .then(res => {
                console.log(res.data.data);
                this.setState({ question: res.data.data })

            }).catch(err => {
                console.log(err)
                this.setState({ err: "data not show" })
            })


    }


    nextstep = (step) => {
        this.setState({
            step: step + 1
        })
        // const showOption = (this.state.question.map(i => {
        //     return (i.option).map(q =>{console.log(q.answer_type)})
        
        // }))

    }
    previousstep = (step) => {
        this.setState({
            step: step - 1
        })
    }

    matchans = (id) => {
        console.log(id)

        // const showO=id.map(v => {
                 
        //         return(console.log(v.answer_type))
        //          })

        // const showO = (this.state.question.map(i => {
        //     return (i.option)

        // }))

        // const view = showO.map(v => {
        //     return (v.map(q => { return (q.answer_type) }))


        // })
        // console.log(showO)
        // view[this.state.step].map(c => {
        //     if (c[0] === 1) {
        //         alert("g")
        //     }

        // })

        // console.log(view[this.state.step])
    }

    render() {
        const showquestion = this.state.question.map(i => { return i.question.title })
        const showOption = (this.state.question.map(i => {
            return (i.option).map(q =>


                <div className="new-question-box">
                    {/* { console.log("ans",q.answer_type)}   */}
                    {/*{console.log(("qus",i.question.id))} */}
                    <input id="radio-1" class="radio-custom" name="radio-group" type="radio" value={q.answer_type}  onClick={ ()=>this.matchans(q.answer_type)}
                    />
                    <label for="radio-1" class="radio-custom-label"   >{q.answer_type}</label>

                </div>)
        }));





        const { score, question, step, answer, clickAnswer, correctAnswer } = this.state

        //console.log(JSON.parse(this.state.question))


        return (
            <>

                <Navbar />
                <section class="new-question-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12">

                                <Question question={showquestion[step]} />

                                <div>
                                    {showOption[step]}



                                </div>


                                {/*                           
                                <div class="new-question-block win-height">
                                    <h1>Harold Hobson</h1> 
                                    </div> */}
                                {/* <div>
                              <Question  question={showquestion[step]}/> 

                              </div> */}

                                {/* <div class="new-question-box">

                                 
                                   
                                        <h3>What are the objectives of launching the Chandrayaan-2 moon mission?</h3> 
                                        <p>   </p>
                                        <ul>
                                      
                                            <li>
                                                <input id="radio-1" class="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-1" class="radio-custom-label">To map the surface of the moon.</label>
                                            </li>
                                            <li>
                                                <input id="radio-2" class="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-2" class="radio-custom-label">Signature of water-ice on the lunar surface.</label>
                                            </li>
                                            <li>
                                                <input id="radio-3" class="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-3" class="radio-custom-label">To collect data on minerals and the formation of rocks.</label>
                                            </li>
                                            <li>
                                                <input id="radio-4" class="radio-custom" name="radio-group" type="radio" />
                                                <label for="radio-4" class="radio-custom-label">Signature of water-ice on the lunar surface.</label>
                                            </li>
                                        </ul>
                                        </div>  */}


                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="new-question-side-bar">
                                    <h2 class="common-title" style={{ "backgroundImage": `url(${commonTitleBg})` }}>New Questions</h2>
                                    <ul class="m-0 p-0">
                                        <li><a class="boder-bg-btn fl-qu-btn" style={{ "backgroundImage": `url(${flPuIcon})` }}>Flag this Question</a></li>
                                        <li><a data-toggle="modal" data-target="#report_problem_modal" class="boder-bg-btn re-pr-btn" style={{ "backgroundImage": `url(${re_pr_icon})` }}>Report a Problem</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="new-question-btn-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-12">
                                <div class="prev-check-next-btn">
                                    <ul>
                                        <li><button class="new-qu-btn" onClick={() => this.previousstep(step)} disabled={(step == 0) ? true : false} >Previous</button></li>
                                        <li><button class="new-qu-btn red-btn"  >Check</button></li>
                                        <li><button class="new-qu-btn" onClick={() => this.nextstep(step)} >Next</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="check-my-serult-btn">
                                    <button class="boder-bg-btn ch-re-btn" style={{ "backgroundImage": `url(${ch_re_btn_icon})` }}>Check My Result</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal en_modal_comman" id="report_problem_modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            {/* Modal Header  */}
                            {/* <!-- <div class="modal-header">
        <h4 class="modal-title">Registration</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div> --> */}

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <div class="enq_modal_body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h3>Report A Problem</h3>
                                    <form class="report_problem_form">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="5" placeholder="Type your concern and click submit"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <button type="button" class="en_submit_btn">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1></h1>
                    <a href="" id="scrollup"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
                </div>
                <div>
                    <Footer />
                </div>


            </>
        )
    }
}
