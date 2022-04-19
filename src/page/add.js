import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <>
        <button className="" onClick={this.props.backFunc}>
          Back
        </button>
        <div className="">Tạo ghi chú</div>

        <textarea
          placeholder="Nhập nội dung"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={() => this.props.createFunc(this.state.text)}>
          Save
        </button>
      </>
    );
  }
}

export default Add;
