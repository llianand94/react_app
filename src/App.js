import { FooterWithThemeContext } from './components/Footer';
import { ThemeContext, UserContext } from './context';
import { HeaderWithThemeContext } from './components/Header';
import TreeWithThemeContext from './components/Tree';
import { Component } from 'react';
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
        <HeaderWithThemeContext />
        <TreeWithThemeContext/>
        <FooterWithThemeContext/>
        </UserContext.Provider>        
      </ThemeContext.Provider>;
  }
}

export default App;


