import React from "react";
import { Typography } from "@mui/material";
import Gallery from "./db"
const Informations: React.FC = () => {
    return (
        <div className="bg-[url('../public/information.png')] py-8">
            <Typography variant="h4" className="text flex justify-center">
                BİZİ SEÇMƏK ÜÇÜN SƏBƏBLƏR
            </Typography>
            <Gallery/>
        </div>
    );
}

export default Informations;
