import React, { useState } from "react";
import "./NestedList.css";

const NestedList = ({ data }) => {
  // State to track expanded nodes
  const [expandedNodes, setExpandedNodes] = useState([]);

  // Function to toggle expansion of nodes
  const toggleNode = (nodeId) => {
    // If node is expanded, collapse it; otherwise, expand it
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((node) => node !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const renderNestedList = (nodes, level = 0) => {
    return (
      <ul className={`level-${level}`}>
        {nodes.map((node) => (
          <li key={node.id}>
            <button className="node" onClick={() => toggleNode(node.id)}>
              {node.children && node.children.length > 0 && (
                <span
                  className={`caret ${
                    expandedNodes.includes(node.id) ? "open" : ""
                  }`}
                ></span>
              )}
              <span className="icon"></span>
              <span className="name">{node.name}</span>
            </button>
            {expandedNodes.includes(node.id) &&
              node.children &&
              node.children.length > 0 &&
              renderNestedList(node.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };
  // Render the nested list component
  return <div className="nested-list">{renderNestedList(data)}</div>;
};

export default NestedList;
