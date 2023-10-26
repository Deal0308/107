import React, { useState, useEffect } from "react";
import "./admin.css";

function Admin() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("/api/shoes")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setShoes(data);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteShoe = (id) => {
    // delete shoe logic
  };

  const handleAddShoe = (event) => {
    event.preventDefault();
    // add shoe logic
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <h2>Shoes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe) => (
            <tr key={shoe.id}>
              <td>{shoe.name}</td>
              <td>{shoe.price}</td>
              <td>{shoe.quantity}</td>
              <td>
                <button onClick={() => handleDeleteShoe(shoe.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Shoe</h2>
      <form onSubmit={handleAddShoe}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="0.01"
          required
        />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="0" required />
        <br />
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
}

export default Admin;
