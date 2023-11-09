import { useEffect, useState } from 'react';
import './admin.css';
import DataService from '../services/dataservice';

function Admin() {

  const [allProduct, setALLProduct] = useState({});
  const [product, setProduct] = useState({
    title: '',
    category: '',
    price: 0,
    image: '',
  });

  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({

    code: '',
    discount: 0,
  });
  useEffect(function () {
    loadProducts();
    loadCoupons();
  }, []);

  async function loadProducts() {
    const service = new DataService();
    let productsResponse = await service.getProducts();
    setALLProduct(productsResponse);

  }

  async function loadCoupons() {
    let service = new DataService();
    let couponsResponse = await service.getCoupons();
    setAllCoupons(couponsResponse);
  }




  function handleProductChange(e) {
    let name = e.target.name;
    // create a copy
    // modify the copy
    // set the copy back
    let copy = { ...product };
    copy[name] = e.target.value;
    setProduct(copy);
  }

 async function saveProduct() {
    // fix the price to be a number
    let fixedProduct = { ...product };
    fixedProduct.price = Number(fixedProduct.price);

    const service = new DataService();
    await service.saveProduct(fixedProduct);



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

  async function saveCoupon() {
    // fix the price to be a number
    let fixedCoupon = { ...coupon };
    fixedCoupon.discount = Number(fixedCoupon.discount);
    const service = new DataService();
    let savedCoupon = await service.saveCoupon(fixedCoupon);
    console.log(savedCoupon);
    




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
