import { useState } from "react";

export default function AreaPersonaleVM() {
  //Indicates the tab activated in the nav
  const [activeNav, setActiveNav] = useState("datiPersonali");

  const changeNav = (input) => {
    setActiveNav(input);
  };

  return {
    activeNav,
    changeNav,
  };
}
