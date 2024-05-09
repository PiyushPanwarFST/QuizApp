import React, { useEffect, useState } from "react";
import { Math, Chemistry, Physics } from "./Data.js";
import { useParams } from "react-router-dom";
import styles from "./Quiz.module.css";
import Finish from "./Finish.jsx";
import rightanswer from "../assets/rightanswer-95219.mp3";
import wronganswer from "../assets/wronganswer-37702.mp3";

const Quiz = () => {
  const [arr, setArr] = useState([]);
  const [i, setI] = useState(0);
  const { subject } = useParams();
  const [opt, setOpt] = useState("");
  const [id, setId] = useState("");
  const [score, setScore] = useState(0);
  const [ansGiven, setAnsGiven] = useState(true);


  // Fetch data based on subject when component mounts
  useEffect(() => {
    if (subject === "Math") {
      setArr(Math);
    } else if (subject === "Chemistry") {
      setArr(Chemistry);
    } else {
      setArr(Physics);
    }
  }, []);

  console.log(arr);

  if (arr.length === 0) {
    return null;
  }

    // Function to clear background color of options
  function white() {
    document.getElementById("opt1").style.backgroundColor = "white";
    document.getElementById("opt2").style.backgroundColor = "white";
    document.getElementById("opt3").style.backgroundColor = "white";
    document.getElementById("opt4").style.backgroundColor = "white";
  }

  // Function to play audio
  function audio(sound) {
    new Audio(sound).play();
  }

  // Event handler for option click
  const handleCheck = (e) => {
    if (ansGiven) {
      white();
      e.target.style.backgroundColor = "aqua";
      setOpt(e.target.innerText);
      setId(e.target.id);
    }
  };

  let color = "white";
    // Function to handle form submission
  const handleSubmit = () => {
    if (ansGiven) {
      setAnsGiven(false);
      if (arr[i].ans == opt) {
        document.getElementById(id).style.backgroundColor = " rgb(22, 239, 33)";
        audio(rightanswer);
        color = "rgb(22, 239, 33)";
        setScore(score + 4);
      } else if (opt === "") {
        setAnsGiven(true);
        handleNext();
        return;
      } else {
        document.getElementById(id).style.backgroundColor = "red";
        audio(wronganswer);
        color = "red";
        setScore(score - 1);

        for (let j = 1; j <= 4; j++) {
          if (arr[i].ans == document.getElementById(`opt${j}`).innerText) {
            document.getElementById(`opt${j}`).style.backgroundColor =
              "rgb(22, 239, 33)";
            break;
          }
        }
      }
    }

    // Move to next question or finish quiz
    setTimeout(() => {
      setOpt("");
      setAnsGiven(true);
      arr[i].num == arr.length ? handleFinish() : handleNext();
    }, 1000);
  };


  // Function to move to next question
  const handleNext = () => {
    setI(i + 1);
    document.getElementById("opt1").style.backgroundColor = "white";
    document.getElementById("opt2").style.backgroundColor = "white";
    document.getElementById("opt3").style.backgroundColor = "white";
    document.getElementById("opt4").style.backgroundColor = "white";
  };

   // Function to handle quiz finish
  const handleFinish = () => {
    document.getElementById("report").style.visibility = "visible";
    document.getElementById("blur").style.filter = "blur(5px)";
  };

  return (
    <>
      <div className={styles.QuizPage} id="blur">
        <div className={styles.block}>
          <div className={styles.tag}>
            Let's play the<span>Quiz Game!</span>
          </div>
          <p className={styles.Qborder}>
            Q.{arr[i].num} {arr[i].ques}
          </p>
          <div className={styles.options}>
            <div className={styles.option}>
              <p id="opt1" onClick={handleCheck}>
                {arr[i].option1}
              </p>
              <p id="opt2" onClick={handleCheck}>
                {arr[i].option2}
              </p>
            </div>
            <div className={styles.option}>
              <p id="opt3" onClick={handleCheck}>
                {arr[i].option3}
              </p>
              <p id="opt4" onClick={handleCheck}>
                {arr[i].option4}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btnBlock}>
          {arr[i].num == arr.length ? null : (
            <button onClick={handleFinish} className={styles.btn}>
              Submit
            </button>
          )}
          <button onClick={handleSubmit} className={styles.btn}>
            {arr[i].num == arr.length ? "Finish" : "Next"}
          </button>
        </div>
      </div>
      <div className={styles.report} id="report">
        <Finish score={score} />
      </div>
    </>
  );
};

export default Quiz;
