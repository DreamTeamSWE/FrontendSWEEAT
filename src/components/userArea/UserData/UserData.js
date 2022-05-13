import Dato from "./Dato";
import React from "react";

import { ErrorMessage } from "@hookform/error-message";
import DatiPersonaliViewModel from "./UserDataVM";
import { useStore } from "../../../Context";
import "./../../auth/css/formStyle.css";

function DatiPersonali() {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    modifica,
    stato,
    userData,
    changeState,
    cambiaPasswordHandler,
  } = DatiPersonaliViewModel(useStore());

  return (
    <>
      {modifica && (
        <div className="datiPersonali">
          <h1>Modifica password</h1>
          <form className="form" onSubmit={handleSubmit(cambiaPasswordHandler)}>
            <div className="field">
              <label>Password attuale</label>
              <input
                {...register("oldPW", {
                  required: "Password attuale necessaria",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/u,
                    message:
                      "La password deve essere lunga almeno 8 caratteri e contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo tra @$!%*?&.",
                  },
                })}
                type="password"
                placeholder="Password attuale"
              />
              <ErrorMessage
                errors={errors}
                name="oldPW"
                render={({ message }) => (
                  <p className="messaggioErrore">{message}</p>
                )}
              />
            </div>
            <div className="field">
              <label>Password nuova</label>
              <input
                {...register("newPW", {
                  required: "Password nuova necessaria",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/u,
                    message:
                      "La password deve essere lunga almeno 8 caratteri e contenere almeno una lettera maiuscola, una minuscola, un numero e un simbolo tra @$!%*?&.",
                  },
                  validate: (value) =>
                    value !== getValues("oldPW") ||
                    "La nuova password deve essere diversa da quella precedente.",
                })}
                type="password"
                placeholder="Nuova password"
              />
              <ErrorMessage
                errors={errors}
                name="newPW"
                render={({ message }) => (
                  <p className="messaggioErrore">{message}</p>
                )}
              />
            </div>
            <div className="button">
              <input type="submit" value="Cambia password" />
            </div>
            {stato !== "inizio" ? (
              stato === "cambiato" ? (
                <label>Password cambiata correttamente</label>
              ) : (
                <label>Password non cambiata</label>
              )
            ) : null}
          </form>
        </div>
      )}
      {!modifica && (
        <div className="datiPersonali">
          <h1>Dati personali</h1>
          {userData ? (
            <div>
              <Dato
                key={userData.surname}
                dateName="Cognome"
                dateValue={userData.surname}
              />
              <Dato
                key={userData.name}
                dateName="Nome"
                dateValue={userData.name}
              />
              <Dato
                key={userData.email}
                dateName="Email"
                dateValue={userData.email}
              />
              <button onClick={changeState}>Modifica password</button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default DatiPersonali;
