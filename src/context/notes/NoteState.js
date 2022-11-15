import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial =[
        {
          "_id": "636b6af8af7a03d8a9968f7d",
          "user": "636b3ebd3ba584c5c883ac80",
          "title": "Physics",
          "description": "I have to finish capacitor by this week",
          "tag": "chapter-2",
          "date": "2022-11-09T08:55:20.596Z",
          "__v": 0
        },
        {
          "_id": "636b6b1b75b98d4841e8c1bf",
          "user": "636b3ebd3ba584c5c883ac80",
          "title": "Physics",
          "description": "I have to finish capacitor by this week",
          "tag": "chapter-2",
          "date": "2022-11-09T08:55:55.481Z",
          "__v": 0
        },
        {
          "_id": "636c5e36b70f076232570894",
          "user": "636b3ebd3ba584c5c883ac80",
          "title": "11th Chemistry",
          "description": "I have to finish GOC by this Monday",
          "tag": "chapter-2",
          "date": "2022-11-10T02:13:10.865Z",
          "__v": 0
        }
      ]
      const [notes, setNotes ]= useState(notesInitial)
 
  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
