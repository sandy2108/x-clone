import { BsSearch } from "react-icons/bs";
import LeftSidebar from "./components/LeftSidebar";
import MainComponent from "./components/MainComponent";

const page = () => {
  return (
    <div className="w-full text-black flex justify-center items-center relative">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/* left sidebar for nav header */}
        <LeftSidebar />
        <MainComponent />

        <section className="sticky top-4 w-[33%] flex flex-col h-screen items-stretch px-6 ">
          <div>
            <div className="relative w-full h-full ">
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 "
              >
                <BsSearch className="w-5 h-5 text-gray500" />
              </label>
              <input
                id="searchBox"
                type="text"
                placeholder="Search "
                className="outline-none focus:border-primary text-black focus:border bg-slate-100 w-full h-full rounded-full py-4  pl-14 pr-4"
              />
            </div>
          </div>
      
        </section>
      </div>
    </div>
  );
};

export default page;
