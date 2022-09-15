import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Concierge } from "../data/concierges";
import { CardActionArea } from "@mui/material";

export default function ConciergeCard({
  concierge,
  conciergeId,
}: {
  concierge: Concierge;
  conciergeId: string;
}) {
  const { img, name, food, work, comment } = concierge;

  return (
    <Card>
      <CardActionArea href={`/order?conciergeId=${conciergeId}`}>
        <CardHeader
          avatar={<Avatar src={img} />}
          title={name}
          subheader={work}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            取扱食品：{food}
            <br />
            {comment}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
