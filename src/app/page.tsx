
import LeftSidebar from "./components/LeftSidebar";
import MainComponent from "./components/MainComponent";


const page = () => {
  return (
    <div className="w-full text-black flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for nav header */}
        <LeftSidebar />
        <MainComponent/>
        
        <section>Right Section</section>
      </div>
    </div>
  );
};

export default page;
