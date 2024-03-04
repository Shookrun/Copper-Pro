import Banner from "./Main/Banner";
import Informations from "./Main/Informations";
import Recomended from "./Main/Recomended";
import Sale from "./Main/Sale";
import SectionOne from "./Main/SectionOne";
import SectionThird from "./Main/SectionThird";
import SectionTwo from "./Main/SectionTwo";
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