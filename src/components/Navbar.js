import React, { Component } from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
// import "../App.css"

//import mainBanner from "../images/home_bg.jpg"
import logo from "../images/logo.png"

class Navbar extends Component {

  state = {
    subPath: window.location.pathname,
  }
  render() {
    return (
      <nav class="nav_sec" id="sticky-wrap">
        <div class="container">
          <div class="nav_inner">
            <div class="logo_area">
              <div class="logo_box"> <a class="" href="index.html"><img src={logo} alt="" /></a> </div>
            </div>
            <div class="nav_area">
              <div class="stellarnav">
                <ul>

                  <li ><Link to={"/dashboard"}>Home</Link></li>
                  {(window.location.pathname == '/QuestionMain') ? null :
                    (<li ><Link to={"/QuestionMain"} >New Questions</Link></li>)}


                  {(window.location.pathname == '/questionBank') ? null :
                    <li><Link to={"/questionBank"}>Question Bank</Link></li>
                  }


                   {(window.location.pathname == '/myprogress') ? null :
                    <li> <Link to={"/myprogress"}>My Progress</Link></li>
                  }
                        {(window.location.pathname == '/flaggedQuestion') ? null :
                   <li><Link to={"/flaggedQuestion"}>Flagged Questions</Link></li>
                  }
                  
                  
                  <li><a href="">Log out</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
