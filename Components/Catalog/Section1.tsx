import { Container, Typography } from "@mui/material"
import CardHeader from "./CardHeader"

const Section1 = () => {
  return (
<div>
<Container maxWidth="lg">
<div>
<div className="flex">
<Typography className="mont">
    Əsas Səhifə/    
</Typography>
<Typography className="mont font-bold">
    Kataloq   
</Typography>
</div>
<Typography variant="h4" className="text">
    Kataloq   
</Typography>
</div>
<CardHeader/>
</Container>
</div>
  )
}

export default Section1