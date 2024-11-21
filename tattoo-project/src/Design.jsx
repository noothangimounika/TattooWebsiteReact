import React, { useEffect, useState } from 'react';


import { Link } from 'react-router-dom';

const Design = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const fetchProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/designs');
            const info = await res.json();
            setData(info);
            setFilteredData(info); 
            console.log(info)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

   
    // const handleFilterCategory = async (category) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/api/designs/${category}`);
    //         const filteredProducts = await response.json();
    //         setFilteredData(filteredProducts);
    //     } catch (error) {
    //         console.error('Error fetching filtered data:', error);
    //     }
    // };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
           
            <div className="design-filter">
                <div className="design-filter1">
                    <button onClick={() => setFilteredData(data)}>All</button>
                    <button onClick={() => handleFilterCategory('animals')}>Animals</button>
                    <button onClick={() => handleFilterCategory('religion')}>Religions</button>
                    <button onClick={() => handleFilterCategory('mythology')}>Mythology</button>
                    <button onClick={() => handleFilterCategory('symbols')}>Symbols</button>
                </div>
                <div className="design-filter2">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredData.map((item) => (
                            <div key={item.id} className="design-card1">
                                <img src={item.image} alt={item.title} />
                                <h1>Tattoo Name: {item.title}</h1>
                                <h1>Artist Name: {item.author || 'Unknown'}</h1>
                                <h1>Price: ${item.price}</h1>
                                <Link to='/dynamicdesign' state={{ id: item.id }}>
                                    <button>Book Now</button>
                                </Link>
                                <Link to='/addcart' >
                                    <button>Cart</button>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
           
        </div>
    );
};

export default Design;
