import React, {Component} from "react";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.css";
import "./App.css";

class App extends Component {
  render() {
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
                    <input placeholder={`e.g. "Burberry"`} id="client_name" type="text" className="validate"/>
                    <label htmlFor="client_name">Client Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder={`e.g. "Transparency"`} id="project_name" type="text" className="validate"/>
                    <label htmlFor="project_name">Project Name</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
