import React, { useState, useEffect } from "react";

export default function AssignedTickets({ tickets }) {
  return (
    <div className="assigned-tickets">
      {tickets.map((i) => (
        <div className="assigned-ticket">
          {i.assignee
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      ))}
    </div>
  );
}
