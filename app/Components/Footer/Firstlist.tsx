import { Typography } from "@mui/material";

export default function Firstlist() {
    let arr = ["Naviqasiya", "Kataloq", "Yeniliklər", "Çatdırılma", "Bizim haqqımızda", "Əlaqə"];
    return (
        <div>
            {arr.map((item, index) => (
                <Typography key={index}>
                    {item}
                </Typography>
            ))}
        </div>
    );
}
