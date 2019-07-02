import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route component={History} path="/about/history" />
            <Route component={Contact} path="/about/contact" />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About Our University: Mission Statement</h1>
                  <h2>Invictus - William Earnest Henley</h2>
                  <p>
                    Out of the night that covers me, Black as the pit from pole
                    to pole, I thank whatever gods may be For my unconquerable
                    soul. In the fell clutch of circumstance I have not winced
                    nor cried aloud. Under the bludgeonings of chance My head is
                    bloody, but unbowed. Beyond this place of wrath and tears
                    Looms but the Horror of the shade, And yet the menace of the
                    years Finds and shall find me unafraid. It matters not how
                    strait the gate, How charged with punishments the scroll, I
                    am the master of my fate, I am the captain of my soul.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
