import { useState } from "react";
import { suggest } from "../../../services/services";

export default function AreaPersonaleVM() {
  const [stato, setStato] = useState("");
  const [accountId, setAccountId] = useState("");

  const suggerisciClick = async () => {
    const message = await suggest(accountId);
    setStato(message);
  };

  const inputHandler = (event) => {
    setAccountId(event.target.value);
  };

  return {
    stato,
    accountId,
    suggerisciClick,
    inputHandler,
  };
}
