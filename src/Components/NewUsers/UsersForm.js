import { useState } from "react";
import styles from "./UsersForm.module.css";
const UsersForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(null);
  const [isValidAge, setIsValidAge] = useState(null);

  const handleOnBlurUsername = (event) => {
    if (event.target.value === "") {
      setIsValidUsername(false);
    }
  };

  const handleOnBlurAge = (event) => {
    if (event.target.value === "") {
      setIsValidAge(false);
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setIsValidUsername(true);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
    setIsValidAge(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== "" && age !== "") {
      const data = {
        id: Math.random().toString(),
        username,
        age,
      };
      setAge("");
      setUsername("");
      setIsValidUsername(null);
      setIsValidAge(null);
      props.onSubmitForm(data);
    } else {
      console.log("Please fill the input first");
      setIsValidUsername(false);
      setIsValidAge(false);
    }
  };

  return (
    <div className={styles["form-card"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-card__flex_column"]}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className={`${
              isValidUsername !== null
                ? isValidUsername === false
                  ? styles["input-error"]
                  : styles["input-success"]
                : ""
            }`}
            value={username}
            onBlur={handleOnBlurUsername}
            onChange={handleUsername}
          />
        </div>
        <div className={styles["form-card__flex_column"]}>
          <label htmlFor="">Age (Years)</label>
          <input
            type="text"
            className={
              isValidAge !== null
                ? isValidAge === false
                  ? styles["input-error"]
                  : styles["input-success"]
                : ""
            }
            value={age}
            onBlur={handleOnBlurAge}
            onChange={handleAge}
          />
        </div>
        <button className={styles["form-card__button"]}>Add User</button>
      </form>
    </div>
  );
};
export default UsersForm;
