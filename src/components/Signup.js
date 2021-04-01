import React, { Component, Fragment } from 'react'
import { Link, Redirect } from "react-router-dom"
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import axios from "axios"
import Footer from './Footer';
import homeImg from "../images/home_bg.jpg"
import logo from "../images/logo.png"

//import Thankyou from './Thankyou';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
//const phoneRex = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      error: {
        first_nameError: '',
        last_nameError: '',
        emailError: "",
        passwordError: "",
        phone: ""
      },
      fristname_blank:"",
      phone_blank:""


    }


  }



  handelChange = (e) => {
    e.preventDefault();
     this.setState({  [e.target.name]: e.target.value })
    // const { error } = this.state

    // const { name, value } = e.target;
    // console.log(e.target.value)
    // e.preventDefault();
    // this.setState({ name: value })
    // this.validation();
    // switch (name) {
      // case "first_name":
      //   error.first_nameError =
      //     value.length > 0 ? "" : '**Frist name cannot blank'

      //   break
      // case "last_name":
      //   error.last_nameError =
      //    value.length > 0 ? "" : '**Last name cannot blank'
      //   break;
      // case "email":
      //   error.emailError =
      //     validEmailRegex.test(value)
      //       ? ''
      //       : '**Email is not valid!';
      //   break;
      // case "password":
      //   error.passwordError =
      //     value.length > 2
      //       ? ''
      //       : 'password is not valid!';
      //   break;
      // default:
      //   break;
    // }
   
    //console.log(this.state.error)



  }
  // checkphone=(e)=>{
  //  this.setState({value:e.target.value})
  //  console.log(e.target.value)
  // }

  // validateForm = (error) => {
  //   let valid = true;
  //   //console.log(Object.values(error))
  //   Object.values(error).forEach(
  //     // if we have an error string set valid to false
  //     (val) => val.length > 0 && (valid = false), (val) => {

  //     }


  //   );
  //   return valid;
  // }

  // togglePasword = () => {
  //   const { isPasswordShow } = this.state
  //   this.setState({ isPasswordShow: !isPasswordShow })
  // }
  dataPost = () => {
    axios.post("https://elvirainfotechcloud.com/pharmaspirit/PharmaApi/registration", JSON.stringify(this.state))
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err.message))
    console.log(this.state)
  }
blankChack=()=>{


  let fristname_blank=""
  let lastname_blank=""
  let phone_blank=""
  let email_blank=""
  let password_blank=""
  //let show=true


  if(!this.state.first_name){
    fristname_blank = "**Frist name blank"}

    if(!this.state.last_name){
      lastname_blank = "**Last name blank"}

      if(!this.state.last_name){
      password_blank = "**Password blank"}

      if(!this.state.email){
        email_blank = "**email blank"}
        else{
          if(validEmailRegex.test(this.state.email)){
            email_blank = " "
          //return show
          }else{
            email_blank = " **email invalid";
          }
        }

    if(!this.state.phone){
      phone_blank="phone blank"
    }else{
      if(isValidPhoneNumber(this.state.phone)){
        phone_blank="hhhh"

      }
      phone_blank="invalide phone "
    }
  // }else{
  //   if(this.state.first_name.length>1){
  //     fristname_blank="hhh"
  //   }
  // }

  if (fristname_blank || phone_blank || lastname_blank|| email_blank || password_blank) {
        this.setState({ fristname_blank, phone_blank,lastname_blank,email_blank,password_blank })
         return false
      }
       return true
}

  handleSubmit = (e) => {
   
    this.dataPost();
    e.preventDefault();
   if( this.blankChack()){
    
    <Redirect to='/thankyou'></Redirect>
      this.props.history.push(`/thankyou`);

   }
    //  this.dataPost()
    //const isvalidate = this.validation();
    //if (this.validateForm(this.state.error)) {
    
     
      console.log(this.state);
    //       <Redirect to='/thankyou'></Redirect>
    //  this.props.history.push(`/thankyou`);
   // }
   

    // this.setState({show:true})
  }

  //  PhoneAdapter = ({ input }) => (
  //     <PhoneInput value={input.value.value} onChange={value => input.onChange(value)} />
  // )

  render() {
    // const { error } = this.state;
  //  console.log(this.state.fristname_blank)
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
        {/* <!-- landing_home_sec --> */}
        <section className="landing_home_sec vh_height" style={{ "background": `url(${homeImg})` }}>


          <div className="container">
            <div className="signup_area">
              <h3>Sign up</h3>
              <form className="signup_form" onSubmit={this.handleSubmit}>
                <div className="row">

                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" name="first_name" className="form-control" placeholder="Frist Name" value={this.state.first_name} onChange={this.handelChange} />
                      {/* {error.first_nameError.length > 0 &&
                        <span className='error' style={{color: "red", display: "inherit",textAlign:"left" }} >{error.first_nameError}</span>} */}
                        {(this.state.first_name.length>0)?"":<span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.fristname_blank}</span>}
                    </div>

                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" name="last_name" className="form-control" placeholder="Last Name" value={this.state.last_name} onChange={this.handelChange} />
                      {/* {error.last_nameError.length > 0 &&
                        <span className='error' style={{ color: "red" }}>{error.last_nameError}</span>} */}
                        {(this.state.last_name.length>0)?"":<span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.lastname_blank}</span>}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="text" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handelChange} />
                      {/* {error.emailError.length > 0 &&
                        <span className='error' style={{ color: "red",display: "inherit",textAlign:"left" }}>{error.emailError}</span>} */}
                    <span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.email_blank}</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="password" name="password" className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handelChange} autoComplete="off" />
                    {(this.state.password.length>0)?"":<span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.password_blank}</span>}
                    </div>
                  </div>
                

                  {/* <div class="col-md-12">
                    <div class="form-group">
                      <Input
                  
                      className="form-control"
                        name="phone"
                        placeholder="Enter phone number"
                        value={this.state.phone} 
                        onChange={ phone => this.setState({ phone })}/>
                    </div>
                    {  (this.state.phone ? (isValidPhoneNumber(this.state.phone) ? undefined :<span style={{color: "red", display: "inherit",textAlign:"left" }}>'Invalid phone number'</span>) : '')}
                  </div>
                  {/* {(this.state.phone.length>0)?"":<span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.phone_blank}</span>} */}
                  {/* <span>{this.state.phone_blank}</span>  */}

                  <div class="col-md-12">
                    <div class="form-group">
                    <PhoneInput
                  
                  className="form-control"
                    name="phone"
                    placeholder="Enter phone number"
                    value={this.state.phone} 
                    onChange={ phone => this.setState({ phone })}/>
                     <span style={{color: "red", display: "inherit",textAlign:"left" }}>{this.state.phone_blank}</span>
                      </div>
                      </div>
                
                   
                  <div class="col-md-12">
                    <div class="form-group btn_box">
                      <button type="submit" className="btn btn_f_submit blue_btn_comman">Submit</button>
                    </div>
                  </div>
               
                </div>

              </form>


            </div>
          </div>
        </section>




        <Footer />
        {/* <a href="javascript:void(0)" id="scrollup"><i class="fa fa-angle-up" aria-hidden="true"></i></a>  */}
      </Fragment>


    )
  }
}
export default Signup
