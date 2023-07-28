import { useRef } from "react";
import ReactDom from 'react-dom';

function ViewSnackUsage({ snack, setShowModal }) {
  const vendingMachineList = snack.vending_machines.map(vendingMachine =>
  <li key={vendingMachine.id}>{vendingMachine.name}</li>)

  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = e => e.target === modalRef.current ? setShowModal(false) : null


  return ReactDom.createPortal(
    <div className='container' ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h4>{snack.name} is sold by the following vending machines:</h4>
        {vendingMachineList}
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default ViewSnackUsage;
