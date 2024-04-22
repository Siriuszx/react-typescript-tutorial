import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type OverrideProps<T, U> = Omit<T, keyof U> & U;

// type InputProps = Omit<ComponentProps<"input">, 'onChange'> & { onChange: (value: string) => void };

type InputProps = OverrideProps<ComponentProps<'input'>, { onChange: (value: string) => void, name: string}>;

export const Input = (
  props: InputProps 
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      name="parent"
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
