import { useNavigate } from "react-router-dom"; // Importing necessary dependencies
import { useState } from "react"; // Importing useState hook
import styles from "./Home.module.css"; // Importing CSS styles

const Home = () => {
  // State variables
  const [subject, setSubject] = useState(""); // State for subject selection
  const [name, setName] = useState(""); // State for user's name
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle subject selection
  const handleSubject = (e) => {
    e.preventDefault();
    setSubject(e.target.value); // Update subject state
    localStorage.setItem("subject", e.target.value); // Store subject in local storage
  };

  // Function to handle form submission
  const handleSubmit = () => {
    navigate(`/quiz/${subject}`); // Navigate to quiz page with selected subject
  };

  // Function to handle name input change
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value); // Update name state
    localStorage.setItem("name", e.target.value); // Store name in local storage
  };

  return (
    <div className={styles.Home}>
      {/* Header */}
      <div className={styles.heading}>
        QUIZ <span>NIGHT</span> {/* Displaying heading */}
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name input */}
        <input
          type="text"
          placeholder="Enter Your Name"
          className={styles.Name}
          required
          onChange={handleChange}
          value={name}
        />
        {/* Subject selection dropdown */}
        <select
          value={subject}
          onChange={handleSubject}
          className={styles.option}
          required
        >
          <option value="selectSubject">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
        {/* Tagline */}
        <div className={styles.tag}>
          Ready for the <span>Quiz Game!</span> {/* Displaying tagline */}
        </div>
        {/* Submit button */}
        <button type="submit" className={styles.btn}>
          Play Now {/* Displaying button text */}
        </button>
      </form>
    </div>
  );
};

export default Home;
