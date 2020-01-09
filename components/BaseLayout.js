import Header from "./Header";

const BaseLayout = (props) => (
  <div>
      <Header/>
      {props.children}
  </div>
);

export default BaseLayout