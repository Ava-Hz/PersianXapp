import { Image, ImageKitProvider } from "@imagekit/next";
import Feed from "./components/Feed";
import Share from "./components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] px-4 pt-4">
        <Link
          href={"/"}
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          برای شما
        </Link>
        <Link
          href={"/"}
          className="pb-3 flex items-center"
        >
          دنبال شونده
        </Link>
        <Link
          href={"/"}
          className="pb-3 flex items-center"
        >
          دنبال کننده
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
