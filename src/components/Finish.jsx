import React from "react";
import styles from "./Finish.module.css";

const Finish = ({ score }) => {
  let name = localStorage.getItem("name");
  let subject = localStorage.getItem("subject");
  return (
    <>
      <div className={styles.heading}>REPORT CARD</div>
      <div className={styles.card}>
        <table>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Subject</td>
            <td>:</td>
            <td>{subject}</td>
          </tr>
          <tr>
            <td>Score</td>
            <td>:</td>
            <td>{score}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Finish;
