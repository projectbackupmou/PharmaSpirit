import React, { Component } from 'react'
 import axios from "axios"
import Navbar from "../Navbar"
import Footer from '../Footer'
import lt_common_tlt_bg from "../../images/lt-common-tlt-bg.png"
//import el from 'date-fns/esm/locale/el/index.js'
// import { connect } from "react-redux";
// import { getQuestion  } from "../actions/questionAction";

class QuestionBank extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       question_list:[]
    
    
  }
}
  

     componentDidMount() {
      axios.get(`https://elvirainfotechcloud.com/questionbank/pharmasprit/Users/Category_Controller/getCategory`)
          .then(res => {
              // console.log(typeof(res.data.result_data))
              this.setState({ question_list: res.data.result_data})

          }).catch(err => {
              console.log(err)
              this.setState({ err: "data not show" })
          })
      
  }




  render() {
    //  console.log(this.state.question_list.map(i=>{return(i.category_name)}))
    console.log("qub",this.props.location.state)
    return (
      <>
        <Navbar />
        {/* <ul> {this.state.question_list.map(item=><li>{item.title}</li></ul>} */}
        {/* <!-- landing_home_sec --> */}
        <div class="answered-question-sec win-height">
          <div class="container">
            <div class="answered-question-block">
              <h2 class="lt-common-title" style={{ "backgroundImage": `url(${lt_common_tlt_bg})` }}>Question Bank</h2>
              <div class="comman_top">
                <div class="flagged_ques_area">
                  <div class="row">

                  {this.state.question_list.map(i=>{return(
                          <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
                          <div class="ques_bank_box round_shadow_comman w_100">
                          <h3>{i.category_name}</h3>
                         {/* {this.state.question_list.map(i=>{return(<h3>{i.category_name}</h3>)})}  */}
                           <p>{i.notes}</p>
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



                  )})}
              
              
               
                    {/* <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
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
                    </div> */}
                    {/* <div class="col-lg-3 col-md-6 col-sm-12 ques_bank_box_main d-flex">
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
                    </div> */}
                
                 
                    



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
