const StepTwo = ({ name, email, password, setStep }) => {
    
    return (
        <div className="Result">
        <div className="Steptwo">
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
        </div>
        <button className="edit-button" onClick={() => setStep(1)}>
            Edit your information</button>
        </div>
    );
};

export default StepTwo;