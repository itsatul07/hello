import { useState } from "react";

export const SellItemForm=()=>{
  const [formData, setFormData] = useState({
    ownerName: "",
    itemName: "",
    price: "",
    contact: "",
    category: "",
    description: "",
    imgSrc: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, imgSrc: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ownerName || !formData.itemName || !formData.price || !formData.contact || !formData.imgSrc) {
      alert("Please fill in all required details!");
      return;
    }
    console.log("Item Listed Successfully:", formData);
    alert("Item Listed Successfully!");
    setFormData({ ownerName: "", itemName: "", price: "", contact: "", category: "", description: "", imgSrc: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">📢 Sell Your Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Owner Name & Contact */}
        <div className="flex gap-3">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            className="w-1/2 p-2 border rounded"
            value={formData.ownerName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            className="w-1/2 p-2 border rounded"
            value={formData.contact}
            onChange={handleInputChange}
            maxLength="10"
            required
          />
        </div>

        {/* Item Name & Price */}
        <div className="flex gap-3">
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            className="w-1/2 p-2 border rounded"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            className="w-1/2 p-2 border rounded"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category Dropdown */}
        <select
          name="category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe the item..."
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
        />

        {/* Image Upload */}
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {formData.imgSrc ? (
              <img src={formData.imgSrc} alt="Item Preview" className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer flex flex-col items-center text-gray-500 text-sm">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} required />
                📷 Click to Upload
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          List Item for Sale
        </button>
      </form>
    </div>
  );
}
export const FoundForm =()=>{
    const [formData, setFormData] = useState({
    ownerName: "",
    itemName: "",
    contact: "",
    category: "",
    description: "",
    imgSrc: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, imgSrc: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ownerName || !formData.itemName  || !formData.contact || !formData.imgSrc) {
      alert("Please fill in all required details!");
      return;
    }
    console.log("Item Listed Successfully:", formData);
    alert("Item Listed Successfully!");
    setFormData({ ownerName: "", itemName: "",  contact: "", category: "", description: "", imgSrc: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">📢 Sell Your Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Owner Name & Contact */}
        <div className="flex gap-3">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            className="w-1/2 p-2 border rounded"
            value={formData.ownerName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            className="w-1/2 p-2 border rounded"
            value={formData.contact}
            onChange={handleInputChange}
            maxLength="10"
            required
          />
        </div>

        {/* Item Name &  */}
        <div className="flex gap-3">
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            className="w-1/2 p-2 border rounded"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category Dropdown */}
        <select
          name="category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe the item..."
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
        />

        {/* Image Upload */}
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {formData.imgSrc ? (
              <img src={formData.imgSrc} alt="Item Preview" className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer flex flex-col items-center text-gray-500 text-sm">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} required />
                📷 Click to Upload
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          List Item for Sale
        </button>
      </form>
    </div>
  );
}

export const VolunteerForm = ()=>{
  const [formData, setFormData] = useState({
    volunteerName: "",
    contact: "",
    opportunityTitle: "",
    date: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.volunteerName || !formData.contact || !formData.opportunityTitle || !formData.date || !formData.location) {
      alert("Please fill in all required fields!");
      return;
    }
    console.log("Volunteer Submission:", formData);
    alert("Thank you for volunteering!");
    setFormData({
      volunteerName: "",
      contact: "",
      opportunityTitle: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">🙌 Volunteer Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            name="volunteerName"
            placeholder="Your Name"
            className="w-1/2 p-2 border rounded"
            value={formData.volunteerName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            className="w-1/2 p-2 border rounded"
            value={formData.contact}
            onChange={handleInputChange}
            maxLength="10"
            required
          />
        </div>

        <input
          type="text"
          name="opportunityTitle"
          placeholder="Event of Volunteering"
          className="w-full p-2 border rounded"
          value={formData.opportunityTitle}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="date"
          placeholder="Date"
          className="w-full p-2 border rounded"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={formData.location}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe your interest or availability..."
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
        />

        <button
          type="submit"
          className="block mx-auto bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Volunteer Form
        </button>
      </form>
    </div>
  );
}
export default {
  SellItemForm,
  FoundForm,
  VolunteerForm
};
