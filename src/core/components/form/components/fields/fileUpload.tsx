import * as React from "react";
import { useState } from "react";
import { api } from "yaya/core/trpc";

interface FileUploadProps {
  onChange: (url: string) => void;
  name: string;
  disabled?: boolean;
  value?: string;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ onChange, disabled, name, value }, ref) => {
    const { mutateAsync } = api.cloudinary.create.useMutation();

    const [selectedImage, setSelectedImage] = useState<string | null>(
      value ?? null
    );

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
      <div className="flex rounded-full h-28 w-28 flex-col items-center justify-center overflow-hidden  border-2 border-dashed border-foreground ">
        {!selectedImage && (
          <label htmlFor="file-upload" className="text-foreground ">
            Subir Imagen
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
              className=" fixed  hover:text-white "
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
              src={selectedImage || value}
              alt="Selected"
              className="h-28 w-28"
            />
          </div>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";
