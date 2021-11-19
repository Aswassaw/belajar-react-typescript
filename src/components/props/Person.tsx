import PersonProps from "./PersonInterface";

export const Person = (props: PersonProps) => {
  return (
    <div className='border'>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
