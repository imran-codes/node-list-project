import React from "react";

function NodeList({ node, index }) {
  const [show, setShow] = React.useState(null);

  const handlePopUp = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="node-item" key={node.id}>
      <div className="node-item-inner" onClick={() => handlePopUp()}>
        <div className="node-item__title">{node.title}</div>
        <li></li>
        {/* TOOLTIP */}
        <div className={show ? "hover-display-show" : "hover-display-hide"}>
          <p>{node.title}</p>
          <p>{node.body}</p>
        </div>
      </div>
    </div>
  );
}

export default NodeList;
