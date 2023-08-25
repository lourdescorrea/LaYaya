import {
    FormControl
} from "./components/Form";
import { Input } from "./components/fields/Input";

interface RHFFileUpload{
    onChange: (url: string) => void;
}

export const RHFTextField = (props:  RHFFileUpload) => {
  const { onChange } = props;
  return (

          <FormControl>
            <Input
             
              disabled={}
              type={}
              onChange={}
         
            />
          </FormControl>
      
      )}
    />
  );
};
