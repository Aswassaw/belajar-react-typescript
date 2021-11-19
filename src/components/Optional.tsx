interface OptionalInterface {
  name?: string;
}

export const Optional = (props: OptionalInterface) => {
  const { name = "Tidak Diketahui" } = props;

  return <div className='border'>My name is {name}</div>;
};
