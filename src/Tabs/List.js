import React from "react";

const List = props => {
  return (
    <div className="tab-list">
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          tabIndex: index
        });
      })}
    </div>
  );
};

export default List;
