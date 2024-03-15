import Main from "@/Components/About/Main";
import SectionFour from "@/Components/About/AboutSectionFour";
import SectionOne from "@/Components/About/AboutSectionOne";
import SectionThree from "@/Components/About/SectionThree";
import SectionTwo from "@/Components/About/SectionTwo";

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
