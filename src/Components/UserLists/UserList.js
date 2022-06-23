import UserListsItem from "../UserListsItem/UserListsItem";
import Card from "../UI/Card";
const UserList = (props) => {
  const deleteHandler = (key) => {
    props.onDelete(key);
  };
  return (
    <>
      {props.userData.length > 0 ? (
        <Card>
          {props.userData.map((item) => (
            <UserListsItem
              key={item.id}
              id={item.id}
              userName={item.username}
              age={item.age}
              onDelete={deleteHandler}
            />
          ))}
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default UserList;
