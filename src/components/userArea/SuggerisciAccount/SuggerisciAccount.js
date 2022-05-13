import React, { useState } from "react";
import { suggest } from "../../../services/services";

function Suggerisci() {
  const suggerisciClick = async () => {
    const message = await suggest(accountId);
    setStato(message);
  };
  const [stato, setStato] = useState("");
  const [accountId, setAccountId] = useState("");
  return (
    <div className="suggerisci">
      <h1>Suggerisci account</h1>
      <input type="text" onChange={(e) => setAccountId(e.target.value)} />
      <button onClick={() => suggerisciClick()}>Suggerisci locale</button>
      {stato && <h4>{stato}</h4>}
    </div>
  );
}

export default Suggerisci;
