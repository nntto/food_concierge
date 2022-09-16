import React from "react";
import { messages } from "../data/messages";
import ChatList from "../organisms/ChatList";
import { concierges } from "../data/concierges";
import { useLocation } from "react-router-dom";
import ConciergeCard from "../molecules/ConciergeCard";
import { Stack } from "@mui/material";

const Chat = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const conciergeId = query.get("conciergeId");

  return (
    <Stack spacing={2}>
      {conciergeId !== null ? (
        <ConciergeCard
          concierge={concierges[conciergeId]}
          conciergeId={conciergeId}
        />
      ) : (
        <></>
      )}{" "}
      <ChatList messages={messages}></ChatList>
    </Stack>
  );
};

export default Chat;
