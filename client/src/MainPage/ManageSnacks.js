import { useContext, useState } from 'react';
import { SnacksContext } from '../Context/snacks';
import ViewSnackUsage from '../Modals/ViewSnackUsage';

function ManageSnacks() {
  const { snacks, setSnacks } = useContext(SnacksContext)
  const [newSnack, setNewSnack] = useState({
    name: '',
    price: ''
  })

  const [showModal, setShowModal] = useState(false)
  const [snack, setSnack] = useState(null)

  const handleFormChange = e => setNewSnack({...newSnack, [e.target.name]: e.target.value})

  const snackRows = snacks.map(snack => 
    <tr key={snack.id}>
      <td >{snack.name}</td>
      <td>${snack.price.toFixed(2)}</td>
      <td>{snack.vending_machines.length > 0 ?
        <button onClick={() => displaySnackUsage(snack.id)}>Sold by</button> :
        <button onClick={() => deleteSnack(snack.id)}>Delete</button>}</td>
    </tr>)

    function displaySnackUsage(snackId) {
      fetch(`/snacks/${snackId}`).then(rspns => {
        if (rspns.ok) rspns.json().then(rspns => {
          setSnack(rspns)
          setShowModal(true)
        })
        else alert('Something went wrong')
      })
    }

    function deleteSnack(snackId) {
      fetch(`/snacks/${snackId}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) setSnacks(snacks.filter(snack => snack.id !== snackId))
        else alert('Something went wrong')
      })
    }

    function handleButtonClick() {
      fetch('/snacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSnack)
      }).then(rspns => {
        if (rspns.ok) rspns.json().then(newSnack => setSnacks([...snacks, newSnack]))
        else rspns.json().then(rspns => alert(rspns.errors))
      })
    }

  return (
    <>
      <div className='instructions'>
        Below is a list of all the currently available snacks.
        You may create new snacks using the form at the bottom.
        The Sold by button will display a list of all the vending machines that sell that snack.
        If a snack is not currently being sold by any vending machines, it is eligible for deletion.
      </div>
      <table>
        <caption><h4>Snacks</h4></caption>
        <tbody>
          <tr><th>Snack</th><th>Price</th></tr>
          {snackRows}
          <tr>
            <td><input placeholder='new snack' name='name' autoFocus value={newSnack.name} onChange={handleFormChange}/></td>
            <td>$<input placeholder='price' type = 'number' name='price' value={newSnack.price} onChange={handleFormChange}/></td>
            <td><button onClick={handleButtonClick}>Create Snack</button></td>
          </tr>
        </tbody>
      </table>
      {showModal ? <ViewSnackUsage 
        setShowModal={setShowModal}
        snack={snack}/> : null}
    </>
  );
}

export default ManageSnacks;
