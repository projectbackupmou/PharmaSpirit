import React, { Component, Fragment } from 'react'
// import "../App.css"
import axios from "axios"
 import { Link } from "react-router-dom"
import Bowser from "bowser";
//import expired_account_icon from "../images/expired_account_icon.png"
import mainBanner from "../images/bg_new.jpg"

import logo from "../images/logo.png"
import Footer from './Footer'

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            browser_name: "",
            cookie_id: "",
            os_name: "",
            os_version: "",
            os_version_name: "",
            plateform: "",
            status: null,
            check:"",
            blank_username:""



        }
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }


    getCheck = () => {
     
        var apidetail = { username: this.state.username, password: this.state.password, cookie_id: "8", browser_name: "", version: "", os_name: "", os_version: "", os_version_name: "", plateform: "" };
        axios.post("https://elvirainfotechcloud.com/pharmaspirit/Check_Session_Controller/check_session", (apidetail))
            .then(res => {
                console.log(res.data)

                this.setState({ status: res.data.status })

                if (this.state.status === true) {
                    //alert("contact to admin")
                   this.setState({check:"contact to admin"})
                   console.log(this.state.check)
                } else {
                    if (this.state.status === false) {

                        var result = Bowser.parse(window.navigator.userAgent)
                        //   let name =  result.browser.name 
                        // console.log(result)
                        document.cookie = "cookie_id=8"

                        if (result.browser.name) {
                            document.cookie = `browser_name = ${result.browser.name}`
                        }
                        if (result.browser.version) {
                            document.cookie = `version = ${result.browser.version}`
                            this.setState({ version: result.browser.version })
                        }
                        if (result.os.name) {
                            document.cookie = `os_name = ${result.os.name}`
                        }
                        if (result.os.version) {
                            document.cookie = `os_version = ${result.os.version}`
                        }
                        if (result.os.versionName) {
                            document.cookie = `os_version_name = ${result.os.versionName}`
                        }
                        if (result.platform.type) {
                            document.cookie = `plateform = ${result.platform.type}`
                        }
                        //console.log((document.cookie))


                        var cookie_id = this.getCookie('cookie_id');
                        var browser_name = this.getCookie('browser_name');
                        var version = this.getCookie('version');
                        var os_name = this.getCookie('os_name');
                        var os_version = this.getCookie('os_version');
                        var os_version_name = this.getCookie('os_version_name');
                        var plateform = this.getCookie('plateform');

                        // this.setState({ apidetails:username:"shankar@gmail.com", password:"1234", cookie_id:cookie_id,browser_name:browser_name,version:version,os_name:os_name,os_version:os_version,os_version_name:os_version_name,plateform:plateform})
                        var apidetail = { username: this.state.username, password: this.state.password, cookie_id: cookie_id, browser_name: browser_name, version: version, os_name: os_name, os_version: os_version, os_version_name: os_version_name, plateform: plateform };
                        //console.log(apidetail)
                  
                        axios.post("https://elvirainfotechcloud.com/pharmaspirit/Check_Session_Controller/add_session", (apidetail))
                            .then(res => {
                                console.log(res.data)
                                //this.setState({status:res.data.status})
                                //console.log(this.state.id)


                            })
                            .catch(err => console.log(err.message))
                    }
                    
                }
             


            })
            .catch(err => console.log(err.message))


    }
    getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }




    setCookies = () => {
       //alert("hhhhhgg")
        //console.log(Bowser.parse(window.navigator.userAgent));

        var result = Bowser.parse(window.navigator.userAgent)
        //   let name =  result.browser.name 
        // console.log(result)
        document.cookie = "cookie_id=8"

        if (result.browser.name) {
            document.cookie = `browser_name = ${result.browser.name}`
        }
        if (result.browser.version) {
            document.cookie = `version = ${result.browser.version}`
            this.setState({ version: result.browser.version })
        }
        if (result.os.name) {
            document.cookie = `os_name = ${result.os.name}`
        }
        if (result.os.version) {
            document.cookie = `os_version = ${result.os.version}`
        }
        if (result.os.versionName) {
            document.cookie = `os_version_name = ${result.os.versionName}`
        }
        if (result.platform.type) {
            document.cookie = `plateform = ${result.platform.type}`
        }
        //console.log((document.cookie))


        var cookie_id = this.getCookie('cookie_id');
        var browser_name = this.getCookie('browser_name');
        var version = this.getCookie('version');
        var os_name = this.getCookie('os_name');
        var os_version = this.getCookie('os_version');
        var os_version_name = this.getCookie('os_version_name');
        var plateform = this.getCookie('plateform');

        // this.setState({ apidetails:username:"shankar@gmail.com", password:"1234", cookie_id:cookie_id,browser_name:browser_name,version:version,os_name:os_name,os_version:os_version,os_version_name:os_version_name,plateform:plateform})
        var apidetail = { username: this.state.username, password: this.state.password, cookie_id: cookie_id, browser_name: browser_name, version: version, os_name: os_name, os_version: os_version, os_version_name: os_version_name, plateform: plateform };
        //console.log(apidetail)

        axios.post("https://elvirainfotechcloud.com/pharmaspirit/checksession", (apidetail))
            .then(res => {
                 console.log(res.data)
                this.setState({ status: res.data.status })
                   console.log(this.state.status)
                if (this.state.status === true) {
                  // alert("hhhdd")
                    this.setState({ browser_name: res.data.result.browser_name, version: res.data.result.version, cookie_id: res.data.result.cookie_id, os_name: res.data.result.os_name, os_version: res.data.result.os_version, os_version_name: res.data.result.os_version_name, plateform: res.data.result.plateform })

                    if (this.state.cookie_id === cookie_id && this.state.browser_name === browser_name && this.state.version === version && this.state.os_version === os_version && this.state.os_name === os_name && this.state.os_version_name === os_version_name && this.state.plateform === plateform) {
                        //alert("login done")
                        this.setState({check:"login done"})
                        console.log(this.state.check)

                    }
                    else {
                        //alert("contact to admin")
                       this.setState({check:"contact to admin"})
                    }
                 
                }
                else {
                    //alert("contact to admin")
                   this.setState({check:"contact to admin"})
                }
             
               


            })
            .catch(err => console.log(err.message))

 }

