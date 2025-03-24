import { useState } from "react";

const LibraryCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    libraryId: "",
    photo: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDetails({
          ...userDetails,
          photo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add any additional logic to handle the form submission
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Library Card Generator
        </h2>

        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-bold mb-4">
              Thank you for submitting your information!
            </p>
            <p className="text-gray-700">
              Please contact the college to receive your original library card.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Library ID Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="libraryId"
              >
                Library ID
              </label>
              <input
                type="text"
                id="libraryId"
                name="libraryId"
                value={userDetails.libraryId}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your library ID"
                required
              />
            </div>

            {/* Photo Upload */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handlePhotoChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept="image/*"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Library Card Preview */}
      {!isSubmitted && (
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Your Library Card
          </h2>
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <div className="flex flex-col items-center">
              {/* Photo */}
              {userDetails.photo && (
                <img
                  src={userDetails.photo}
                  alt="User"
                  className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4"
                />
              )}
              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800">{userDetails.name}</h3>
              {/* Library ID */}
              <p className="text-gray-600">Library ID: {userDetails.libraryId}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryCard;