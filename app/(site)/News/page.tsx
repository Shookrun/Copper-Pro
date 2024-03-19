import NewsSectionOne from "@/Components/News/NewsSectionOne";
import NewsSectionTwo from "@/Components/News/NewsSectionTwo";
import { Container } from "@mui/material";

function page() {
    return (
      <div className="flex flex-col">
       <Container>
       <NewsSectionOne/>
       <NewsSectionTwo/>
       </Container>
      </div>
    );
  }
  
  export default page;