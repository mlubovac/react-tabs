import React from "react";
import Card from "./Card";
import Tabs from "./Tabs";

import "./App.css";

export default function App() {
  return (
    <div>
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Tabs activeTabIndex={3}>
            <Tabs.List>
              <Tabs.Tab>
                <span role="img" aria-label="panda face">
                  🐼
                </span>
              </Tabs.Tab>
              <Tabs.Tab>
                <span role="img" aria-label="frog face">
                  🐸
                </span>
              </Tabs.Tab>
              <Tabs.Tab>
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
              </Tabs.Tab>
              <Tabs.Tab>
                <span role="img" aria-label="fox face">
                  🦊
                </span>
              </Tabs.Tab>
              <Tabs.Tab>
                <span role="img" aria-label="squid">
                  🦑
                </span>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel>
              <Tabs.Pane>
                <span role="img" aria-label="pandas">
                  🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼🐼
                </span>
              </Tabs.Pane>
              <Tabs.Pane>
                <span role="img" aria-label="frogs">
                  🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
                </span>
              </Tabs.Pane>
              <Tabs.Pane>
                <span role="img" aria-label="unicorns">
                  🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄
                </span>
              </Tabs.Pane>
              <Tabs.Pane>
                <span role="img" aria-label="foxes">
                  🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊🦊
                </span>
              </Tabs.Pane>
              <Tabs.Pane>
                <span role="img" aria-label="squids">
                  🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑🦑
                </span>
              </Tabs.Pane>
            </Tabs.Panel>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}
