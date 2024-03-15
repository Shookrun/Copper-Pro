import Main from "@/Components/About/AboutMain";
import SectionFour from "@/Components/About/AboutSectionFour";
import SectionOne from "@/Components/About/AboutSectionOne";
import SectionThree from "@/Components/About/AboutSectionThree";
import SectionTwo from "@/Components/About/AboutSectionTwo";

function page() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default page;
