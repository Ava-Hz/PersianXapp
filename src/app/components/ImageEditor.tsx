import Image from "next/image";

interface ImageEditorPropsType {
  onClose: () => void;
  previewUrl: string;
  setting: { type: "original" | "wide" | "squer"; sensitive: Boolean };

  setSetting: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "squer";
      sensitive: Boolean;
    }>
  >;
}

const ImageEditor = (props: ImageEditorPropsType) => {
  const { onClose, previewUrl, setSetting, setting } = props;

  return (
    <div className="fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-6 flex flex-col gap-6 mt-10 w-[650px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2">
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

          <button className="py-2 px-4 rounded-full bg-white text-black font-bold">
            ذخیره
          </button>
        </div>

        {/* Preview Image */}
        <div className="w-[600px] h-[600px] flex items-center justify-center bg-zinc-900 rounded-md overflow-hidden">
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

        {/* Settings Placeholder */}
        <div>
          {/* You can add image type buttons or sensitive switch here */}
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
