import React, {Component} from "react";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.css";
import "./App.css";
import {generateProjectDirString} from "./lib/gDrive";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client_name: '',
      project_name: ''
    };
  }

  handleClientChange(client_name) {
    this.setState({client_name});
  }

  handleProjectChange(project_name) {
    this.setState({project_name});
  }

  render() {

    const {
      client_name,
      project_name
    } = this.state;

    const project_dir = generateProjectDirString({
      client: client_name,
      project: project_name
    });

    return (
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">100 Shapes Scaffolder</a>
          </div>
        </nav>

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h1 className="header center orange-text">Let's start a project…</h1>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder={`e.g. "Burberry"`}
                           id="client_name"
                           type="text"
                           className="validate"
                           required="required"
                           onChange={(event) => {
                             const {value} = event.target;
                             this.handleClientChange(value);
                           }}
                           value={ client_name }/>
                    <label htmlFor="client_name">Client Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder={`e.g. "Transparency"`}
                           id="project_name"
                           type="text"
                           required="required"
                           className="validate"
                           onChange={(event) => {
                             const {value} = event.target;
                             this.handleProjectChange(value);
                           }}
                           value={ project_name }/>
                    <label htmlFor="project_name">Project Name</label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <h5>
                { project_dir }
              </h5>
              <h6>
                > Design : { client_name } : { project_name }
              </h6>
              <h6>
                > Proposal: { client_name } : { project_name }
              </h6>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <a className="waves-effect waves-light btn">Make Folders</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
