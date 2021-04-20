import React, { useState, useEffect } from "react";
import AssignedTickets from "./AssignedTickets";
import ClassifyTicket from "./ClassifyTicket";
import ConversationBox from './ConversationBox'
export default function TicketFeature() {
  const [tickets, setTickets] = useState([
    {
      id: 9,
      title: "Trouble buying phone",
      assignee: "George Ruiz",
      status: "selected",
      goal: "Buy a product",
    },
    {
      id: 2,
      title: "Need to cancel my account",
      assignee: "Mike D",
      status: "new",
      goal: "Cancel an account.",
    },
    {
      id: 3,
      title: "How do i reccomend to friend?",
      assignee: "Charles Johnson",
      status: "snoozed",
      goal: "Buy and Reccomend a gift.",
    },
  ]);

  return (
    <div className="TicketFeature">
      <div>
        <AssignedTickets tickets={tickets} />
      </div>
      <div>
        <ClassifyTicket setTickets={setTickets} tickets={tickets} />
      </div>
      <div>
        <ConversationBox/>
      </div>
    </div>
  );
}
