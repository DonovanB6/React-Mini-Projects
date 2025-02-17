import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps></Steps>
      <StepMessage step={1}>
        <p>Pass in Content</p>
        <p>🤓</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read child prop</p>
        <p>👍🏿</p>
      </StepMessage>
      {/* <Steps></Steps> */}
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Donovan" })

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1
      );
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);


      //Bad Practice
      //test.name = 'Steve';

      //good Practice
      //setTest({ name: 'Steve' })
    }
  }



  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        < div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button bgColor='#e7e7e7' textcolor='#333' onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textcolor='#fff' bgColor='#7950f2' onClick={handlePrevious}>
              <span>👈🏾</span> Previous
            </Button>

            <Button textcolor='#fff' bgColor='#7950f2' onClick={handleNext}>
              Next <span>👉🏾</span>
            </Button>

          </div>

        </div >
      )}
    </div>
  )
}

function Button({ textcolor, bgColor, onClick, children }) {
  return <button style={{ backgroundColor: bgColor, color: textcolor }} onClick={onClick}>
    {children}
  </button>
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  )
}