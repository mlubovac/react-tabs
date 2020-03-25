import React, { useContext } from "react";
import TabsContext from './TabsContext';

const Panel = props => {

  const {
    activeTabIndex
  } = useContext(TabsContext);

  return (
    <div className="tabs-panel">
      {React.Children.map(
        props.children,
        (child, index) => index === activeTabIndex && child
      )}
    </div>
  );
};

export default Panel;
