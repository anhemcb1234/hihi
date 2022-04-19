import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 10,
      txt: "",
    };
  }

  render() {
    return (
      <>
        <div className="itemProduct">
          <select
            defaultValue={10}
            onChange={(e) =>
              this.setState({ ...this.state, status: e.target.value })
            }
          >
            <option value={10}>All</option>
            <option value={0}>Pending</option>
            <option value={1}>Doing</option>
            <option value={2}>Review</option>
            <option value={3}>Success</option>
            <option value={4}>Red star</option>
          </select>
          <input
            onChange={(e) =>
              this.setState({ ...this.state, txt: e.target.value })
            }
          ></input>
          <button
            onClick={() =>
              this.props.searchFunc(this.state.status, this.state.txt)
            }
          >
            Search
          </button>
        </div>

        <style jsx="true">{``}</style>
      </>
    );
  }
}

export default SearchBox;
