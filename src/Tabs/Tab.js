import React, { useContext } from "react";

import TabsContext from "./TabsContext";

const Tab = props => {
  const context = useContext(TabsContext);

  const handleOnClick = () => {
    context.setActiveTabIndex(props.tabIndex);
  };

  const isActive =
    props.tabIndex === context.activeTabIndex
      ? "tabs-tab--active"
      : "tabs-tab--inactive";
  const isDisabled = props.disabled && "tabs-tab--disabled";

  return (
    <div
      className={`tabs-tab ${isActive} ${isDisabled} ${props.isDisabled}`}
      onClick={handleOnClick}
    >
      {props.tabIndex} {props.children}
    </div>
  );
};

export default React.memo(Tab);
