import { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { SnacksContext } from "../Context/snacks";

function EditSnack({ setShowModal, inventory }) {
  const { snacks } = useContext(SnacksContext)
  
  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = e => e.target === modalRef.current ? setShowModal(false) : null
  
  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <select>

        </select>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default EditSnack;
