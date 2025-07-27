import React from "react";
import { Image } from "@imagekit/next";

const PostInfo = () => {
  return (
    <div>
      <Image
        urlEndpoint="https://ik.imagekit.io/qlmj6quaz/"
        src="icons/infoMore.svg"
        width={16}
        height={16}
        alt="Picture of the author"
      />
    </div>
  );
};

export default PostInfo;
