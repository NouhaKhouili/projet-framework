import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


class App extends Component{
constructor(){
    super()
    this.state = {
        fullName:'',
        userName:'',
        email:'',
        password:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

changeFullName(event){
    this.setState({
        fullName:event.target.value
    })
}

changeUserName(event){
    this.setState({
        userName:event.target.value
    })
}

changeEmail(event){
    this.setState({
        email:event.target.value
    })
}

changePassword(event){
    this.setState({
        password:event.target.value
    })
}

onSubmit(event){
    event.preventDefault()

    const registred = {
        fullName : this.state.fullName,
        userName : this.state.userName,
        email : this.state.email,
        password : this.state.password
    }
//post registred to the URI "connection with the backend"
    axios.post('http://localhost:5000/app/singup', registred)
    .then(response => console.log(response.data))

    this.setState({
        fullName:'',
        userName:'',
        email:'',
        password:''

    })

   

}
    
    render(){
        return( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='from-control form-group' /><br></br>


                            <input type='text'
                            placeholder='UserName'
                            onChange={this.changeUserName}
                            value={this.state.username}
                            className='from-control form-group'/><br></br>

                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='from-control form-group'></input><br></br>

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='from-control form-group'/>

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/> 


                            
                        </form>

                    </div>
                    
                </div>

            </div>
        );
    }
}

export default App;