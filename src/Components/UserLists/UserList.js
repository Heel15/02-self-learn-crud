import UserListsItem from "../UserListsItem/UserListsItem";
import styles from "../UserLists/UserList.module.css";
const UserList = (props) => {
  const deleteHandler = (key) => {
    props.onDelete(key);
  };
  return (
    <div>
      {props.userData.length > 0 ? (
        <div className={styles["card-style"]}>
          {props.userData.map((item) => (
            <UserListsItem
              key={item.id}
              id={item.id}
              userName={item.username}
              age={item.age}
              onDelete={deleteHandler}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserList;
