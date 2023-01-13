import React from "react";

function Dropdown({
  title,
  editingNode,
  setEditingNode,
  totalNodes,
  isEditingNode,
}) {
  const handleTotalNodes = () => {
    return Array(totalNodes)
      .fill()
      .map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ));
  };

  const handleEditingNodes = () => {
    return Array(editingNode)
      .fill()
      .map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ));
  };

  return (
    <div className="dropdown">
      <p>{title}: </p>
      {!isEditingNode ? (
        <select onChange={(e) => setEditingNode(Number(e.target.value))}>
          {handleTotalNodes()}
        </select>
      ) : (
        <select>{handleEditingNodes()}</select>
      )}
    </div>
  );
}

export default Dropdown;
