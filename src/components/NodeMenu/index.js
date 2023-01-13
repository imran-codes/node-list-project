import React, { useState } from "react";
import { data } from "../../data";
import Dropdown from "../Dropdown";
import NodeList from "../NodeList";
import TextBox from "../TextBox";

function NodeMenu() {
  const [nodeData, setNodeData] = useState(data);
  const [totalNodes, setTotalNodes] = useState(data.length);
  const [editingNode, setEditingNode] = useState(data.length);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="main">
      <Dropdown
        title="Total number of nodes"
        totalNodes={totalNodes}
        editingNode={editingNode}
        setEditingNode={setEditingNode}
        isEditingNode={false}
      />
      <Dropdown
        title="Currently editing node"
        editingNode={editingNode}
        setEditingNode={setEditingNode}
        totalNodes={totalNodes}
        isEditingNode={true}
      />
      <TextBox
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
      />
      <div className="node-items">
        {nodeData?.map((node, i) => (
          <NodeList key={node.id} node={node} index={i} />
        ))}
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default NodeMenu;
