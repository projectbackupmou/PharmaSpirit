import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Modal,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

export default class SuccessModel extends Component {   
   

    
    render() {
     // console.log(this.props)
      if(this.props.name == "" && this.props.password == ""){
        return (
            
            <div>
              
               <Modal
              {...this.props}
              size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
               >
                <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p> blank value </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
       
            </div>
        )
      }else{
        return (
            
          <div>
            
             <Modal
            {...this.props}
            size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
             >
              <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Centered Modal</h4>
      <p> {this.props.resData.msg} </p>
    </Modal.Body>
    <Modal.Footer>
    <Link to={"/Menu"}><Button onClick={this.props.onHide}>Close</Button></Link>
    </Modal.Footer>
  </Modal>
     
          </div>
      )
      }
    }
}
