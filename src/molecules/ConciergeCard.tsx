import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Concierge } from "../data/concierges";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConciergeCard({
  concierge,
  conciergeId,
}: {
  concierge: Concierge;
  conciergeId: string;
}) {
  const { img, name, food, work, comment } = concierge;

  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader avatar={<Avatar src={img} />} title={name} subheader={work} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          取扱食品：{food}
          <br />
          {comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "50%" }}
          onClick={() => {
            navigate(`/order?conciergeId=${conciergeId}`);
          }}
        >
          相談する
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "50%" }}
          onClick={() => {
            navigate(`/chat?conciergeId=${conciergeId}`);
          }}
        >
          注文する
        </Button>
      </CardActions>
    </Card>
  );
}
