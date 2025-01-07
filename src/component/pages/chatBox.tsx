const chatBox = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="mt-20 w-full p-4">
        <select
          name="search"
          id=""
          className="w-full border outline-none py-2 rounded-md"
        >
          <option value="search for user conversation.."></option>
        </select>
        <div className="mt-6 w-full flex gap-5">
          <button className="bg-pink-500 text-white flex-1 py-2 rounded-md text-sm w-full">
            Message
          </button>
          <button className="bg-pink-500 text-white flex-1 py-2 rounded-md text-sm w-full">
            Chat request [0]
          </button>
          <button className="bg-pink-500 text-white flex-1 py-2 rounded-md text-sm w-full">
            Sent request [0]
          </button>
        </div>
      </div>
    </div>
  );
};

export default chatBox;
