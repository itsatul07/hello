export default function Footer() {
    return (
      <footer>
        <div className="bg-[var(--bg-color)]">
          <div className=" p-4 bg-red-200 border-l-4  border-red-600">
            <h2 className="text-lg font-semibold">🚨 Emergency Notice</h2>
            <p>
              If you need urgent help, press the emergency button on any page.
            </p>
          </div>

          <div className="bg-gray-800 text-white mt-2 text-center p-4 ">
            <p>© 2025 Green Valley Society. All rights reserved.</p>
            <p>📍 Mumbai, India | 📞 +91 9876543210</p>
          </div>
        </div>
      </footer>
    );
  }
