import { Control, Controller } from "react-hook-form";
import { Input, InputBox } from "./styles";

type CustomImputProps = {
  type?: "text" | "password";
  name: string;
  placeholder: string;
  required: boolean;
  control: Control<any, any>;
};

export function CustomInput({
  type = "text",
  required,
  placeholder,
  control,
  name,
}: CustomImputProps) {
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <InputBox>
          <Input
            type={type}
            error={!!error}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            value={value}
          />
          {!!error && <span>{error?.message}</span>}
        </InputBox>
      )}
    />
  );
}
