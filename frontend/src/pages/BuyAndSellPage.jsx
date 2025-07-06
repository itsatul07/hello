import { useState } from "react";
import { ProductCard } from "../Components/Card";
import { Link } from "react-router-dom";

export default function BuyAndSellPage() {
  // Sample products for sale
  const [products, setProducts] = useState([
    { id: 1, name: "Bicycle", price: "₹2,500", seller: "Rahul Sharma", contact: "+91 9876543210" },
    { id: 2, name: "Laptop (Dell)", price: "₹30,000", seller: "Aditi Verma", contact: "+91 8765432109" },
    { id: 3, name: "Dining Table", price: "₹5,000", seller: "Vikram Singh", contact: "+91 7896541230" },
  ]);

  // State for adding new items
  const [newItem, setNewItem] = useState({ name: "", price: "", seller: "", contact: "" });

  // Function to handle adding new items
  const addItem = () => {
    if (newItem.name && newItem.price && newItem.seller && newItem.contact) {
      setProducts([...products, { id: products.length + 1, ...newItem }]);
      setNewItem({ name: "", price: "", seller: "", contact: "" }); // Reset input fields
    } else {
      alert("Please fill in all details!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">🛒 Buy & Sell</h1>

      {/* List of products */}
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className=" p-4 rounded-lg ">
            <ProductCard name={item.name} price={item.price} seller={item.seller} contact ={item.contact} />
          </div>
        ))}
      </div>

      {/* Add New Item */}
      {/* Sell Your Item Button */}
      <div className="text-center mb-6">
        <Link to="/sell-item">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            + Sell Your Item
          </button>
        </Link>
      </div> 
    </div>
  );
}
