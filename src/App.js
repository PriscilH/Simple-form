import './App.css';
import { useState } from "react";
import Footer from './Components.js/Footer';
import StepTwo from './Components.js/StepTwo';
import Form from './Components.js/Form';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [step, setStep] = useState (1);
  

const handleSubmit = (event) => {
  event.preventDefault();
  if (password !== confirmPassword) {
    setErrorMessage(true);
    alert("Vos deux mots de passe ne sont pas identiques");
  } else {
    setErrorMessage(false);
    console.log("Ce qu'il y a dans le state : ", [name, email, password]);
    setStep(2);
  }
};
  return (
    <div className="App">
      {step === 1 ? (
        <header>
        <h1>Create Account</h1>
      </header>
      ) : step === 2 ? (
        <header>
        <h1>Results</h1>
      </header>
      ) : null}
      {step === 1 ? (
      <Form 
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setconfirmPassword={setconfirmPassword}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          errorMessage={errorMessage}
          
          />
      ) : step === 2 ? (
        <StepTwo
          setStep={setStep}
          name={name}
          email={email}
          password={password}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default App;
