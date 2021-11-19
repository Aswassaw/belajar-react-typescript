interface StyleProps {
  styles: React.CSSProperties;
}

export const Style = (props: StyleProps) => {
  return <div className="border" style={props.styles}>Aku memiliki style</div>;
};
