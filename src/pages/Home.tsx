import React from "react";
import ConciergeProfiles from "../organisms/ConciergeProfiles";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        コンシェルジュ一覧
      </Typography>
      <ConciergeProfiles />
    </>
  );
};

export default Home;
