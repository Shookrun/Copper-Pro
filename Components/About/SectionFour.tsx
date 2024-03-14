import { Typography } from "@mui/material";

const SectionFour = () => {
  return (
    <div className="py-32 bg-[url('../public/fourBg.png')] bg-neutral-100">
      <div className="bg-red w-[20vw] flex flex-col justify-between h-[22vh]">
        <Typography variant="h4" className="text">MƏKANLARIMIZ</Typography>
        <Typography className="mont">
          İstehsalımız Ukraynada yerləşir, lakin 50-dən çox ölkədən olan
          müştərilər mağazamızdan alınan mallardan zövq alırlar.
        </Typography>
      </div>
    </div>
  );
};

export default SectionFour;
