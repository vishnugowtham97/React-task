import React, { useState } from "react";
import "./NestedList.css";

const NestedList = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const toggleNode = (nodeId) => {
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

  return <div className="nested-list">{renderNestedList(data)}</div>;
};

export default NestedList;
