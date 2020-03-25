import React, { useMemo } from "react";
import Tab from "./Tab";
import List from "./List";
import Pane from "./Pane";
import Panel from "./Panel";

import TabsContext from "./TabsContext";

import "./styles.css";

const Tabs = props => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(props.activeTabIndex || 0);

  const tabsContextValue = useMemo(() => {
    return {
      activeTabIndex,
      setActiveTabIndex
    };
  }, [activeTabIndex, setActiveTabIndex]);

  return (
    <TabsContext.Provider value={tabsContextValue}>
      <div className="tabs">{props.children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Pane = Pane;
Tabs.Panel = Panel;

export default Tabs;
