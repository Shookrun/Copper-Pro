import Banner from "./Banner";
import Informations from "./Informations";
import Recomended from "./Recomended";
import Sale from "./Sale";
import SectionOne from "./SectionOne";
import SectionThird from "./SectionThird";
import SectionTwo from "./SectionTwo";
import Comments from "@/Components/Home/Main/Comments";
export default function Main () {
return (
    <div> 
        <SectionOne/>
        <SectionTwo/>
        <SectionThird/>
        <Banner/>
        <Recomended/>
        <Sale/>
        <Comments/>
        <Informations/>
    </div>
)
}