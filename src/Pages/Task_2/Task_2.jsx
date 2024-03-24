import React from "react";
import NestedList from "../../Component/NestedList/NestedList";

const Task_2 = () => {
  const data = [
    {
      id: 1,
      name: "Desktop",
      children: [
        {
          id: 2,
          name: "Documents",
          children: [
            { id: 3, name: "Report.docx" },
            { id: 4, name: "Presentation.pptx" },
            { id: 5, name: "Photos" },
            { id: 6, name: "Videos" },
          ],
        },
        {
          id: 7,
          name: "Downloads",
          children: [
            { id: 8, name: "Software" },
            { id: 9, name: "Music" },
            { id: 10, name: "Movies" },
            { id: 11, name: "Games" },
          ],
        },
        {
          id: 12,
          name: "Movies",
          children: [
            { id: 13, name: "Tamil" },
            { id: 14, name: "English" },
            { id: 15, name: "Malayalam" },
            { id: 16, name: "Telugu" },
          ],
        },
        {
          id: 17,
          name: "Tasks",
          children: [
            { id: 18, name: "Urgent" },
            { id: 19, name: "Pending" },
            { id: 20, name: "Completed" },
            { id: 21, name: "On Hold" },
          ],
        },
      ],
    },
    {
      id: 22,
      name: "Games",
      children: [
        {
          id: 23,
          name: "Sports",
          children: [
            { id: 24, name: "Cricket" },
            { id: 27, name: "Football" },
            { id: 25, name: "Kabadi" },
            { id: 26, name: "Tennis" },
          ],
        },
        {
          id: 28,
          name: "Simulation",
          children: [
            { id: 29, name: "Bus Simulation" },
            { id: 30, name: "Ship Simulation" },
            { id: 31, name: "Aeroplane Simulation" },
            { id: 32, name: "War Simulation" },
          ],
        },
        {
          id: 33,
          name: "Race",
          children: [
            { id: 34, name: "Racing thunder" },
            { id: 35, name: "NFS" },
            { id: 36, name: "Real Racing" },
            { id: 37, name: "Biker" },
          ],
        },
        {
          id: 38,
          name: "Board",
          children: [
            { id: 39, name: "Carrom" },
            { id: 40, name: "Chess" },
            { id: 41, name: "Buisness Card" },
            { id: 42, name: "Ludo" },
          ],
        },
      ],
    },
    {
      id: 43,
      name: "Movies",
      children: [
        {
          id: 44,
          name: "Fun-Comedy",
          children: [
            { id: 45, name: "Komali" },
            { id: 46, name: "TamilPadam" },
            { id: 47, name: "Kick" },
            { id: 48, name: "DD" },
          ],
        },
        {
          id: 49,
          name: "Drama",
          children: [
            { id: 50, name: "Jailer" },
            { id: 51, name: "Leo " },
            { id: 52, name: "Dada" },
            { id: 53, name: "Veeran" },
          ],
        },
        {
          id: 54,
          name: "Action",
          children: [
            { id: 55, name: "Action" },
            { id: 56, name: "Kgf" },
            { id: 57, name: "Salar" },
            { id: 58, name: "Miller" },
          ],
        },
        {
          id: 59,
          name: "Sci-fi",
          children: [
            { id: 60, name: "DD Returns" },
            { id: 61, name: "Adiyae" },
            { id: 62, name: "New" },
            { id: 63, name: "Endhrian" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Nested List Component</h1>
      <h3>click the item view </h3>
      <NestedList data={data} />
    </div>
  );
};

export default Task_2;
