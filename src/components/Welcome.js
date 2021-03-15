import React, { Component, Fragment } from 'react'
// import "../App.css"
import axios from "axios"
import { Link } from "react-router-dom"

import Footer from './Footer'
import mainBanner from "../images/home_bg.jpg"
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
    handleSubmit = (e, val) => {
        //alert("hi")
        this.setState({
            successModelOpen: true,
        })
        e.preventDefault();

        axios.post("https://elvirainfotechcloud.com/questionbank/pharmasprit/index.php/PharmaApi/newLogin", JSON.stringify(this.state))
            .then(res => {
                //console.log(res.data.msg)
                let resData
                return this.setState({ resData: res.data })

            })
            .catch(err => console.log(err.message))
        //console.log(this.state)

    }

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

        let successModelClose = () => { this.setState({ successModelOpen: false }) }
        console.log(this.state.resData)
        return (

            <Fragment>
                <nav class="nav_sec" id="sticky-wrap">
                    <div class="container">
                        <div class="nav_inner">
                            <div class="logo_area">
                                <div class="logo_box"> <img src={logo} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="banner_sec">
                    <img src={mainBanner} alt="" className="banner_img" />
                    <div className="banner_overlay">
                        <div className="over_content">
                            <div className="container">

                                <div className="row">
                                    <div className="col-md-8">
                                        <h2>The beautiful thing about learningis nobody can take it away from you.</h2>
                                        <button type="button" className="btn btn-primary btn-sm">Register</button>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <form onSubmit={this.handleSubmit}>

                                            <input type="text" placeholder="UserName" name="username" value={this.state.username} onChange={this.handelChange} />

                                            <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handelChange} />
                                            {/* <SuccessModel show={this.state.successModelOpen} onHide={successModelClose} name={this.state.username} password={this.state.password} resData={this.state.resData} /> */}

                                            <button type="submit" className="btn btn-primary btn-lg btn-block" value="submit"   >
                                                login </button>
                                        </form>

                                        {/* <input type="submit" value="Submit" /> */}

                                        <span>or</span>
                                        <Link to={"/signup"}>
                                            <button type="button" class="btn btn-secondary btn-lg btn-block">sign up</button>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* <Footer /> */}

            </Fragment>
        )
    }

}

export default Welcome
