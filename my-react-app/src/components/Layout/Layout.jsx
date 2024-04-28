import "./Layout.css"
import {Footer, Header, Left, Main, Right} from "../"
const Layout = () => {
  return (
    <div className="layout-container">
    <Header/>
    <Main/> 
    {/* <div className="flex flex-col flex-1 layout-child-container"> 
      
    </div> */}
    <Left/>
      <Right/>
    <Footer/>
    </div>
  )
}

export default Layout
//Todo se importa o hereda en el layout