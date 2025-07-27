import React from "react";
import { Image } from "@imagekit/next";
import PostInfo from "./PostInfo";
import Interactions from "./Interactions";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ava بازپست کرد</span>
      </div>

      {/* main post */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          {/* Avatar*/}
          <Image
            urlEndpoint="https://ik.imagekit.io/qlmj6quaz/"
            src="general/Avatar.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full overflow-hidden"
          />

          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm font-bold">Ava Hoseinzade</h2>
              <span className="text-textGray text-sm">@Ava-Hz</span>
              <span className="text-textGray text-sm">1 روز پیش</span>
            </div>

            <PostInfo />
          </div>
        </div>

        {/* Container*/}
        <div className="ps-12 flex flex-col gap-2 mt-2">
          <p className="text-sm leading-relaxed text-justify">
            گیتی (به انگلیسی: Universe) اشاره به تمامی هستی و کائنات و عالم
            دارد...
          </p>
          <Image
            urlEndpoint="https://ik.imagekit.io/qlmj6quaz/"
            src="general/post.jpg"
            width={600}
            height={600}
            alt="Universe"
            className="rounded-lg"
          />
        </div>
        <Interactions />
      </div>
    </div>
  );
};

export default Post;
