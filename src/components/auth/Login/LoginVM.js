import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { makeAutoObservable } from "mobx";

export default function LoginViewModel(store) {
  //Model
  const userStore = store.userStore;

  //react navigator
  const nav = useNavigate();

  //react-hook-form settings
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  //Variable to notify error during login
  const [loginError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  async function loginHandler(data) {
    const { email, password } = data;
    try {
      const success = await userStore.login(email, password);
      if (success) {
        //console.log(userStore.user.username);
        nav("/");
      } else {
        setErrMessage("Email o password sbagliata");
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setErrMessage("Qualcosa non va. Riprovi più tardi.");
      setError(true);
    }
  }

  return makeAutoObservable({
    register,
    errors,
    loginError,
    errMessage,
    handleSubmit,
    loginHandler,
  });
}
