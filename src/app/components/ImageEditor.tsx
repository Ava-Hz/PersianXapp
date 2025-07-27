import Image from "next/image";

interface ImageEditorPropsType {
  onClose: () => void;
  previewUrl: string;
  setting: { type: "original" | "wide" | "squer"; sensitive: boolean };
  setSetting: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "squer";
      sensitive: boolean;
    }>
  >;
}

const ImageEditor = (props: ImageEditorPropsType) => {
  const { onClose, previewUrl, setSetting, setting } = props;

  const handleChangeSensitive = (sensitive: boolean) => {
    setSetting((prevState) => ({ ...prevState, sensitive }));
  };

  const handleChangetype = (type: "original" | "wide" | "squer") => {
    setSetting((prevState) => ({ ...prevState, type }));
  };

  return (
    <div className="fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl py-6 px-8 flex flex-col gap-6 w-[650px] max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <svg
              className="rotate-180 cursor-pointer"
              onClick={onClose}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h2 className="font-bold text-xl text-white">بریدن رسانه</h2>
          </div>

          <button
            onClick={onClose}
            className="py-2 px-4 rounded-full bg-white text-black font-bold"
          >
            ذخیره
          </button>
        </div>

        {/* Preview Image */}
        <div className="w-full h-[600px] flex items-center justify-center bg-zinc-900 rounded-md overflow-hidden">
          <Image
            src={previewUrl}
            width={600}
            height={600}
            alt="Preview"
            className={`w-full ${
              setting.type === "original"
                ? "h-full object-contain"
                : setting.type === "squer"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>

        {/* Settings */}
        <div className="flex justify-end gap-6 flex-wrap">
          {/* Original */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleChangetype("original")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  setting.type === "original"
                    ? "fill-iconBlue"
                    : "fill-[#e7e9ea]"
                }
                d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
            <span className="text-white text-sm">اصلی</span>
          </div>

          {/* Wide */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleChangetype("wide")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  setting.type === "wide" ? "fill-iconBlue" : "fill-[#e7e9ea]"
                }
                d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
            <span className="text-white text-sm">عریض</span>
          </div>

          {/* Square */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleChangetype("squer")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  setting.type === "squer" ? "fill-iconBlue" : "fill-[#e7e9ea]"
                }
                d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
            <span className="text-white text-sm">مربعی</span>
          </div>

          {/* Sensitive Toggle */}
          <div
            onClick={() => handleChangeSensitive(!setting.sensitive)}
            className={`cursor-pointer text-sm font-bold text-black py-1 px-4 rounded-full transition-all duration-200 ${
              setting.sensitive ? "bg-red-500" : "bg-white"
            }`}
          >
            محتوای حساس
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
