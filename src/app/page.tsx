
import LeftSidebar from "./components/LeftSidebar";
import MainComponent from "./components/MainComponent";
import RightSidebar from "./components/RightSidebar";

const page = () => {
  return (
    <div className="w-full text-black flex justify-center items-center relative">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/* left sidebar for nav header */}
        <LeftSidebar />
        <MainComponent />
         <RightSidebar/>
       
      </div>
    </div>
  );
};

export default page;
