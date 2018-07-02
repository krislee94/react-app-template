import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {addGun,removeGun,addGunAsync} from './redux/app.redux';

// const mapStatetoProps = (state)=>{
//   return {num:state}
// }

// const actionCreators = {addGun,removeGun,addGunAsync}

// @connect(mapStatetoProps,actionCreators)

@connect(
  state=>{return {num:state}},
  {addGun,removeGun,addGunAsync}
)

class App extends Component {
  render() {
    
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>现在有机枪{this.props.num}把</h1>
        <Button type = "primary" onClick={addGun}>add</Button>
        <Button type = "primary"  style={{marginTop:'5px'}} onClick={removeGun}>sub</Button>
        <Button type = "primary" style={{marginTop:'5px'}} onClick={addGunAsync}>async add</Button>
      </div>
    );
  }
}

export default App;
