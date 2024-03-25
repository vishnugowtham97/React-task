import React, { useState } from "react";
import "./Task_1.css";

const Task_1 = () => {
  // State for buckets
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [bucket2, setBucket2] = useState(["Item 5", "Item 6"]);

  const [selectedElements, setSelectedElements] = useState([]);

  // Function to handle adding element from bucket 1 to bucket 2
  const handleAddToBucket2 = () => {
    if (
      window.confirm(
        "Are you sure you want to add selected elements to bucket 2?"
      )
    ) {
      setBucket2((prevBucket2) => [...prevBucket2, ...selectedElements]);
      setBucket1((prevBucket1) =>
        prevBucket1.filter((element) => !selectedElements.includes(element))
      );
      setSelectedElements([]);
    }
  };

  // Function to handle removing element from bucket 2
  const handleRemoveFromBucket2 = () => {
    if (
      window.confirm(
        "Are you sure you want to add selected elements to bucket 2?"
      )
    ) {
      setBucket1((prevBucket1) => [...prevBucket1, ...selectedElements]);
      setBucket2((prevBucket2) =>
        prevBucket2.filter((element) => !selectedElements.includes(element))
      );
      setSelectedElements([]);
    }
  };

  // Functio to handle addind all elementa from bucket 1 to bucket 2
  const handleAddAllToBucket2 = () => {
    if (
      window.confirm(
        "Are you sure you want to add all the element to bucket 2?"
      )
    ) {
      setBucket2((prevBucket2) => [...prevBucket2, ...bucket1]);
      setBucket1([]);
    }
  };

  // Functio to handle addind all elementa from bucket 1 to bucket 2
  const handleRemoveAllFromBucket2 = () => {
    if (
      window.confirm(
        "Are you sure you want to add all the element to bucket 2?"
      )
    ) {
      setBucket1((prevBucket1) => [...prevBucket1, ...bucket2]);
      setBucket2([]);
    }
  };

  // Function to handle selecting an element
  const handleSelectElement = (element) => {
    setSelectedElements((prevSelected) => {
      if (prevSelected.includes(element)) {
        return prevSelected.filter((item) => item !== element);
      } else {
        return [...prevSelected, element];
      }
    });
  };

  return (
    <div>
      <h3>Element Transfer </h3>
      <div className="bucket-1">
        <h3 className="head">Bucket 1</h3>
        <p>Please select the elements to move to Bucket 2</p>
        <p>
          {bucket1.map((element, index) => (
            <p
              key={index}
              onClick={() => handleSelectElement(element)}
              className={selectedElements.includes(element) ? "selected" : ""}
            >
              <button className="btn-element">{element}</button>
            </p>
          ))}
        </p>
      </div>
      <div>
        <button onClick={handleAddToBucket2}>Add Selected to Bucket 2</button>
        <button onClick={handleRemoveFromBucket2}>
          Remove Selected from Bucket 2
        </button>
        <button onClick={handleAddAllToBucket2}>Add All to Bucket 2</button>
      </div>
      <div className="bucket-2">
        <h3 className="head">Bucket 2</h3>
        <p>Please select the element to remove from Bucket 2</p>
        <p>
          {bucket2.map((element, index) => (
            <p
              key={index}
              onClick={() => handleSelectElement(element)}
              className={selectedElements.includes(element) ? "selected" : ""}
            >
              <button className="btn-element">{element}</button>
            </p>
          ))}
        </p>
      </div>
      <div>
        <button onClick={handleRemoveAllFromBucket2}>
          Remove All from Bucket 2
        </button>
      </div>
    </div>
  );
};

export default Task_1;
