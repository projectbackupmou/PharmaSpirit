import React, { Component, Fragment } from 'react'
import mainBanner from "../images/home_bg.jpg"
import new_ques_home from "../images/new_ques_home.png"
import ques_bank_home from "../images/ques_bank_home.png"
import my_progress_home from "../images/my_progress_home.png"
import flagged_ques_home from "../images/flagged_ques_home.png"
// import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Footer from './Footer'
import  Navbar  from "./Navbar"

export default class Menu extends Component {
    render() {
        return (
            <Fragment>
          <Navbar/>
          <section class="landing_home_sec vh_height" style={{ "background": `url(${mainBanner})`}}>
{/* <img src={mainBanner} alt="" className="banner_img" /> */}
  <div class="container">
    <div class="landing_cate_area">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
        <Link to={"/QuestionMain"}>
              <div class="l_cate_box ripple">
                <div class="l_cate_box_inner">
                
                  <div class="l_cate_icon">
                    <img src={new_ques_home} alt="" />
                  </div>
               
                  <p>New Question</p>
                
                </div>
              </div>
              </Link>
        </div>
        <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
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
        </div>
        <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
          <Link to={"/myprogress"}>
              <div class="l_cate_box ripple">
                <div class="l_cate_box_inner">
                  <div class="l_cate_icon">
                    <img src={my_progress_home} alt="" />
                  </div>
                  <p>My Progress</p>
                </div>
              </div>
              </Link>
        </div>
        <div class="col-lg-3 col-md-6 col-12 l_cate_box_main">
            <Link to={"flaggedQuestion"}>
              <div class="l_cate_box ripple">
                <div class="l_cate_box_inner">
                  <div class="l_cate_icon">
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
                <Footer/>
            </Fragment>
        )
    }
}
