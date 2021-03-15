import React, { Component, Fragment } from 'react'
// import "../App.css"
// import axios from "axios"
// import { Link } from "react-router-dom"

// import Footer from './Footer'
import mainBanner from "../images/bg_new.jpg"
//import SuccessModel from "./modal/SuccessModel";
import logo from "../images/logo.png"


class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            successModelOpen: false,
            resData: ""


        }
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    // handleSubmit = (e, val) => {
    //     //alert("hi")
    //     this.setState({
    //         successModelOpen: true,
    //     })
    //     e.preventDefault();

    //     axios.post("https://elvirainfotechcloud.com/questionbank/pharmasprit/index.php/PharmaApi/newLogin", JSON.stringify(this.state))
    //         .then(res => {
    //             //console.log(res.data.msg)
    //             let resData
    //             return this.setState({ resData: res.data })

    //         })
    //         .catch(err => console.log(err.message))
    //     //console.log(this.state)

    // }

    // componentDidMount() {
    //     axios.get("https://elvirainfotechcloud.com/questionbank/admin/index.php/api/Student/login")
    //         .then(res => {
    //             console.log(res)
    //             this.setState({ testData: res.data })

    //         }).catch(err => {
    //             console.log(err)
    //             this.setState({ err: "data not show" })
    //         })
    // }

    render() {

        // let successModelClose = () => { this.setState({ successModelOpen: false }) }
        return (

            <>

                <nav class="nav_sec nav_transparent" id="sticky-wrap-">
                    <div class="container">
                        <div class="nav_inner">
                            <div class="logo_area">
                                <div class="logo_box"> <a class="" href="index.html"><img src={logo} alt="" /></a> </div>
                            </div>

                        </div>
                    </div>
                </nav>
                <div class="body_wrapper"></div>
                <section class="landing_home_sec vh_height" style={{ "background": `url(${mainBanner})` }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-12">
                                <div class="member_signup_left">
                                    <h2>This service is <strong>ONLY</strong> available to PharmaSpirit MCQ Pre Course participants</h2>
                                    <a href="" class="register_btn blue_btn_comman">Register</a>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 md_res_mar_top_30">
                                <div class="member_signup_right">
                                    <h3>PharmaSpirit Members</h3>
                                    <form action="" class="signup_form">
                                        <div class="row">
                                            <div class="col-md-12">

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group btn_box">
                                                        <button type="submit" class="btn btn_f_submit blue_btn_comman" style={{ "width": "100%" }}>Login</button>
                                                    </div>
                                                    <div class="form-group btn_box">
                                                        <button type="submit" class="btn btn_f_submit m_signup_btn">Signup</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>



                        </div>
                    </div>

                </section>
            </>
        )
    }
}

export default Welcome

