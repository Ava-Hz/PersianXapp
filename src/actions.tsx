"use server";

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const des = formData.get("des") as string;

  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/Upload",
      transformation: {
        pre: "w-600",
      },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
