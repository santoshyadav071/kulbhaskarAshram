const Sedual = () => {
  return (
    <div className="container mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold text-center mb-8">Schedule a Visit</h2>
  <form className="max-w-2xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="date"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700 transition-colors"
    >
      Submit
    </button>
  </form>
</div>

  );
}
export default Sedual;
