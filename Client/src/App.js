import "./App.css";
import Note from "./block";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      judul: null,
      input: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getdata() {
    axios
      .get("/get/")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async handleDelete(key) {
    await axios
      .delete("/delete/" + key)
      .then((res) => (res.data.status ? this.getdata() : console.log("error")));
  }
  async handleSubmit(e) {
    e.preventDefault();

    await axios
      .post("/post/", {
        title: this.state.judul,
        note: this.state.note,
      })
      .then((res) => (res.data.status ? this.getdata() : console.log("error")));
    document.getElementById("form-input").reset();
  }

  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <div className="App">
        <div className="container bg-danger text-white">
          <div className="row">
            <div className="col p-3">
              <div className="col-12 p-2 mx-auto bg-primary border border-primary border rounded"></div>
            </div>
            {/* ini box notepad */}
            <div>
              {Array.isArray(this.state.data)
                ? this.state.data.map((data) => {
                    {
                      return (
                        <Note
                          key={data._id}
                          judul={data.title}
                          note_value={data.note}
                          delete={() => this.handleDelete(data._id)}
                        />
                      );
                    }
                  })
                : null}
              {/* ini box notepad */}
            </div>
            {/* ini box input */}
            <form id="form-input">
              <div className="col-12 p-1 border border-light border-1 rounded">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control bg-black text-light border-dark border-0 shadow-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="(+) Input here new notepad. . ."
                    onChange={(w) => this.setState({ judul: w.target.value })}
                    value={this.judul}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control bg-black text-light border-dark border-0 shadow-none"
                    placeholder="Input here for the detail of the notepad. . ."
                    id="notepad-input"
                    rows="2"
                    type="text"
                    value={this.note}
                    onChange={(w) => this.setState({ note: w.target.value })}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="m-3 btn btn-primary"
              >
                Submit
              </button>
            </form>
            {/* ini box input */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
