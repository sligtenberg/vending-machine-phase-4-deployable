import { useRef } from "react";
import ReactDom from "react-dom";

function EditSnack({ setShowModal, inventory }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = e => e.target === modalRef.current ? setShowModal(false) : null
  
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h1>Test</h1>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default EditSnack;
