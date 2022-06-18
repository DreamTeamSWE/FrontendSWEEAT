import React, { useState } from "react";

import SuggerisciAccountVM from "./SuggerisciAccountVM";

function Suggerisci() {
  const { stato, accountId, suggerisciClick, inputHandler } =
    SuggerisciAccountVM();

  return (
    <div className="suggerisci">
      <h1>Suggerisci account</h1>
      <input type="text" value={accountId} onChange={inputHandler} />
      <button onClick={suggerisciClick}>Suggerisci account</button>
      {stato && <h4>{stato}</h4>}
    </div>
  );
}

export default Suggerisci;