handleSubmit = (e, val) => {
    let blank_username=""
    let blank_password=""
    if (!this.state.username) {
        //alert("jk")
        
            blank_username="Blank User name"
    }else{
        blank_username=" "
    }
    if (!this.state.password) {
        //alert("jk")
        
        blank_password="blank password"
    }else{
        blank_password=" "   
    }
          
           if (blank_username || blank_password) {
                this.setState({ blank_username,blank_password })

              }
            
      e.preventDefault();
       if (document.cookie) {
        this.setCookies();
    }
        else {
         this.getCheck() }
   

  
            }

    // this.setState({
    //     successModelOpen: true,
    // })
    // e.preventDefault();

    // axios.post("https://elvirainfotechcloud.com/questionbank/pharmasprit/Login_Controller/newLogin", JSON.stringify(this.state))
    //     .then(res => {
    //        console.log(res.data)
    //         // let resData
    //          //this.setState({ token: res.data.data.token })
    //          //localStorage.setItem('token', this.state.token);
    //         // console.log(this.state.token)

    //     })
    //     .catch(err => console.log(err.message))
    //console.log(this.state)




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
                            <div class="col-lg-7 col-md-12 align-items-center d-flex">

                                <div class="member_signup_left">
                                    <h2>This service is <strong>ONLY</strong> available to PharmaSpirit MCQ Pre Course participants</h2>
                                    <Link to={"/signup"} class="register_btn blue_btn_comman">Register</Link>

                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 md_res_mar_top_30">
                                <div class="member_signup_right">
                                    <h3>PharmaSpirit Members</h3>
                                    <form action="" class="signup_form" onSubmit={this.handleSubmit} >
                                        <div class="row">
                                            <div class="col-md-12">

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control"  name="username" placeholder="Username" value={this.state.username} onChange={this.handelChange} />
                                                        {/* <span>{this.state.blank_username}</span> */}
                                                        <span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.blank_username }</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handelChange} />
                                                        <span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.blank_password }</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group btn_box">
                                                        {/* <button type="submit" class="btn btn_f_submit blue_btn_comman" data-toggle="modal" data-target="#expired_account_modal" style={{ "width": "100%" }}>Login</button> */}
                                                        <button type="submit" class="btn btn_f_submit blue_btn_comman" data-toggle="modal" data-target={(this.state.username && this.state.password)? "#expired_account_modal":""} style={{ "width": "100%" }}>Login</button>
                                                        
                                                    </div>
                                                    <div class="form-group btn_box">
                                                    <Link to={"/signup"}>
                                                        <button type="submit" class="btn btn_f_submit m_signup_btn">Signup</button>
                                                    </Link>
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

                 <div class="modal" id="expired_account_modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="enq_modal_body">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <div class="ex_acc_modal_top text-center">
                                         {/* <img src={expired_account_icon} alt="" />  */}
                                         <div class="ex_acc_modal_bottom text-center">
                                            <p style={{ textTransform: 'capitalize'}}>{this.state.check}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 



                <Footer />
            </>
        )
    }
}

export default Welcome

