import React, {Component} from 'react'
import {Form, Button, Input, Icon} from 'antd'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {isLogin: false}
  }

  componentWillMount(){
    if(!this.state.isLogin){
      history.push('/home');
    }
  }
  render(){
    return(
      <div className="login">
        <Form>
          
        </Form>
      </div>
    )
  }
}
export default LoginPage;