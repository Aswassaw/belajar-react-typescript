// Membuat interface untuk string, number, dan boolean
interface GreetProps {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
  const { name, age, isLoggedIn } = props;

  return (
    <div className="border">
      <h2>
        {name}, berusia {age} tahun. Anda{" "}
        {isLoggedIn ? "sudah Login." : "belum Login."}
      </h2>
    </div>
  );
};
