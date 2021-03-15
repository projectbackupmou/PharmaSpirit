import React, { Component } from 'react'
// import axios from "axios"
import Navbar from "../Navbar"
import Footer from '../Footer'
import lt_common_tlt_bg from "../../images/lt-common-tlt-bg.png"
// import { connect } from "react-redux";
// import { getQuestion  } from "../actions/questionAction";

class QuestionBank extends Component {

  //    componentDidMount() {
  //     // axios.get("https://jsonplaceholder.typicode.com/posts")
  //     //     .then(res => {
  //     //         console.log(res)
  //     //         this.setState({ question_list: res.data })

  //     //     }).catch(err => {
  //     //         console.log(err)
  //     //         this.setState({ err: "data not show" })
  //     //     })
  //     this.props.getQuestion()
  // }

  render() {
    //const {question_list}=this.props.question_list
    return (
      <>
        <Navbar />
        {/* <!-- landing_home_sec --> */}
        <div class="answered-question-sec win-height">
          <div class="container">
            <div class="answered-question-block">
              <h2 class="lt-common-title" style={{ "backgroundImage": `url(${lt_common_tlt_bg})` }}>Question Bank</h2>
              <div class="comman_top">
                <div class="flagged_ques_area">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                      <div class="ques_bank_box round_shadow_comman w_100">
                        <h3>Management Questions</h3>
                        <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                        <div class="ques_bank_bottom">
                          <div class="ques_bank_bottom_inner">
                            <ul>
                              <li><h5>100 Questions</h5></li>
                              <li><a href="" class="quest_start_btn">Start</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

          <a href="" id="scrollup"><i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>
          {/* for modal */}
 
        <div>
          <Footer />
        </div>

      </>

      // <div className="question">
      //     list of question
      //     {question_list.map(data=>
      //         <li>
      //             {data.name}
      //             </li>

      //             )

      //     } 

      // </div>
    )
  }
}


// const mapStateToProps=(state)=>({
//     question_list:state.question_list
// })
export default QuestionBank
