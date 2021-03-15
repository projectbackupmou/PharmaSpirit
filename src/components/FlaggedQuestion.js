import React, { Component } from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import lt_common_tlt_bg from "../images/lt-common-tlt-bg.png"

export default class FlaggedQuestion extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="answered-question-sec win-height">
                    <div class="container">
                        <div class="answered-question-block">
                            <h2 class="lt-common-title" style={{ "backgroundImage": `url(${lt_common_tlt_bg})` }}>Flagged Question</h2>
                            <div class="comman_top">
                                <div class="flagged_ques_area">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 flagged_ques_box_main d-flex">
                                            <a href="">
                                                <div class="flagged_ques_box round_shadow_comman">
                                                    <h3>Management Questions</h3>
                                                    <p>A short quiz reviewing point-of care testing in Ontario pharmacies</p>
                                                    <h5>10 Questions</h5>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                                  
                  <a href="" id="scrollup"><i class="fa fa-angle-up" aria-hidden="true"></i></a> </div>

                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
