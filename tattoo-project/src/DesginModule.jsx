// import { useEffect, useState } from "react"
// import { Link, Route, Routes } from "react-router-dom"
// import SelectProductById from "./SelectProductById"
// import { useDispatch, useSelector } from "react-redux"
// import { addToCart } from "./CartComp"


// const DesginModule = () =>{

//     const [category,setcategory] = useState([])
//     const [filtercategory,setfiltercategory] = useState([])

//     // useEffect(() =>{
//     //     fetch('https://fakestoreapi.com/products/category/electronics')
//     //     .then(res=>res.json())
//     //     .then(json=>console.log(json))
//     // },[])


//     //     // useEffect(()=>{
// //     //     fetch('http://localhost:3000/api/designs')
// //     //     .then(res=>res.json())
// //     //     .then(json=>console.log(json))

// //     // },[])

// //     // const feactdata=async()=>{
// //     //     let response=await fetch('http://localhost:3000/api/designs')
// //     //     let data= await response.json()
// //     //     console.log(data)
// //     //     setdata(data)
// //     // }

// //     // useEffect(()=>{
// //     //     feactdata()

// //     // },[])


//     const handlecategories = async () =>{

//         let response = await fetch('https://fakestoreapi.com/products/categories')

//         let data = await response.json()
//         setcategory(data)
//     }

//     useEffect(() =>{
//         handlecategories()
//     },[])

//     const handleselectCategory = async (data) =>{
//         let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
//         let data2 = await response.json()

//         setfiltercategory(data2)
//         console.log(data2)
//     }   

//     const dispatch = useDispatch()

//     const cart = useSelector((state) => state.cart)

//     useEffect(() =>{
//         console.log('cart')
//         console.log(cart)
//     },[cart])


//     return(
//         <div>
//             <h1>Category Fields</h1>
//             <div style={{display:'flex',flexDirection:'row',gap:50}}> 
//                <Link to="/cart">  <button>Cart {cart.length}  </button>  </Link> 
//             {
//                 category.map((data,index) =>{
//                     return(

//                         <div key={index}>
//                         <button onClick={() =>handleselectCategory(data)}>{data}</button>
//                         </div>

//                     )
//                 })
//             }
//                  </div>

//                <div style={{display:'grid',gridTemplateColumns:"300px 300px 300px",gap:200}}>
//                     {
//                         filtercategory.map((item,index) =>{
//                             return(

//                                 <div key={index}>
//                                      <Link to="/selectProduct" state={{id:item.id}} >
//                                     <h4>{item.category}</h4>
//                                     <img src={item.image}  style={{width:'300px',height:'300px'}}/>
//                                     <p style={{fontWeight:'bold',color:'blue',fontSize:30}}>Price <span>{item.price}</span></p>
//                                     <div style={{display:'flex',gap:80}}>

//                                     <p style={{fontWeight:'bold',color:'red'}}>Rating {item.rating.rate}</p>

//                                     <p>Count {item.rating.count}</p>
//                                     </div>
//                                     <p style={{width:"300px"}}>{item.description}</p></Link>

//                                    <Link to="/cart" ><button onClick={() =>dispatch(addToCart(item))}>Add to cart</button></Link>



//                                 </div>
//                             )
//                         })
//                     }
//                 </div> 
//                         <div>


//                         </div>
//             </div>
//     )
// }

// export default DesginModule



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartComp";

const DesginModule = () => {
    const [category, setCategory] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);

    const handleCategories = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategory(data);
    };

    useEffect(() => {
        handleCategories();
    }, []);

    const handleSelectCategory = async (data) => {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${data}`
        );
        const data2 = await response.json();
        setFilterCategory(data2);
    };

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        console.log("cart");
        console.log(cart);
    }, [cart]);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Shop by Category</h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/cart">
                    <button className="btn  btn-outline-primary">
                        Cart <span className="badge bg-dark">{cart.length}</span>
                    </button>
                </Link>
                <div className="d-flex gap-3">
                    {category.map((data, index) => (
                        <button
                            key={index}
                            className="btn btn-outline-primary"
                            onClick={() => handleSelectCategory(data)}
                        >
                            {data.charAt(0).toUpperCase() + data.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row g-4">
                {filterCategory.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <img
                                src={item.image}
                                className="card-img-top p-3"
                                style={{ height: "250px", objectFit: "contain" }}
                                alt={item.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.category}</h5>
                                <p className="card-text text-truncate">{item.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-success fw-bold">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <small className="text-muted">
                                        ⭐ {item.rating.rate} ({item.rating.count} reviews)
                                    </small>
                                </div>
                                <Link to="/selectProduct" state={{ id: item.id }}>
                                    <button className="btn btn-primary mt-3 w-100">
                                        View Details
                                    </button>
                                </Link>



                                {/* <button
                                    className="btn btn-success mt-2 w-100"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                                 */}
                                <Link to="/cart">

                                    <button
                                        className="btn btn-success mt-2 w-100"
                                        onClick={() => {
                                            console.log("Adding to cart:", item); // Verify the item being added
                                            dispatch(addToCart(item));
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesginModule;
