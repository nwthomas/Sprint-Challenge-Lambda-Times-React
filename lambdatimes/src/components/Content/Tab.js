import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tab ? "tab active-tab" : "tab"}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
