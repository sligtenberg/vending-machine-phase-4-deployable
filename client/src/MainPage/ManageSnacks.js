import { useContext, useState } from "react";
import { SnacksContext } from "../Context/snacks";

function ManageSnacks() {
  const { snacks, setSnacks } = useContext(SnacksContext)
  const [newSnack, setNewSnack] = useState({
    name: '',
    price: ''
  })

  const handleFormChange = e => setNewSnack({...newSnack, [e.target.name]: e.target.value})

  const snackRows = snacks.map(snack => 
    <tr key={snack.id}>
      <td >{snack.name}</td>
      <td>${snack.price.toFixed(2)}</td>
      <td>{snack.vending_machines.length > 0 ? <button>Used by</button> : <button>Delete</button>}</td>
    </tr>)

    function handleButtonClick() {
      fetch('/snacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSnack)
      }).then(rspns => {
        if (rspns.ok) rspns.json().then(newSnack => setSnacks([...snacks, newSnack]))
        else rspns.json().then(rspns => {
          console.log(rspns)
          alert(rspns.errors)
        })
      })
    }

  return (
      <table>
        <caption><h2>Snacks</h2></caption>
        <tbody>
          <tr><th>Snack</th><th>Price</th></tr>
          {snackRows}
          <tr>
            <td><input placeholder="new snack" name='name' value={newSnack.name} onChange={handleFormChange}/></td>
            <td>$<input placeholder="price" type = 'number' name='price' value={newSnack.price} onChange={handleFormChange}/></td>
            <td><button onClick={handleButtonClick}>Create Snack</button></td>
          </tr>
        </tbody>
      </table>
  );
}

export default ManageSnacks;
