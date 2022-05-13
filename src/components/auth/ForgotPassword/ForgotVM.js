import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { makeAutoObservable } from "mobx";

export default function ForgotViewModel(store) {
  //model
  const userStore = store.userStore;

  //react navigator
  const nav = useNavigate();

  //react-hook-form settings
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const forgotPasswordHandler = async (data) => {
    //event.preventDefault();
    try {
      const success = await userStore.forgotPW(data.email);
      if (success) {
        nav("/passwordDimenticata/verifica", { state: { email: data.email } });
      } else {
        //console.log("Non esiste account con tale email");
        //Attention : Amplify don't return an error if the email is not registered
      }
    } catch (error) {
      console.log(error);
    }
  };

  return makeAutoObservable({
    register,
    errors,
    handleSubmit,
    forgotPasswordHandler,
  });
}
