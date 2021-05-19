import { PureComponent } from "react";
import ReactDom from "react-dom";

import "./index.scss";

class Index extends PureComponent {
  state = {
    number: 111,
    test: "demo",
  };

  addNumber() {
    this.setState((state, props) => ({
      number: state.number + 1,
    }));
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        hello word~~~
        <div> {number} </div>
        <button onClick={() => this.addNumber()}> 添加 </button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector("#container"));
