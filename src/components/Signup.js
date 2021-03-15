import React, { Component, Fragment } from 'react'
import {Link, Redirect} from "react-router-dom"
import axios from "axios"
import Footer from './Footer';
import homeImg from "../images/home_bg.jpg"
import logo from "../images/logo.png"

 //import Thankyou from './Thankyou';


//const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
//const phoneRex = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
            isPasswordShow:false,
            first_nameError: "",
            last_nameError: "",
            emailError: "",
            phoneError: "",
            passwordError: ""
}
           
     
    }
    


    handelChange = (e) => {
        e.preventDefault();
       
       
        this.setState({[e.target.name]:e.target.value})
   

    }

    togglePasword=()=>{
        const {isPasswordShow} = this.state
        this.setState({isPasswordShow:!isPasswordShow})
    }
    dataPost = () => {
        axios.post("https://elvirainfotechcloud.com/questionbank/pharmasprit/index.php/PharmaApi/registration", JSON.stringify(this.state))
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
        console.log(this.state)
    }
    validation=()=>{
        let first_nameError= "";
        let last_nameError= "";
        let emailError= "";
        let passwordError= "";
        let  phoneError=""

        // email check
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const pattern=validEmailRegex.test(this.state.email)
          if(!pattern){
              emailError="not valid"
          }
       
        //   passwordword check
          const validpassword= RegExp()
       const passwordpattern=validpassword.test(this.state.password)
       if(!this.state.password){
        passwordError="empty"
       }else{
        if(!passwordpattern){
            passwordError="not password valid"
        }
       }
    
        //phone number check
        const validPhone =  RegExp(/^[+91]^[7-9]\d{11}$/);
        const phonepattern=validPhone.test(this.state.phone)

        if(!this.state.phone){
            phoneError="enter phone number"
           }else{
            if(!phonepattern){
                phoneError="only number"
            }else if(passwordpattern === 10){
                phoneError="length 10" 
            }
           }

        if(!this.state.first_name){
            first_nameError="name blank"
        }
        if(!this.state.last_name){
            last_nameError=" last name blank"
        }

        if(first_nameError || last_nameError || emailError || passwordError|| phoneError){
             this.setState({first_nameError,last_nameError,emailError,passwordError,phoneError})
             return false
        }
        return true

    }
    handleSubmit = (e) => {
        //console.log(this.state.first_name)
        const { first_name, last_name, email, phone, password,errors } = this.state
       //alert("ji")
        e.preventDefault();
        //this.dataPost()
        //const isvalidate = this.validation();
       // if(isvalidate){
            // this.dataPost()
             console.log(this.state)
        //   <Redirect to='/thankyou'></Redirect>
       // this.props.history.push(`/thankyou`);
            
            // this.setState({show:true})
        }
     
      

    render() {
        const { isPasswordShow,first_nameError,last_nameError,emailError,passwordError,phoneError} = this.state;
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
                {/* <!-- landing_home_sec --> */}
                <section className="landing_home_sec vh_height" style={{ "background": `url(${homeImg})`}}> 
                
                    <div className="container">
                        <div className="signup_area">
                            <h3>Sign up</h3>
                            <form action="" method="POST" className="signup_form" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                           
                                                <input type="text" className="form-control" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handelChange}>
                                                </input>
{/*                                                
                                                {errors.first_name.length >0 &&
                                                    <span className='error'>{errors.first_name}</span>} */}
                                                    <div style={{color:"red", fontSize:"12px"}}>{first_nameError}</div>
                                                   <div> 
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" name="last_name"  value={this.state.last_name} onChange={this.handelChange}>
                                            </input>
                                            <div style={{color:"red", fontSize:"12px"}}>{last_nameError}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div>
                                                <input type="email" className="form-control" placeholder="Email" name="email"  value={this.state.email} onChange={this.handelChange}>
                                                </input>
                                                <div style={{color:"red", fontSize:"12px"}}>{emailError}</div>
                                                {/* {errors.email.length > 0 &&
                                                    <span className='error'>{errors.email}</span>} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div>
                                                <input type="text" className="form-control" placeholder="Phone Number" name="phone"  value={this.state.phone} onChange={this.handelChange}>
                                                </input>
                                                <div style={{color:"red", fontSize:"12px"}}>{phoneError}</div>
                                                {/* {errors.phone.length > 0 &&
                                                    <span className='error'>{errors.phone}</span>} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type={isPasswordShow?"text":"password"} className="form-control" placeholder="Password" placeholder=" Password" name="password"  value={this.state.password} onChange={this.handelChange}>
                                            
                                            </input>
                                            <div style={{color:"red", fontSize:"12px"}}>{passwordError}</div>
                                            {/* <i className={`fas ${isPasswordShow?"fa-eye":"fa-eye-slash"}`} onClick={this.togglePasword}></i> */}
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group btn_box">
                                            {/* {this.state.show?(<Link to="/thankyou"> */}
                                                <button type="submit"  className="btn btn_f_submit blue_btn_comman" >Submit</button>
                                            {/* </Link>) */}
                                            {/* :( <button type="submit"  className="btn btn_f_submit blue_btn_comman" >Submit</button>)} */}
                                           
                                                 
                                            
                                         
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <Thankyou/> */}
                </section>

                {/* my work */}
                {/* <div className="sign_up">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" placeholder="Frist Name" name="first_name" required value={this.state.first_name} onChange={this.handelChange} /> <br></br>

                            {errors.first_name.length > 0 &&
                                <span className='error'>{errors.first_name}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder=" Last Name" name="last_name" required value={this.state.last_name} onChange={this.handelChange} /><br></br>
                            {errors.last_name.length > 0 &&
                                <span className='error'>{errors.last_name}</span>}
                        </div>
                        <div>
                            <input type="email" placeholder=" Email" name="email" required value={this.state.email} onChange={this.handelChange} /><br></br>
                            {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder="123-45-678" name="phone" required value={this.state.phone} onChange={this.handelChange} /><br></br>
                            {errors.phone.length > 0 &&
                                <span className='error'>{errors.phone}</span>}
                        </div>
                        <input type="text" placeholder=" Password" name="password" required value={this.state.password} onChange={this.handelChange} /> <br></br>
                        <button type="submit" className="btn btn-primary" value="submit"   >
                            login </button>

                    </form>
                   
                </div> */}
                <Footer />
                {/* <a href="javascript:void(0)" id="scrollup"><i class="fa fa-angle-up" aria-hidden="true"></i></a>  */}
            </Fragment>


        )
    }
}
export default Signup
