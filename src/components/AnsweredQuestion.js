import React, { Component } from 'react'

import lt_common_tlt_bg from "../images/lt-common-tlt-bg.png"
import right_trick from "../images/right-trick.png"
import crose_icon from "../images/crose-icon.png"



import Footer from './Footer'
import Navbar from './Navbar'

export default class AnsweredQuestion extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="answered-question-sec win-height">
          <div class="container">
            <div class="answered-question-block">
              <h2 class="lt-common-title" style={{ "backgroundImage": `url(${lt_common_tlt_bg})` }}>Answered Question</h2>
              <div class="answered-question-wrap">
                <div class="answered-question-panel right-ans">
                  <div class="answered-question-qu" >
                    <h5><span>1.</span> Question # 192</h5>
                    <p >The pharmacy technician can do all the following Except:</p>
                  </div>
                  <div class="answered-question-ans">
                    <p style={{ "backgroundImage": `url(${right_trick})` }}>Transfer a lorazepam prescription to another pharmacy</p>
                  </div>
                </div>
                <div class="answered-question-panel wrong-ans">
                  <div class="answered-question-qu">
                    <h5><span>1.</span> Question # 192</h5>
                    <p>The pharmacy technician can do all the following Except:</p>
                  </div>
                  <div class="answered-question-ans">
                    <p style={{ "backgroundImage": `url(${crose_icon})` }}>Transfer a lorazepam prescription to another pharmacy</p>
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
