import { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import styles from "./UsersForm.module.css";
const UsersForm = (props) => {
  // this is the work flow with useState

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  // const [isValidUsername, setIsValidUsername] = useState(null);
  // const [isValidAge, setIsValidAge] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // const handleOnBlurUsername = (event) => {
  //   if (event.target.value === "") {
  //     setIsValidUsername(false);
  //   }
  // };

  // const handleOnBlurAge = (event) => {
  //   if (event.target.value === "") {
  //     setIsValidAge(false);
  //   }
  // };

  // const handleUsername = (event) => {
  //   setUsername(event.target.value);
  //   setIsValidUsername(true);
  // };
  // const handleAge = (event) => {
  //   setAge(event.target.value);
  //   setIsValidAge(true);
  // };

  // this the part of useRef
  const usernameRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (username !== "" && age !== "") {
      const data = {
        id: Math.random().toString(),
        username,
        age,
      };
      // setAge("");
      // setUsername("");
      // setIsValidUsername(null);
      // setIsValidAge(null);
      props.onSubmitForm(data);
    } else {
      console.log("Please fill the input first");
      // setIsValidUsername(false);
      // setIsValidAge(false);
      setIsVisible(true);
    }
  };
  let errorModal;
  if (isVisible === true)
    errorModal = (
      <ErrorModel isVisible={isVisible} setIsVisible={setIsVisible} />
    );

  return (
    <>
      {errorModal}
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-flex_column"]}>
            <label htmlFor="">Username</label>
            <input
              type="text"
              // className={`${
              //   isValidUsername !== null
              //     ? isValidUsername === false
              //       ? styles["input-error"]
              //       : styles["input-success"]
              //     : ""
              // }`}
              // value={username}
              // onBlur={handleOnBlurUsername}
              // onChange={handleUsername}
              ref={usernameRef}
            />
          </div>
          <div className={styles["form-flex_column"]}>
            <label htmlFor="">Age (Years)</label>
            <input
              type="text"
              // className={
              //   isValidAge !== null
              //     ? isValidAge === false
              //       ? styles["input-error"]
              //       : styles["input-success"]
              //     : ""
              // }
              // value={age}
              // onBlur={handleOnBlurAge}
              // onChange={handleAge}
              ref={ageRef}
            />
          </div>
          <button className={styles["form-button"]}>Add User</button>
        </form>
      </Card>
    </>
  );
};
export default UsersForm;
