interface GreetInterface {
  name: string;
  age: number;
}

export const Greet = (props: GreetInterface) => {
  const { name, age } = props;

  return (
    <div>
      <h2>
        Halo nama saya {name}, usia saya {age}
      </h2>
    </div>
  );
};
