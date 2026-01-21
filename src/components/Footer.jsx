export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-3 text-md">Natural Relief</h3>
          <p className="font-semibold">Personalized science-backed natural care.</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-md">Product</h4>
          <ul className="space-y-2">
            <li className="font-semibold">Hair Test</li>
            <li className="font-semibold">Shop</li>
            <li className="font-semibold">Subscription</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-md">Company</h4>
          <ul className="space-y-2">
            <li className="font-semibold">Our Story</li>
            <li className="font-semibold">Experts</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-bold text-md">Legal</h4>
          <ul className="space-y-2">
            <li className="font-semibold">Privacy Policy</li>
            <li className="font-semibold">Terms</li>
            <li className="font-semibold">Refunds</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-md mt-10">
        © 2026 Natural Relief. All rights reserved.
      </p>
      <p className="text-center text-md mt-2">
        Powered by PigoPi
      </p>
    </footer>
  );
}
