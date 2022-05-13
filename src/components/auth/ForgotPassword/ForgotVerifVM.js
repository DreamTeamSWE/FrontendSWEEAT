import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { makeAutoObservable } from "mobx";

export default function ForgotVerificationViewModel(store) {
  //Model
  const userStore = store.userStore;

  //react navigator
  const nav = useNavigate();

  //react location
  const loc = useLocation();

  //react-hook-form settings
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ criteriaMode: "all" });

  //Variable to notify error during change password
  const [verifyError, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  //If coming from ForgotPassword, load email
  useEffect(() => {
    if (loc.state) {
      const email = loc.state.email;
      setValue("email", email);
    }
  }, []);

  const passwordVerificationHandler = async (data) => {
    try {
      const success = await userStore.forgotPWVerification(
        data.email,
        data.verificationcode,
        data.newpassword
      );
      if (success) {
        nav("/successo");
      } else {
        setErrMessage("Il codice o l'email sono sbagliati");
        setError(true);
      }
    } catch (error) {
      //console.log(error);
      setErrMessage("E' successo qualcosa d'inaspettato. Riprovi più tardi.");
      setError(true);
    }
  };

  return makeAutoObservable({
    register,
    errors,
    verifyError,
    errMessage,
    handleSubmit,
    passwordVerificationHandler,
  });
}
