import Banner from "./Main/HomeBanner";
import Informations from "./Main/HomeInformations";
import Recomended from "./Main/HomeRecomended";
import Sale from "./Main/HomeSale";
import SectionOne from "./Main/HomeSectionOne";
import SectionThird from "./Main/HomeSectionThird";
import SectionTwo from "./Main/HomeSectionTwo";
import Comments from "@/Components/Home/Main/HomeComments";
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