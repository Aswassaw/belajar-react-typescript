interface HeadingProps {
  children: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <div className="border">
      <h2>{props.children}</h2>
    </div>
  );
};
