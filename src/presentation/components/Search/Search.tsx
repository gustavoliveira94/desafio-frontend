export const Search: React.FC = () => {
  return (
    <div className="flex items-center max-w-2xl mx-auto w-full">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow p-2 border border-gray-300 rounded-md"
      />
      <button className="p-2 bg-blue-500 rounded-r-md hover:bg-blue-600 text-black">
        Search
      </button>
    </div>
  );
};
