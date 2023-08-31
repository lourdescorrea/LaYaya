import * as React from "react";
import { useState } from "react";
import { api } from "yaya/core/trpc";

interface FileUploadProps {
  onChange: (url: string) => void;
  name: string;
  disabled?: boolean;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ onChange, disabled, name }, ref) => {
    const { mutateAsync } = api.cloudinary.create.useMutation();

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    function handleRemoveImage() {
      setSelectedImage(null);
    }

    const MAX_IMAGE_SIZE_MB = 10;

    const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0];

      if (!file) return;
      if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
        console.log("El tamaño de la imagen excede el tamaño máximo permitido");
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);

      try {
        // Genera una firma de carga para Cloudinary
        const { signature, apikey, timestamp, folder, uploadUrl } =
          await mutateAsync({ name: file.name });

        // Realiza la carga de la imagen a Cloudinary
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", apikey);
        formData.append("timestamp", `${timestamp}`);
        formData.append("signature", signature);
        formData.append("folder", folder);

        const response = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("data", data);

        const secureUrl = data.secure_url;

        onChange(secureUrl);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    return (
      <div className="flex h-64 w-64 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-foreground px-4 py-6">
        {!selectedImage && (
          <label
            htmlFor="file-upload"
            className="rounded-lg bg-slate-100 px-4 py-2 text-foreground hover:bg-foreground hover:text-white"
          >
            Subir Image
          </label>
        )}
        <input
          name={name}
          className="hidden"
          type="file"
          onChange={onSelectFile}
          disabled={disabled}
          ref={ref}
          id="file-upload"
        />

        {selectedImage && (
          <div>
            <button
              onClick={handleRemoveImage}
              className=" fixed text-transparent hover:text-slate-500 "
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
            <img
              src={selectedImage}
              alt="Selected"
              className=" h-56 w-56 object-cover"
            />
          </div>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";
