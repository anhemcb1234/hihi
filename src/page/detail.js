import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: props.data.value.title,
    };
  }

  render() {
    return (
      <>
        <button className="" onClick={this.props.backFunc}>
          Back
        </button>
        <div className="">Blog page</div>
        <textarea
          defaultValue={this.state.txt}
          onChange={(e) => this.setState({ txt: e.target.value })}
        />
        <button
          onClick={() =>
            this.props.editFunc(this.state.txt, this.props.data.index)
          }
        >
          save
        </button>
      </>
    );
  }
}

export default Detail;
