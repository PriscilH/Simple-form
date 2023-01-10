import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Form = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setconfirmPassword,
  name,
  email,
  password,
  confirmPassword,
  errorMessage
}) => {
  const [seePassword, setSeePassword] = useState(false);
  const [seeconfirmPassword, setSeeConfirmPassword] = useState(false);
    
    return (
        <div className="Formul">
        <form onSubmit={handleSubmit}>
        {/* // htmlFor du label doit correspondre à l'id de l'input associé */}
        <label className="Name" htmlFor="name">Name </label>
        <input
          type="text"
          placeholder="Jean Dupont"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
           }}
        />
        <label className="Mail" htmlFor="mail">Email </label>
        <input
          type="email"
          value={email}
          placeholder="jeandupont@lereacteur.io"
          id="mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="Password" htmlFor="password">Password </label>
        <div>
        <input
          className={errorMessage && "red"}
          type={seePassword ? "text" : "password"}
          value={password}
          placeholder="lErEaCtEuR2022"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
        }}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (seePassword === true) {
              setSeePassword(false);
            } else {
              setSeePassword(true);
            }
          }}
        />
        </div>
        <label className="confPass" htmlFor="confirmPassword">Confirm your password </label>
        <div>
        <input
          className={errorMessage && "red"}
          type={seeconfirmPassword ? "text" : "password"}
          value={confirmPassword}
          placeholder="lErEaCtEuR2022"
          id="confirmPassword"
          onChange={(event) => {
            setconfirmPassword(event.target.value);
        }}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (seeconfirmPassword === true) {
              setSeeConfirmPassword(false);
            } else {
              setSeeConfirmPassword(true);
            }
          }}
        />
        </div>
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }} className="error-message">
          Les mots de passe ne sont pas identiques
        </p>
      )}
        {/* <input type="submit" value="Submit" /> */}
        {/* Par defaut un button dans un formulaire est de type submit, pour le repasser en bouton "normal", il faut mettre type="button" à notre balise button */}
        {/* <button type="button">Soumettre</button> */}
        <button>Register</button>
      </form>
      {/* {errorMessage && <p >{errorMessage}</p>}  */}
      </div>
    )
}

export default Form;