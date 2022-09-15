import React from "react";
import { Typography } from "@mui/material";
import { FormValues } from "./Order";
import { useLocation } from "react-router-dom";

const Confirm: React.FC = () => {
  const location = useLocation();
  const { data } = location.state as { data: FormValues };

  return (
    <>
      <Typography variant="h4">以下の注文を確定しました</Typography>
      {data.hasBudget ? (
        <>
          <br />
          <Typography variant="h5">
            合計予算：
            {data.items.reduce((a: number, x) => a + Number(x.budget), 0)}円
          </Typography>
        </>
      ) : (
        <></>
      )}
      {data.items.map((item) => (
        <>
          <br />
          <Typography variant="h5">品名：{item.material}</Typography>
          <Typography>量：{item.amount}</Typography>
          {item.budget ? <Typography>予算：{item.budget}円</Typography> : <></>}
          <Typography>要望：{item.comment}</Typography>
        </>
      ))}
    </>
  );
};

export default Confirm;
