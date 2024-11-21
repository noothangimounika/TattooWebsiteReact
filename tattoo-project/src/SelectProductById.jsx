// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// // import { addToCart } from "./CartComp";
// // import { Link } from 'react-router-dom';

// const SelectProductById = () => {

//   const location = useLocation()
//   const { id } = location.state || null
//   const [card, setcart] = useState({})



//   useEffect(() => {
//     if (id) {
//       fetch(`https://fakestoreapi.com/products/${id}`)
//         .then(res => res.json())
//         .then(json => setcart(json))

//     }
//   }, [])


//   return (
//     <div className='SelectProductById-Container' style={{ marginLeft: '20px' }}>

//       <p>Product details page</p>
//       <h3>{card.category}</h3>
//       <img src={card.image} style={{ width: "300px", height: "300px" }} />
//       <p>{card.title}</p>
//       <p>{card.price}</p>
//       <p style={{ width: '200px' }}>{card.description}</p>

//       <div className="form-div">

//         <form action="">
//           <input type="time" />
//           <input type="date" />
//           {/* <input type="submit" value="Book" /> */}
//           <input type="submit" value="Book Now" />

//         </form>

//       </div>



//     </div>
//   )
// }

// export default SelectProductById



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToCart } from './CartComp'; // Ensure the addToCart action is properly imported
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const SelectProductById = () => {
  const location = useLocation();
  const { id } = location.state || null;
  const [card, setCart] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setCart(json));
    }
  }, [id]);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("cart");
    console.log(cart);
  }, [cart]);


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg rounded">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={card.image}
                  className="img-fluid rounded-start"
                  alt={card.title}
                  style={{ objectFit: 'contain', height: '100%' }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary">{card.title}</h5>
                  <h6 className="text-muted">{card.category}</h6>
                  <p className="card-text text-truncate">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-success">${card.price}</h4>
                    <small className="text-muted">
                      ⭐ {card.rating?.rate} ({card.rating?.count} reviews)
                    </small>
                  </div>

                  <div className="d-flex gap-2">
                    <Link></Link>
                    <button
                      className="btn btn-warning w-100"
                      onClick={() => console.log('Book Now clicked')}
                    >
                      Book Now
                    </button>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => addToCart(card)} // Ensure `addToCart` is correctly dispatched
                    >
                      Add to Cart
                    </button>
                  </div>

                  <Link to="/cart" className="btn btn-outline-primary mt-3 w-100">
                    View Cart
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Customer Reviews</h3>
        <p>⭐⭐⭐⭐⭐  (5/5)</p>
        <p>"Amazing product! Will definitely buy again."</p>
      </div>
    </div>
  );
};

export default SelectProductById;






