"use client";
import React, { useRef, useState } from "react";
import { Image } from "@imagekit/next";
import { shareAction } from "@/actions";
import NextImage from "next/image";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [setting, setSetting] = useState<{
    type: "original" | "wide" | "squer";
    sensitive: Boolean;
  }>({ type: "original", sensitive: false });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    if (media) {
      formData.append("file", media);
    }

    await shareAction(formData, setting);

    // Reset form
    setMedia(null);
    e.currentTarget.reset();
  };

  const previewUrl = media ? URL.createObjectURL(media) : null;

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-4">
      {/* Avatar */}
      <div>
        <Image
          urlEndpoint="https://ik.imagekit.io/qlmj6quaz/"
          src="general/Avatar.jpg"
          width={40}
          height={40}
          alt="Picture of the author"
          className="rounded-full overflow-hidden"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Input */}
        <div>
          <input
            name="des"
            type="text"
            placeholder="چه خبر"
            className="w-full bg-transparent outline-none border-b border-borderGray py-2 text-sm"
          />

          {/* Image preview */}
          {media?.type.includes("image") && previewUrl && (
            <div className="relative rounded-xl overflow-hidden mt-2">
              <NextImage
                className={`w-full ${
                  setting.type === "original"
                    ? "h-full object-contain"
                    : setting.type === "squer"
                    ? "aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
                alt="preview"
                src={previewUrl}
                width={600}
                height={600}
              />
              <div
                onClick={() => setEdit(true)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-4 rounded-full text-sm font-bold cursor-pointer"
              >
                ویرایش
              </div>
            </div>
          )}

          {/* Video preview */}
          {media?.type.includes("video") && previewUrl && (
            <div className="relative mt-2">
              <video src={previewUrl} controls className="w-full rounded-lg" />
              <div
                onClick={() => setMedia(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
              >
                ×
              </div>
            </div>
          )}

          {/* Editor modal */}
          {edit && previewUrl && (
            <ImageEditor
              onClose={() => setEdit(false)}
              previewUrl={previewUrl}
              setting = {setting}
              setSetting = {setSetting}
            />
          )}
        </div>

        {/* Icons + Button */}
        <div className="flex items-center justify-between flex-wrap">
          {/* Icons */}
          <div className="flex gap-4 flex-wrap">
            {["image", "gif", "poll", "emoji", "schedule", "location"].map(
              (icon) => (
                <Image
                  key={icon}
                  urlEndpoint="https://ik.imagekit.io/qlmj6quaz/"
                  src={`icons/${icon}.svg`}
                  width={20}
                  height={20}
                  alt={icon}
                  className="cursor-pointer"
                  onClick={icon === "image" ? handleImageClick : undefined}
                />
              )
            )}

            {/* Hidden file input */}
            <input
              name="mediaFile"
              type="file"
              accept="image/*,video/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full py-2 px-4"
          >
            پست کردن
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
