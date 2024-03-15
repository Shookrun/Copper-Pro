import React from "react";
import { Stack, Typography } from "@mui/material";
import CommentSlider from "./HomeCommentSlider";

const Sale: React.FC = () => {
  return (
    <div>
      <Stack className="justify-center bg-white py-10">
        <Stack direction="row" className="justify-center">
          <Typography variant="h4" className="text">
            İşçi RƏylƏri
          </Typography>
        </Stack>
        <CommentSlider />
        <div className="text-white flex cursor-pointer text-center h-10 items-center justify-center transition-all hover:scale-95">
          <Typography
            className="bg-gradient-to-r from-gradient1 to-gradient2 p-2 px-10 rounded-sm"
            variant="subtitle1"
          >
            Kataloqa keç
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default Sale;
