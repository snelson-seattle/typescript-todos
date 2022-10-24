import React from "react";

import { FaPlus } from "react-icons/fa";

const TaskInput: React.FC = () => {
  return (
    <form className="flex relative w-[90%] items-center" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter a task..."
        className="w-full text-2xl py-[20px] px-[30px] border-none rounded-[50px] transition-[0.2s] shadow-[inset_0_0_5px_black] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] focus:outline-none"
      />
      <button type="submit" className="absolute right-0 border-none text-xl transition-[0.2s all] w-12 h-12 m-3 rounded-full shadow-[0_0_10px_black] active:shadow-[0_0_5px_black] bg-blue-600 hover:bg-blue-500 active:scale-[0.8] flex items-center justify-center text-white">
        <FaPlus />
      </button>
    </form>
  );
};
export default TaskInput;
