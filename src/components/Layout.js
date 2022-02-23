import NavItem from "./NavItem"
import Footer from "./Footer"
const Layout=({children})=>{
return(
    <div className="AppLayout">
        <NavItem/>
        <div className="pageContent">
        {children}
        </div>
    </div>
)
}
export default Layout