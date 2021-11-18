// Mmebuat interface untuk object
interface PersonProps {
  name: {
    firstName: string;
    lastName: string;
  };
}

export const Person = (props: PersonProps) => {
  return (
    <div className="border">
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
