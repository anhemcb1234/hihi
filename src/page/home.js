import React from "react";

import ItemNote from "../components/ItemNote";
import Tabs from "../components/tabs";
import Detail from "./detail";
import Add from "./add";
import SearchBox from "../components/searchBox";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],

      detailMode: false,
      detail: null,

      addMode: false,
    };

    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.delNote = this.delNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  addNote(txt) {
    this.setState({
      ...this.state,
      list: [...this.state.list, { title: txt, status: 0 }],
    });

    localStorage.setItem(
      "listNote",
      JSON.stringify([...this.state.list, { title: txt, status: 0 }])
    );
  }

  editNote(txt, i) {
    let newList = this.state.list.map((item, index) => {
      if (index == i) {
        return {
          ...item,
          title: txt,
        };
      }
      return item;
    });

    this.setState({
      ...this.state,
      list: newList,
    });

    localStorage.setItem("listNote", JSON.stringify(newList));
  }

  updateNote(status, i) {
    let newList = this.state.list.map((item, index) => {
      if (index == i) {
        return {
          ...item,
          status: status,
        };
      }
      return item;
    });

    this.setState({
      ...this.state,
      list: newList,
    });

    localStorage.setItem("listNote", JSON.stringify(newList));
  }

  delNote(i) {
    let newList = this.state.list.filter((item, index) => {
      if (index != i) {
        return item;
      }
    });

    this.setState({
      ...this.state,
      list: newList,
    });

    localStorage.setItem("listNote", JSON.stringify(newList));
  }

  searchNote(status, txt) {
    let list = JSON.parse(localStorage.getItem("listNote"));

    if (txt == "" || txt == null || txt == undefined || txt == "undefined") {
      this.componentWillMount();
      return;
    }

    const newList = list.filter((item) => {
      if ((item.status == status || status == 10) && item.title.includes(txt)) {
        return item;
      }
    });

    this.setState({ ...this.state, list: newList });
  }

  componentWillMount() {
    let list = localStorage.getItem("listNote");
    list != null
      ? this.setState({ ...this.state, list: JSON.parse(list) })
      : localStorage.setItem(JSON.stringify([]));
  }

  render() {
    return (
      <div>
        {this.state.addMode ? (
          <Add
            backFunc={() => this.setState({ ...this.state, addMode: false })}
            createFunc={this.addNote}
          />
        ) : this.state.detailMode ? (
          <Detail
            data={this.state.detail}
            backFunc={() => this.setState({ ...this.state, detailMode: false })}
            editFunc={this.editNote}
          />
        ) : (
          <>
            <SearchBox searchFunc={this.searchNote} />

            <div className="list">
              {this.state.list.length > 0 ? (
                <>
                  {this.state.list.map((item, index) => (
                    <ItemNote
                      key={`note-${index}`}
                      data={item}
                      detailToggle={() =>
                        this.setState({
                          ...this.state,
                          detailMode: true,
                          detail: { value: item, index: index },
                        })
                      }
                      updateFunc={(value) => this.updateNote(value, index)}
                      delFunc={() => this.delNote(index)}
                    />
                  ))}
                </>
              ) : (
                <h3>Bạn chưa có ghi chú nào</h3>
              )}
            </div>
            <Tabs
              addFunc={() => this.setState({ ...this.state, addMode: true })}
            />
          </>
        )}
      </div>
    );
  }
}

export default Home;
