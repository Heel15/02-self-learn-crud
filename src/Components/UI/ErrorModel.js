import classes from "../UI/ErrorModel.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  const handelOnClick = () => {
    props.setIsVisible(false);
  };
  return <div className={classes.backdrop} onClick={handelOnClick} />;
};
const ModalOverlay = (props) => {
  const handelOnClick = () => {
    props.setIsVisible(false);
  };
  return (
    <div className={classes.modal}>
      <div>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <section>
          <p className={classes.content}>
            Please enter a valid name and age (non-empty values.)
          </p>
        </section>
        <footer className={classes.footer}>
          <button onClick={handelOnClick}>Okay</button>
        </footer>
      </div>
    </div>
  );
};
const ErrorModel = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop setIsVisible={props.setIsVisible} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay setIsVisible={props.setIsVisible} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default ErrorModel;
