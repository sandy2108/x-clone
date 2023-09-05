import React from "react";
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

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[23%] text-black flex flex-col h-screen items-stretch px-4">
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
      <button className="rounded-full  bg-transparent flex items-center space-x-2 py-4 px-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12 "></div>
          <div className="text-left text-sm">
            <div className="font-semibold truncate">Sanjayshanmugam sk</div>
            <div>@Sanjaysk2108</div>
          </div>
        </div>

        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
