import { useState } from 'react';
import './admin.css';

function Admin() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: '',
    category: '',
    image: '',
    price: 0,
  });

  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({
    code: '',
    discount: 0,
  });

  function handleProductChange(e) {
    let name = e.target.name;
    // create a copy
    // modify the copy
    // set the copy back
    let copy = { ...product };
    copy[name] = e.target.value;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  function handleCouponChange(e) {
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = e.target.value;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  return (
    <div className="admin page">
      <h1 className="title">Manage your store</h1>

      <div className="parent">
        <section className="products">
          <div className="form">
            <h4>Create Products</h4>

            <div className="control">
              <label className="form-label">Title</label>
              <input onChange={handleProductChange} name="title" type="text" className="form-control" />
            </div>

            <div className="control">
              <label className="form-label">Category</label>
              <input onChange={handleProductChange} name="category" type="text" className="form-control" />
            </div>

            <div className="control">
              <label className="form-label">Image</label>
              <input onChange={handleProductChange} name="image" type="text" className="form-control" />
            </div>

            <div className="control">
              <label className="form-label">Price</label>
              <input onChange={handleProductChange} name="price" type="number" className="form-control" />
            </div>

            <div className="control">
              <button onClick={saveProduct} className="btn btn-dark">
                Save Product
              </button>
            </div>
          </div>

          {allProducts.map((prod) => (
            <p key={prod.title}>
              {prod.title} ${prod.price}
            </p>
          ))}
        </section>

        <section className="codes">
          <div className="form">
            <h4>Create Coupons</h4>

            <div className="control">
              <label className="form-label">Code</label>
              <input onBlur={handleCouponChange} name="code" type="text" className="form-control" />
            </div>

            <div className="control">
              <label className="form-label">Discount</label>
              <input onBlur={handleCouponChange} name="discount" type="number" className="form-control" />
            </div>

            <div className="control">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save Coupon
              </button>
            </div>
          </div>

          {allCoupons.map((coupon) => (
            <p key={coupon.code}>
              {coupon.code} - {coupon.discount}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Admin;
