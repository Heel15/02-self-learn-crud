import styles from "../UserListsItem/UserListsItem.module.css";
const UserListsItem = (props) => {
  const onClickHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <>
      <div onClick={onClickHandler} className={styles["list-style"]}>
        <p>
          {props.userName} ({props.age} year old)
        </p>
      </div>
    </>
  );
};

export default UserListsItem;
