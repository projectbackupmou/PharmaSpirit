import React, { Component, Fragment } from 'react'
// import "../App.css"
 import axios from "axios"
// import { Link } from "react-router-dom"
import Bowser from "bowser";
import { v4 as uuidv4 } from 'uuid';

// import Footer from './Footer'
import mainBanner from "../images/bg_new.jpg"
//import SuccessModel from "./modal/SuccessModel";
import logo from "../images/logo.png"
import Footer from './Footer'




class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            id:uuidv4(),
         blank_username:"",
         token:'',
         browser: {
            name: "Chrome",
            version: "11.0"
          },
          os: {
            name: "Windows",
            version: "NT 6.3",
            versionName: "8.1"
          },
          platform: {
            type: "desktop"
          },


        }
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          
        })
       
    }

    getCookies=()=>{
        var cookiesArray = document.cookie.split(";")
        //console.log(cookiesArray)
        for (var i=0 ;i<cookiesArray.length;i++){
            var nameValueArray = cookiesArray[i].split("=");
          // console.log( nameValueArray)
            // console.log("value   " + nameValueArray[1])
            // console.log("name   " +  nameValueArray[0])
            if(nameValueArray[0].trim()=="browsername")
          
            {
                if(nameValueArray[1]!=this.state.browser.name){
                    console.log("hi")
                }
                else{
                    console.log("hhhi")
                }
            }
        }
    }

    setCookies=()=>{
        //console.log(Bowser.parse(window.navigator.userAgent));

        var result = Bowser.parse(window.navigator.userAgent)
          //let name =  result.browser.name 
        //console.log(result)
        if(result.browser.name){
            document.cookie = `browsername = ${result.browser.name}`   
        }
        if(result.browser.version){
            document.cookie = `browserversion = ${result.browser.version}`   
        }
        if(result.os.name ){
            document.cookie = `osname = ${result.os.name}`   
        }
        if(result.os.version){
            document.cookie = `osversion = ${result.os.version}`   
        }
        if(result.platform.type){
            document.cookie = `platformtype = ${result.platform.type}`   
        }

       
        // var x = cookies.getItem(name)
        // console.log(x)
        // if (this.state.browser.name===x){
        //     alert("null")
        // }


     
        // var result = bowser.getParser(window.navigator.userAgent);
        // console.log(result);
        
      
        // document.write("You are using " + result.parsedResult.browser.name +
        //                " v" + result.parsedResult.browser.version + 
        //                " on " + result.parsedResult.os.name + "os version" +result.parsedResult.os.versionName);

       //document.cookie = "username=John Doe";
    
         //console.log(browser);
        // console.log(browser.os);
       }
    

    




    handleSubmit = (e, val) => {
       
        console.log(val)
       // e.preventDefault();
     if(document.cookie){
          
        this.setCookies();
        this.getCookies();

       }
    //   else{
    //       alert("gggg")
    //   }
        
       

   
      
    }
      
        // let blank_username=""
        // if (this.state.username.length>0) {
        //     //alert("jk")
        //      blank_username= ""
        //        }
        //        else{
        //         blank_username="blank"
        //        }
        //        if (blank_username ) {
        //             this.setState({ blank_username })
                   
        //           }
             
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
                        <div class="col-lg-7 col-md-12 align-items-center d-flex">
                           
                                <div class="member_signup_left">
                                <h2>This service is <strong>ONLY</strong> available to PharmaSpirit MCQ Pre Course participants</h2>
                                    <a href="" class="register_btn blue_btn_comman">Register</a>
                               
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12 md_res_mar_top_30">
                                <div class="member_signup_right">
                                    <h3>PharmaSpirit Members</h3>
                                    <form action="" class="signup_form"    onSubmit={this.handleSubmit(this.state.id)} >
                                        <div class="row">
                                            <div class="col-md-12">

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" required name="username" placeholder="Username" value={this.state.username}  onChange={this.handelChange}/>
                                                       {/* <span>{this.state.blank_username}</span> */}
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name="password" required placeholder="Password" value={this.state.password} onChange={this.handelChange}/>
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
                <Footer/>
            </>
        )
    }
}

export default Welcome

