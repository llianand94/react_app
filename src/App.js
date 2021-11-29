import './App.css';
import React, {Component} from 'react';
import {UserContext, ThemeContext} from './context';
import Header from './components/Header';
import Tree from './components/Tree';
import Footer from './components/Footer';
import CONSTANTS from './constants';
const {THEMES, LANG} = CONSTANTS;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      theme:THEMES.LIGHT,
      language:LANG.EN,
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://i.insider.com/6171279833f4b300189ad407?width=700'
      }
    }
  }
  
  setTheme = (theme) => {this.setState({theme})}
  setLanguage = (language) =>{this.setState({language:language})}

  render(){
    const {user, theme, language} = this.state;
    return <ThemeContext.Provider value={[theme,this.setTheme,language,this.setLanguage]}>
      <UserContext.Provider value={user}>
        <Header />
        <Tree/>
        <Footer/>
        </UserContext.Provider>        
      </ThemeContext.Provider>;
  }
}

export default App;

