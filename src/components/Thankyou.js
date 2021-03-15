import React, { Component } from 'react'
import { Fragment } from 'react'
import homeImg from "../images/home_bg.jpg"
import thank_you from "../images/thank_you_img.png"

export default class Thankyou extends Component {
    render() {
        return (
            <Fragment>
                <section className="landing_home_sec vh_height"  style={{ "background": `url(${homeImg})`}}>
                    {/* <img src={homeImg} alt="" className="banner_img" /> */}
                    <div class="container">
                        <div class="thankyou_area">
                            <div class="thankyou_img">
                                <img src={thank_you} alt="" />
                            </div>
                            <h2>Thank you</h2>
                            <h4> for Signing up.</h4>
                            <p>Please allow 48 – 72 hours for activation. You will
                            receive an email notification once your account
                             is activated</p>
                            <a href="" class="thanks_continue_btn blue_btn_comman">Continue</a>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
