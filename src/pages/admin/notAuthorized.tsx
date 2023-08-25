import React, { useState } from "react";

export default function NotAuthorized() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  function handleRemoveImage() {
    setSelectedImage(null);
  }

  return (
    <div className=" ">
      {/* <Button className=" mt-12 " size="sm" variant="outline">
        Volver al inicio
      </Button> */}
      <div className="flex w-full	 flex-col rounded-lg border-2 border-dashed border-foreground   px-4 py-6 ">
        <div className="flex flex-col items-center">
          <svg
            className="m-2 h-10 w-12 "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
        </div>

        {selectedImage && (
          <div className="mt-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Imagen Seleccionada</h2>
            <div className=" flex flex-col items-center">
              <img
                src={selectedImage}
                alt="Selected"
                className="mr-4 h-64 h-full w-64 w-full overflow-hidden object-cover"
              />

              <button
                onClick={handleRemoveImage}
                className="rounded-full bg-slate-200 p-2 text-foreground  hover:text-slate-500 "
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 10l4.147-4.147a1 1 0 011.415 1.414L11.707 11l4.148 4.147a1 1 0 01-1.415 1.414L10.293 12l-4.147 4.147a1 1 0 01-1.415-1.414L8.293 11 4.146 6.854a1 1 0 111.415-1.414L10.293 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
