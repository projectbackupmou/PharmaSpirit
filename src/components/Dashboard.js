import React, { Component, Fragment } from 'react'
// import mainBanner from "../images/home_bg.jpg"
import new_ques_home from "../images/new_ques_home.png"
import ques_bank_home from "../images/ques_bank_home.png"
import my_progress_home from "../images/my_progress_home.png"
import flagged_ques_home from "../images/flagged_ques_home.png"
// import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Footer from './Footer'
// import logo from "../images/logo.png"
import Navbar from './Navbar'
import axios from "axios"

export default class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      question: []

    }
  }




  componentDidMount() {
    axios.get(`https://elvirainfotechcloud.com/questionbank/pharmasprit/Users/Category_Controller/getType`)
      .then(res => {
        //console.log(res.data.data)
        this.setState({ question: res.data.data })

      }).catch(err => {
        console.log(err)
        this.setState({ err: "data not show" })
      })

  }

  typeId = (id) => {

    console.log(id)
    axios.get(`https://elvirainfotechcloud.com/questionbank/pharmasprit/Users/QuestionOption_Controller/getQuestionType/${id}`)
      .then(res => {
        //console.log(res.data.data)
        console.log(res)

      }).catch(err => {
        console.log(err)
        this.setState({ err: "data not show" })
      })
  }


  render() {
    console.log(localStorage.getItem('token'))
    return (
      <Fragment>
        <Navbar />
        <section className="landing_home_sec vh_height" >
          {/* <img src={mainBanner} alt="" className="banner_img" /> */}
          <div className="container">
            <div className="landing_cate_area">
              <div className="row">
                {this.state.question.map(i => {
                  return (

                    // <button onClick={() => this.typeId(i.id)}> X </button>
                    <div className="col-lg-3 col-md-6 col-12 l_cate_box_main">
                      <Link to={(i.question_type == "New Question") ? "/QuestionMain" : "/questionBank"}>
                        <div className="l_cate_box ripple" onClick={() => this.typeId(i.id)}>
                          <div className="l_cate_box_inner">
                            <div className="l_cate_icon">
                              <img src={(i.question_type == "New Question") ? `${new_ques_home}` : `${ques_bank_home}`} alt="" />
                            </div>
                            <p>{i.question_type}</p>
                          </div>
                        </div>
                      </Link>

                    </div>


                  )
                })}
                {/*  "l_cate_icon" <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
                        {/* <Link to={"/QuestionMain"}> */}
                {/* <div class="l_cate_box ripple" onClick={this.typeId}>
                          <div class="l_cate_box_inner">

                            <div class="l_cate_icon">
                              <img src={new_ques_home} alt="" />
                            </div>

                            <p>New Question</p>

                          </div>
                        </div> */}
                {/* </Link> */}
                {/* </div>  */}
                {/* <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
                        <Link to={"/questionBank"}>
                          <div class="l_cate_box ripple">
                            <div class="l_cate_box_inner">
                              <div class="l_cate_icon">
                                <img src={ques_bank_home} alt="" />
                              </div>
                              <p>Question Bank</p>
                            </div>
                          </div>
                        </Link>
                      </div> */}
                <div className="col-lg-3 col-md-6 col-12 l_cate_box_main">
                  <Link to={"/myprogress"}>
                  <div className="l_cate_box ripple">
                      <div className="l_cate_box_inner">
                        <div className="l_cate_icon">
                        <img src={my_progress_home} alt="" />
                      </div>
                      <p>My Progress</p>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-12 l_cate_box_main">
                  <Link to={"flaggedQuestion"}>
                    <div className="l_cate_box ripple">
                      <div className="l_cate_box_inner">
                        <div className="l_cate_icon">
                          <img src={flagged_ques_home} alt="" />
                        </div>
                        <p>Flagged Questions</p>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* my working */}
        {/* <div className="btn">
                
                 <h1>form sibe menu</h1>   
                   
                 <Button ><Link to={"/QuestionMain"}>New Question </Link></Button> {" "}
                 <Button type="submit">Question Bank</Button>{' '}
                 <Button type="submit">my progress</Button>{' '}
                 <Button type="submit">Flagges Question</Button>{' '}
                </div> */}
        <Footer />
      </Fragment>
    )
  }
}
