import { Container, Typography } from "@mui/material"

const SectionTwo = () => {
  return (
    <div className="bg-white p-24">
        <Container>
        <div className="flex flex-col gap-4">
            <Typography variant="h4" className="text">
                MÜŞTƏRİLƏRİMİZ
            </Typography>
            <Typography className="mont w-96">
            Biz özümüzdən tələb edirik ki, hər gün müştərilərimiz üçün daha yaxşı olaq və onların hər biri üçün ən yaxşı həllər tapaq.
            </Typography>
        </div>
        </Container>
    </div>
  )
}

export default SectionTwo