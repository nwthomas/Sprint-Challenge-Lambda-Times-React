import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        props.tabs.map((tab, index) => {
          console.log(tab);
          return (
            <Tab
              tab={tab}
              key={`tab ${index}`}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
