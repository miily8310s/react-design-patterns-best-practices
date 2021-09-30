import withInnerWidth from "./WithInnerWidth";

const MyComponent = ({ innerWidth }: { innerWidth: number }) => {
  return <div>innerWidth: {innerWidth}</div>;
};
export default withInnerWidth(MyComponent);
