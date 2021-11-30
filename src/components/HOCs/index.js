import { ThemeContext} from "../../context";

export const WithThemeContext = InnerCompomt => props =>{
  
  return (
    <ThemeContext.Consumer>
    {([theme, setTheme, language]) => {
    return <InnerCompomt theme={theme} setTheme={setTheme} language={language}> </InnerCompomt>}
  }
  </ThemeContext.Consumer>
  )
}
//функция которая возвращает переденный компонент!!!