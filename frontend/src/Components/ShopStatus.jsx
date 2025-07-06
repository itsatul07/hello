const shops = [
    { name: "Grocery Store", status: "Open" },
    { name: "Medical Store", status: "Open" },
    { name: "Salon", status: "Closed" },
    { name: "Cafe", status: "Open" },
  ];
  
  export default function ShopStatus() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">🛍️ Shop Status</h1>
        <ul className="mt-4 space-y-3">
          {shops.map((shop, index) => (
            <li key={index} className={`p-3 rounded-lg ${shop.status === "Open" ? "bg-green-100" : "bg-red-100"}`}>
              {shop.name} - <strong>{shop.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  