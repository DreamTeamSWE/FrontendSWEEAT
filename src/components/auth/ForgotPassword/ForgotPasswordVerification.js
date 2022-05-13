import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import ForgotVerificationViewModel from "./ForgotVerifVM";
import { useStore } from "../../../Context";

import { observer } from "mobx-react";

import "../css/formStyle.css";

function ForgotPasswordVerification() {
  const {
    register,
    errors,
    verifyError,
    errMessage,
    handleSubmit,
    passwordVerificationHandler,
  } = ForgotVerificationViewModel(useStore());

  return (
    <section className="section auth form">
      <div className="container">
        <h1>Imposta una nuova password</h1>
        <p>
          Inserisci il codice di verificazione che ti è stato inviato all'email
          e la tua nuova password.
        </p>

        <form onSubmit={handleSubmit(passwordVerificationHandler)}>
          <div className="field">
            <label>Codice*</label>
            <input
              {...register("verificationcode", {
                required: "Codice richiesto",
              })}
              placeholder="Codice"
            />
            <ErrorMessage
              errors={errors}
              name="verificationcode"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Richiesta Email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Questo non è un email",
                },
              })}
              type="email"
              placeholder="Email"
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="messaggioErrore">{message}</p>
              )}
            />
          </div>
          <div className="field">
            <label>Password*</label>
            <input
              {...register("newpassword", {
                required: "Password necessaria",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/u,
                  message:
                    "La password deve essere lunga almeno 8 caratteri e contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo tra @$!%*?&.",
                },
              })}
              type="password"
              placeholder="Nuova Password"
            />
            <div>
              <ErrorMessage
                errors={errors}
                name="newpassword"
                render={({ message }) => (
                  <p className="messaggioErrore">{message}</p>
                )}
              />
            </div>
          </div>
          <div>
            {verifyError && <p className="messaggioErrore">{errMessage}</p>}
          </div>
          <div className="button">
            <input type="submit" value="Imposta nuova password" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default observer(ForgotPasswordVerification);
