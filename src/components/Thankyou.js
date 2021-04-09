import React, { Component } from 'react'
import { Fragment } from 'react'
import homeImg from "../images/home_bg.jpg"
import { Link } from "react-router-dom"
//import thank_you from "../images/thank_you_img.png"
import Footer from './Footer'
import logo from "../images/logo.png"

export default class Thankyou extends Component {
    render() {
        { console.log(this.props.location.state) }
        return (

            <Fragment>
                <nav className="nav_sec nav_transparent" id="sticky-wrap-">
                    <div className="container">
                        <div className="nav_inner">
                            <div className="logo_area">
                                <div className="logo_box"> <a className="" href="index.html"><img src={logo} alt="" /></a> </div>
                            </div>

                        </div>
                    </div>
                </nav>

                <section className="landing_home_sec vh_height" style={{ "background": `url(${homeImg})` }}>
                    {/* <img src={homeImg} alt="" className="banner_img" /> */}
                    <div class="container">
                        <div class="thankyou_area">
                            {/* <div class="thankyou_img">
                                <img src={thank_you} alt="" />
                            </div> */}
                            {/* <h2>Thank you</h2> */}
                            {(this.props.location.state.message) ? <h4>Email Exists <br></br>

                                <Link to={"/signup"} class="thanks_continue_btn blue_btn_comman">Continue</Link></h4>
                                : <h4>Thank you for Signing up.  <p>Please allow 48 – 72 hours for activation. You will
                                receive an email notification once your account
                             is activated</p>  <Link to={"/"} class="thanks_continue_btn blue_btn_comman">Continue</Link></h4>}

                            {/* <Link to={"/"} class="thanks_continue_btn blue_btn_comman">Continue</Link> */}
                        </div>
                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
