import { ThemeContext,UserContext} from "../../context";

export const WithThemeContext = (InnerComponent) => {
  return (props) =>{
  // это анонимный функциональный компонент JSX
    return (
      <ThemeContext.Consumer>
      {([theme, setTheme, language,setLanguage]) => {
      return <InnerComponent theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}> </InnerComponent>}
    }
    </ThemeContext.Consumer>
    )
  }
}

export const WithUserContext = (InnerComponent) => (props) =>(
    <UserContext.Consumer>
      {(user)=>{
        return <InnerComponent user={user} {...props}/>}
      }
    </UserContext.Consumer>)
  

