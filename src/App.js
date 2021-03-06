import React, { Component ,Fragment} from 'react'
import {Route,Switch} from "react-router-dom"

import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Error from './components/Error'
import QuestionMain from './components/question/QuestionMain'
import QuestionBank from './components/questionBank/QuestionBank'
import Thankyou from './components/Thankyou';
import AnsweredQuestion from './components/AnsweredQuestion';
import MyProgress from './components/MyProgress';
import FlaggedQuestion from './components/FlaggedQuestion';
import Dashboard from './components/Dashboard'

 class App extends Component {
  render() {
    return (
      
      <Fragment>
        {/* <Navbar/> */}
        {/* <Footer/> */}
        <Switch>
        <Route exact path="/" component={Welcome}/>
        {/* <SuccessModel/> */}
        <Route exact path="/signup/" component={Signup}/>
        <Route exact path="/Dashboard/" component={Dashboard}/>
        <Route exact path="/questionMain/" component={QuestionMain}/>
        <Route exact path="/questionBank/" component={QuestionBank}/>
        <Route  path="/thankyou" component={Thankyou}/>
        <Route  path="/answeredQuestion" component={AnsweredQuestion}/>
        <Route  path="/myprogress" component={MyProgress}/>
        <Route  path="/flaggedQuestion" component={FlaggedQuestion}/>
        <Route  component={Error}/>
        
        
        </Switch>
        
     
        {/* <Error/> */}
      
       
      </Fragment>
     
    )
  }
}

export default App;
