import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabsClass = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topic = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsClass>
      <Topic>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((tab, index) => {
          return (
            <Tab
              tab={tab}
              key={`tab ${index}`}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          );
        })}
      </Topic>
    </TabsClass>
  );
};

Tabs.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
