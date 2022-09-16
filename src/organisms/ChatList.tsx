import React from "react";
import { Message } from "../data/messages";
import { Paper, Stack, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const MyMessage = ({ text }: { text: string }) => (
  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
    <Paper
      elevation={3}
      sx={{
        maxWidth: "70%",
        width: "fit-content",
        backgroundColor: "#F5F5F5",
      }}
    >
      {text}
    </Paper>
  </Box>
);

const PartnerMessage = ({ text }: { text: string }) => (
  <Box sx={{ display: "flex", flexDirection: "flex-start" }}>
    <Paper elevation={3} sx={{ maxWidth: "70%", width: "fit-content" }}>
      {text}
    </Paper>
  </Box>
);

const Chat = ({ messages }: { messages: Message[] }) => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const conciergeId = query.get("conciergeId");

  return (
    <Stack spacing={2}>
      {messages
        .filter(
          (message) =>
            (message.from === "0" && message.to === conciergeId) ||
            (message.to === "0" && message.from === conciergeId)
        )
        .map((message) =>
          message.from === "0" ? (
            <MyMessage text={message.text} />
          ) : (
            <PartnerMessage text={message.text} />
          )
        )}
    </Stack>
  );
};

export default Chat;
