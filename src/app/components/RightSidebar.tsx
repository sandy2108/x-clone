import React from "react";
import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="w-[40%] sticky top-0 mt-2 flex flex-col h-screen items-stretch px-2 ">
      <div>
        <div className="relative w-full h-full group ">
          <input
            id="searchBox"
            type="text"
            placeholder="Search "
            className="outline-none peer focus:border-primary text-black focus:border bg-slate-100 w-full h-full rounded-full py-4  pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0  h-full flex items-center justify-center p-4 peer-focus:text-primary "
          >
            <BsSearch className="w-5 h-5  " />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-slate-100 p-4 my-4 ">
        <h3 className="font-bold text-xl my-2 px-4">Whats happening</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className="hover:bg-slate-200 p-4 last:rounded-b-xl transition duration-200"
              key={i}
            >
              <div className="font-bold text-[15px]">#trending{i + 1}</div>
              <div className="text-[13px] leading-[16px] font-normal text-[#536471]">
                35.4k
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-slate-100 p-4 my-4 ">
        <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="hover:bg-slate-200 p-4 flex space-x-4 items-center last:rounded-b-xl transition duration-200"
              key={i}
            >
              <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
              <div>
                <div className="font-bold text-[15px]">Other User</div>
                <div className="text-[13px] leading-[16px] font-normal text-[#536471]">
                  @OtherUser123
                </div>
              </div>
              <div className="ml-auto w-full">
                <button className="rounded-full px-6 py-2 bg-black text-slate-100">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
