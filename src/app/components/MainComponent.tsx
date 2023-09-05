import React from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { TbCurrencyDogecoin } from "react-icons/tb";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";

const MainComponent = () => {
  return (
    <main className="w-[50%] flex w-full  h-full flex-col border-l-[0.5px] border-r-[0.5px] ">
      <h1 className="text-2xl font-bold my-4 p-6 backdrop-blur bg-gray/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px]  flex items-stretch py-4 space-x-2 h-32 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            placeholder="What's happening?"
            className="w-full placeholder:text-2xl placeholder:text-gray-600 h-full bg-transparent p-4 outline-none border-none"
          />

          <div className="w-full justify-between items-center flex ">
            <div></div>
            <div className="w-full max-w-[100px] ">
              <button className="rounded-full w-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border-b-[0.5px]  py-4 px-6 flex space-x-4">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row items-center justify-between ">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Sanjayshanmugam s k</div>
                  <div className="text-gray-500">@Sanjaysk2108</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className=" text-sm my-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                ducimus, quos odio tempore ab nulla in quasi nobis! Culpa
                possimus iste aspernatur sequi vero rerum neque accusamus quas
                fugiat esse?
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
              <div className="flex items-center justify-around mt-2 w-full">
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <TbCurrencyDogecoin />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer  p-3">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
