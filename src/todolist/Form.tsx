import * as React from "react";

type Props = {
  addItem: (text: string) => void;
};

export function Form(props: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleAddClick() {
    if (inputRef && inputRef.current) {
      props.addItem(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddClick}>+</button>
    </div>
  );
}
