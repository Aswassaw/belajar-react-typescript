import React from "react";

interface EventProps {
  handleIncrement: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Event = (props: EventProps) => {
  return (
    <div className='border'>
      <button onClick={(e) => props.handleIncrement(e, new Date().getTime())}>
        Click Me
      </button>
      <input type="text" value={props.inputValue} onChange={props.handleChange} />
    </div>
  );
};
