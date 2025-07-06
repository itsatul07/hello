import { ShopCard } from "../Components/Card";
export default function ShopsPage() {
    const shops = [
      { name: "Grocery Store", status: "Open", timing: "9 AM - 10 PM" },
      { name: "Medical Store", status: "Open", timing: "24/7" },
      { name: "Laundry Service", status: "Closed", timing: "9 AM - 6 PM" },
      { name: "Cafe Delight", status: "Open", timing: "8 AM - 11 PM" },
      { name: "Salon & Spa", status: "Closed", timing: "10 AM - 8 PM" },
    ];
  
    return (
      <div className="p-6 ">
        <h1 className="text-3xl font-bold">🏪 Society Shops & Status</h1>
        <div className="mt-10 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop, index) => (
            <div key={index} className={`p-4 rounded-lg  `}>
              <ShopCard name={shop.name} status={shop.status} timing={shop.timing} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  