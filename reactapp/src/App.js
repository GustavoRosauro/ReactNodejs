import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import Home from './components/Home'
import Inserir from './components/inserir';

export default class App extends Component{
  static displayNampe = App.name;

  render(){   
    return(
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/inserir' component={Inserir}/>
      </Layout>
    ) 

  }
}