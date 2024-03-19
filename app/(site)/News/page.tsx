import NewsSectionOne from "@/Components/News/NewsSectionOne";
import { Container } from "@mui/material";

function page() {
    return (
      <div className="flex flex-col">
       <Container>
       <NewsSectionOne/>
       </Container>
      </div>
    );
  }
  
  export default page;