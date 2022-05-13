import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { makeAutoObservable } from "mobx";

export default function RegistrationViewModel(store) {
  //Model
  const userStore = store.userStore;

  //react navigator
  const n = useNavigate();

  //react-hook-form settings
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ criteriaMode: "all" });

  //Variable to notify error during registration
  const [regError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  async function registrationHandler(data) {
    const { name, surname, password, email, cp } = data;
    try {
      const success = await userStore.signUp(email, password, name, surname);
      if (success) {
        n("/benvenuto");
      } else {
        //error
        setErrMessage("L'email è già in uso");
        setError(true);
      }
    } catch (error) {
      //console.log(error.message);
      setErrMessage("E' successo qualcosa d'inaspettato. Riprovi più tardi.");
      setError(true);
    }
  }

  return makeAutoObservable({
    register,
    errors,
    regError,
    errMessage,
    handleSubmit,
    registrationHandler,
    getValues,
  });
}
