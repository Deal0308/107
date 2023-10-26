
import "./admin.css";


function Admin() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('/api/shoes')
            .then(response => response.json())
            .then(data => setShoes(data));
    }, []);

    const handleAddShoe = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newShoe = {
            name: formData.get('name'),
            price: formData.get('price'),
            quantity: formData.get('quantity')
        };
        fetch('/api/shoes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newShoe)
        })
            .then(response => response.json())
            .then(data => setShoes([...shoes, data]));
    };

    const handleDeleteShoe = (id) => {
        fetch(`/api/shoes/${id}`, { method: 'DELETE' })
            .then(() => setShoes(shoes.filter(shoe => shoe.id !== id)));
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.map(shoe => (
                        <tr key={shoe.id}>
                            <td>{shoe.name}</td>
                            <td>{shoe.price}</td>
                            <td>{shoe.quantity}</td>
                            <td><button onClick={() => handleDeleteShoe(shoe.id)}>Delete</button></td>
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
                <input type="number" id="price" name="price" min="0" step="0.01" required />
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
