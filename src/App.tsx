import React from "react";

import TaskInput from "./components/TaskInput";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center font-cursive bg-blue-600 min-h-screen w-full p-8">
      <span className="text-white uppercase text-4xl sm:text-5xl md:text-6xl my-[15px] md:my-[30px] mx-0 text-center z-10">
        taskmaster
      </span>
      <TaskInput />
    </div>
  );
};

export default App;
