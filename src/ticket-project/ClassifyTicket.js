import React, { useState, useEffect } from "react";

export default function ClassifyTicket({ tickets, setTickets }) {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [maxChars, setMaxChars] = useState(25);

  let handleSubmit = (e) => {
    e.preventDefault();
    setTickets((tickets) => [
      ...tickets,
      { id: 5, title, assignee: 'George Ruiz', status: 'new', goal },
    ]);
    console.log(tickets);
  };

 
  return (
    <div className="classify-tickets">
      <h2 className="classify-title">Classify</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="label">What's the user asking for?</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="dropdown"
          name="cars"
          id="cars"
        >
          <option value="Select" selected hidden>
            Select
          </option>
          <option value="Buy a product.">Buy a product.</option>
          <option value="Cancel an account.">Cancel an account.</option>
          <option value="Buy and reccomend a gift">
            Buy and reccomend a gift.
          </option>
          <option value="Ask for the business">Ask for the business.</option>
        </select>

        <label className="label">Task name (as shown to the user)</label>
        <input
          className="title-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setMaxChars(e.target.value.length);
          }}
          placeholder="Buy what?"
        />
        <p>
          {maxChars >= 0 ? (
            <span>{25 - maxChars}</span>
          ) : (
            <span className="bad-chars">{maxChars -1}</span>
          )}
        </p>
        {maxChars > 0 ? (
          <button className="submit-btn" type="submit">
            Proceed
          </button>
        ) : (
          <button id="gray-btn" className="submit-btn" disabled>
            Proceed
          </button>
        )}
      </form>
    </div>
  );
}
