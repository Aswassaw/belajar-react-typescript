// Membuat Interface untuk array of object
interface PersonListProps {
  personListData: {
    name: string;
    job: string;
    age: number;
  }[];
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div className='border'>
      {props.personListData.map((person, index) => (
        <ul key={index}>
          <li>{person.name}</li>
          <li>{person.job}</li>
          <li>{person.age}</li>
        </ul>
      ))}
    </div>
  );
};
