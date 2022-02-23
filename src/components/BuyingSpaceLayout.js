import BySpaceNavItem from "./BySpaceNavItem"
import Footer from "./Footer"
import { useRouter } from 'next/router';
const BuyingSpaceLayout=({children})=>{
    const router = useRouter();
return(
    <div className="AppLayout">
    <div className="row bg-white shadow-sm">
        <h1 className="BuyingSpaceh1">BuyingSpace</h1>
        {router.pathname==="/buyingspace/spaces" &&  <div className="Rectangle-3 button123">Create Buying Process</div>}
       
        <BySpaceNavItem/>
    </div>
        <div>
        {children}
        </div>
    </div>
)
}
export default BuyingSpaceLayout