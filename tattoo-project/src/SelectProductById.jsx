// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { addToCart } from './CartComp'; // Ensure the addToCart action is properly imported
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";



// const SelectProductById = () => {
//   const location = useLocation();
//   const { id } = location.state || null;
//   const [card, setCart] = useState({});

//   useEffect(() => {
//     if (id) {
//       fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((res) => res.json())
//         .then((json) => setCart(json));
//     }
//   }, [id]);

//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);

//   useEffect(() => {
//     console.log("cart");
//     console.log(cart);
//   }, [cart]);


//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card shadow-lg rounded">
//             <div className="row g-0">
//               <div className="col-md-6">
//                 <img
//                   src={card.image}
//                   className="img-fluid rounded-start"
//                   alt={card.title}
//                   style={{ objectFit: 'contain', height: '100%' }}
//                 />
//               </div>
//               <div className="col-md-6">
//                 <div className="card-body p-4">
//                   <h5 className="card-title text-primary">{card.title}</h5>
//                   <h6 className="text-muted">{card.category}</h6>
//                   <p className="card-text text-truncate">{card.description}</p>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h4 className="text-success">${card.price}</h4>
//                     <small className="text-muted">
//                       ⭐ {card.rating?.rate} ({card.rating?.count} reviews)
//                     </small>
//                   </div>

//                   <div className="d-flex gap-2">
                   
//                     <button
//                       className="btn btn-warning w-100"
//                       onClick={() => console.log('Book Now clicked')}
//                     >
//                       Book Now
//                     </button>
//                     <form>
//                     <input type='date' />
//                     <input type='time' />
//                     <input type='submit' value="Conform Booking" />
//                     </form>
//                     {/* <button
//                       className="btn btn-success w-100"
//                       onClick={() => addToCart(card)} // Ensure `addToCart` is correctly dispatched
//                     >
//                       Add to Cart
//                     </button> */}
//                   </div>

//                   <Link to="/cart" className="btn btn-outline-primary mt-3 w-100">
//                     View Cart
//                   </Link>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5">
//         <h3>Customer Reviews</h3>
//         <p>⭐⭐⭐⭐⭐  (5/5)</p>
//         <p>"Amazing product! Will definitely buy again."</p>
//       </div>
//     </div>
//   );
// };

// export default SelectProductById;



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SelectProductById = () => {
  const location = useLocation();
  const { id } = location.state || null;
  const [card, setCart] = useState({});
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" }); // Time state

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setCart(json));
    }
  }, [id]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleBooking = (event) => {
    event.preventDefault();
    const selectedTime = `${time.hour}:${time.minute} ${time.period}`;
    console.log("Booking Confirmed at", selectedTime);
    setModalOpen(false); // Close modal after booking
  };

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
                  style={{ objectFit: "contain", height: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary">{card.title}</h5>
                  <h6 className="text-muted">{card.category}</h6>
                  <p className="card-text">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-success">${card.price}</h4>
                    <small className="text-muted">
                      ⭐ {card.rating?.rate} ({card.rating?.count} reviews)
                    </small>
                  </div>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => setModalOpen(true)} // Open modal
                  >
                    Book Now
                  </button>
                  <Link to="/cart" className="btn btn-outline-primary mt-3 w-100">
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Booking</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleBooking}>
                  <div className="mb-3">
                    <label className="form-label">Select Date</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Select Time</label>
                    <div className="d-flex gap-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Hour"
                        min="1"
                        max="12"
                        required
                        value={time.hour}
                        onChange={(e) =>
                          setTime({ ...time, hour: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Minute"
                        min="0"
                        max="59"
                        required
                        value={time.minute}
                        onChange={(e) =>
                          setTime({ ...time, minute: e.target.value })
                        }
                      />
                      <select
                        className="form-select"
                        value={time.period}
                        onChange={(e) =>
                          setTime({ ...time, period: e.target.value })
                        }
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <h3>Customer Reviews</h3>
        <p>⭐⭐⭐⭐⭐ (5/5)</p>
        <p>"Amazing product! Will definitely buy again."</p>
      </div>
    </div>
  );
};

export default SelectProductById;
