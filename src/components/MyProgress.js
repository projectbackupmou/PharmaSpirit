import React, { Component } from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import lt_common_tlt_bg from "../images/lt-common-tlt-bg.png"
import progress_icon from "../images/progress_icon.png"

export default class MyProgress extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="answered-question-sec win-height">
                    <div class="container">
                        <div class="answered-question-block">
                            <h2 class="lt-common-title" style={{ "backgroundImage": `url(${lt_common_tlt_bg})` }}>My Progress</h2>
                            <div class="comman_top">
                                <div class="flagged_ques_area">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src="images/progress_icon.png" alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 my_progress_box_main d-flex">
                                            <div class="my_progress_box round_shadow_comman w_100">
                                                <div class="media">
                                                    <div class="media-left">
                                                        <img class="media-object" src={progress_icon} alt="" />
                                                    </div>
                                                    <div class="media-body">
                                                        <h3>Management Questions</h3>
                                                        <p>1 Attempts</p>
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
                <div>
                    <Footer />
                </div>


            </>
        )
    }
}
