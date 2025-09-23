function UserProfile() {
  return (
    <div className="
      user-profile 
      bg-gray-100 
      p-8 md:p-8 sm:p-4 
      max-w-sm md:max-w-sm sm:max-w-xs 
      mx-auto my-20 
      rounded-lg shadow-lg
    ">
      <img 
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto"
        src="https://via.placeholder.com/150" 
        alt="User" 
      />

      <h1 className="sm:text-lg md:text-xl my-4 text-blue-800 text-center">
        John Doe
      </h1>
      <p className="sm:text-sm md:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies
      </p>
    </div>
  );
}

export default UserProfile;