import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

export default function DatiPersonaliViewModel(store) {
  //Model
  const userStore = store.userStore;

  //No need for observer. It is supposed that the user is logged when you access this area.
  useEffect(() => {
    setUserData(userStore.userDetails);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ criteriaMode: "all" });

  const [modifica, setModifica] = useState(false);
  const [stato, setStato] = useState("inizio");
  const [userData, setUserData] = useState("");
  const changeState = () => {
    setModifica(!modifica);
  };
  async function cambiaPasswordHandler(data) {
    const { oldPW, newPW } = data;
    const success = await userStore.changePW(oldPW, newPW);
    if (success) setStato("cambiato");
    else setStato("errore");
  }

  return {
    register,
    errors,
    handleSubmit,
    getValues,
    modifica,
    stato,
    userData,
    changeState,
    cambiaPasswordHandler,
  };
}
