/* eslint-disable array-callback-return */
import UsersForm from "./Components/NewUsers/UsersForm";
import UserList from "./Components/UserLists/UserList";
import "./App.css";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const onSubmitFormHandler = (data) => {
    setUserList((prevData) => {
      const updatedData = [data, ...prevData];
      return updatedData;
    });
  };

  const deleteHandler = (id) => {
    setUserList((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== id);
      return updatedData;
    });
  };
  return (
    <div className="App">
      <UsersForm onSubmitForm={onSubmitFormHandler} />
      <UserList userData={userList} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
