import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import Modal from "./Components/Modal";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
function App() {
  const [modal, setModal] = useState({
    mode: "signin",
    active: false,
  });
  const closeModal = () =>
    setModal((prev) => {
      return { ...prev, active: false };
    });

  return (
    <>
      <Router>
        <Modal openmodal={modal.active} closemodal={closeModal}>
          {modal.mode === "signin" ? (
            <SignIn closemodal={closeModal} />
          ) : (
            <SignUp />
          )}
        </Modal>
        <Routes>
          <Route
            path="/"
            element={<Home modal={modal} setModal={setModal} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
