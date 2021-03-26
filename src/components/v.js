class BasicForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        nameError: '',
        emailError: ''
      };
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value }, () => {
        this.validateName();
      });
    };
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value }, () => {
        this.validateEmail();
      });
    };
  
    validateName = () => {
      const { name } = this.state;
      this.setState({
        nameError:
          name.length > 3 ? null : 'Name must be longer than 3 characters'
      });
    }
  
    validateEmail = () => {
      const { email } = this.state;
      this.setState({
        emailError:
          email.length > 3 ? null : 'Email must be longer than 3 characters'
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      const { name, email } = this.state;
      alert(`Your state values: \n 
              name: ${name} \n 
              email: ${email}`);
    };
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
              id='name'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.handleNameChange}
              onBlur={this.validateName}
            />
            <div className='invalid-feedback'>{this.state.nameError}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
              id='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
            />
            <div className='invalid-feedback'>{this.state.emailError}</div>
          </div>
          <button type='submit' className='btn btn-success btn-block'>
            Submit
          </button>
        </form>
      );
    }
  }
  
  ReactDOM.render(<BasicForm />, document.getElementById('root'))
  // validation = () => {
  //   let first_nameError = "";
  //   let last_nameError = "";
  //   let emailError = "";
  //   let passwordError = "";
  //   let phoneError = ""

  //   // email check
  //   const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  //   const pattern = validEmailRegex.test(this.state.email)
  //   if (!pattern) {
  //     emailError = "not valid"
  //   }

  //   //   passwordword check
  //   const validpassword = RegExp()
  //   const passwordpattern = validpassword.test(this.state.password)
  //   if (!this.state.password) {
  //     passwordError = "empty"
  //   } else {
  //     if (!passwordpattern) {
  //       passwordError = "not password valid"
  //     }
  //   }

  //   //phone number check
  //   const validPhone = RegExp(/^[+91]^[7-9]\d{11}$/);
  //   const phonepattern = validPhone.test(this.state.phone)

  //   if (!this.state.phone) {
  //     phoneError = "enter phone number"
  //   } else {
  //     if (!phonepattern) {
  //       phoneError = "only number"
  //     } else if (passwordpattern === 10) {
  //       phoneError = "length 10"
  //     }
  //   }

  //   if (!this.state.first_name) {
  //     first_nameError = "name blank"
  //   }
  //   if (!this.state.last_name) {
  //     last_nameError = " last name blank"
  //   }

  //   if (first_nameError || last_nameError || emailError || passwordError || phoneError) {
  //     this.setState({ first_nameError, last_nameError, emailError, passwordError, phoneError })
  //     return false
  //   }
  //   return true

  // }
  onChange={ phone => this.setState({ phone })


     {/* <input type="text" name="phone" className="form-control" placeholder="Phone Number"  value={this.state.phone} onChange={this.handelChange}  /> */}
     <Input
     name="phone"
    placeholder="Enter phone number"
    value={this.state.phone}
    //onChange={this.handelChange} 
       
     />
   {/* {this.state.phone && isValidPhoneNumber(this.state.phone) ? (<span>  valid</span>) :(<span>not  valid</span>)} */}
 {  this.state.phone ? (isValidPhoneNumber(this.state.phone) ? undefined : 'Invalid phone number') : ''}