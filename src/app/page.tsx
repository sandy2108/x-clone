import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import Link from "next/link";

const NAVBARITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Message",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const page = () => {
  return (
    <div className="w-full h-screen text-white flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for nav header */}
        <section className="fixed w-[275px] flex flex-col h-screen items-stretch ">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVBARITEMS.map((item) => (
              <Link
                className="hover:bg-white/10  transition duration-200 text-xl justify-start w-fit flex items-center justify-center space-x-2  rounded-3xl py-2 px-6"
                href={`${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon className="" />
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))}

            <button className="rounded-full w-full bg-primary p-4 text-xl text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="rounded-full m-4 bg-transparent flex items-center space-x-2 p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-12 h-12 "></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Sanjayshanmugam sk</div>
                <div>@Sanjaysk2108</div>
              </div>
            </div>

            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>

        {/* <section>Hometimeline</section>
        <section>right section</section> */}
      </div>
    </div>
  );
};

export default page;
