import { ThemeContext} from "../../context";

export const WithThemeContext = InnerCompomt => props =>{
  
  return (
    <ThemeContext.Consumer>
    {([theme, setTheme]) => {
    return <InnerCompomt theme={theme} setTheme={setTheme}> </InnerCompomt>}
  }
  </ThemeContext.Consumer>
  )
}
//функция которая возвращает переденный компонент!!!