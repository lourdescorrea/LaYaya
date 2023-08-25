import * as React from "react";

interface FileUploadProps {
  onChange: (url: string) => void;
}

export const fileUpload = React.forwardRef<FileUploadProps, props>(
  ({ type, onChange, ...props }, ref) => {
    // const uploadImage = useMutation.api.image.upload;
    return (
      <label className=" rounded-lg bg-slate-100  px-4 py-2 text-foreground  hover:bg-foreground hover:text-white ">
        Seleccionar archivo
        <input
          className="hidden"
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            const url = await file;
            onchange(url);
          }}
          {...props}
        />
      </label>
    );
  }
);
