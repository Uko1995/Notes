import Button from "./Button";
import { useState } from "react";

const initialNotes = [
  {
    id: 1,
    title: "First note",
    content: "This is the first note",
  },
  {
    id: 2,
    title: "Second note",
    content: "This is the second note",
  },
];

export default function Main() {
  const [isSelected, setIsSelected] = useState(null);

  const [notes, setNotes] = useState(initialNotes);
  const handleSetNotes = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
    setIsSelected(note.id);
  };

  const handleToggleOpen = (id) => {
    setIsSelected((prevId) => (prevId === id ? null : id));
  };

  const selectedNote = notes.find((note) => note.id === isSelected);
  return (
    <div className="container">
      <ul className="side-bar">
        {notes.map((note) => (
          <ItemHeader
            key={note.id}
            title={note.title}
            content={note.content}
            isSelected={isSelected === note.id}
            onToggleOpen={() => handleToggleOpen(note.id)}
          />
        ))}
        <AddNew onToggleOpen={() => setIsSelected("new")} />
      </ul>
      {isSelected && (
        <div className="main-body">
          <ItemBody
            note={selectedNote}
            onSetNote={handleSetNotes}
            onToggleOpen={handleToggleOpen}
          />
        </div>
      )}
    </div>
  );
}

function ItemHeader({ title, isSelected, onToggleOpen }) {
  return (
    <div className="item-header">
      <h2>{title}</h2>
      <button onClick={onToggleOpen}>{isSelected ? "Close" : "Open"}</button>
    </div>
  );
}

function AddNew({ onToggleOpen }) {
  return (
    <div className="add-new" onClick={onToggleOpen}>
      <h3>🆕 Add new</h3>
    </div>
  );
}

function ItemBody({ onSetNote, onToggleOpen, note }) {
  const [titleInput, setTitleInput] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const addNewNote = () => {
    if (!titleInput && !content) return;

    const newNote = {
      id: crypto.randomUUID(),
      title: titleInput,
      content: content,
    };

    onSetNote(newNote);
    setTitleInput("");
    setContent("");
    onToggleOpen();
  };

  return (
    <>
      <div className="item-body">
        <div className="label">
          <label>What is the title of this note</label>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Enter your note here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addNewNote}>Save</button>
      </div>
    </>
  );
}

/*import Button from "./Button";
import { useState } from "react";

const initialNotes = [
  {
    id: 1,
    title: "First note",
    content: "This is the first note",
  },
  {
    id: 2,
    title: "Second note",
    content: "This is the second note",
  },
];

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("null");

  const [notes, setNotes] = useState(initialNotes);
  const handleSetNotes = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const handleIsSelected = (id) => {
    setIsSelected((prevId) => (prevId === id ? "null" : id));
  };

  const handleToggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <ul className="side-bar">
        {notes.map((note) => (
          <ItemHeader
            key={note.id}
            title={note.title}
            content={note.content}
            isSelected={isSelected === note.id}
            onIsSelected={() => handleIsSelected(note.id)}
          />
        ))}
        <AddNew onToggleOpen={handleToggleOpen} />
      </ul>
      {isOpen && (
        <div className="main-body">
          <ItemBody
            onSetNote={handleSetNotes}
            onToggleOpen={handleToggleOpen}
          />
        </div>
      )}
    </div>
  );
}

function ItemHeader({ title, isSelected, onIsSelected }) {
  return (
    <div className="item-header">
      <h2>{title}</h2>
      <button onClick={onIsSelected}>{!isSelected ? "Open" : "Close"}</button>
    </div>
  );
}

function AddNew({ onToggleOpen }) {
  return (
    <div className="add-new" onClick={onToggleOpen}>
      <h3>🆕 Add new</h3>
    </div>
  );
}

function ItemBody({ onSetNote, onToggleOpen }) {
  const [titleInput, setTitleInput] = useState("");
  const [content, setContent] = useState("");

  const addNewNote = () => {
    if (!titleInput && !content) return;

    const newNote = {
      id: crypto.randomUUID(),
      title: titleInput,
      content: content,
    };

    onSetNote(newNote);
    setTitleInput("");
    setContent("");
    onToggleOpen();
  };

  return (
    <>
      <div className="item-body">
        <div className="label">
          <label>What is the title of this note</label>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Enter your note here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addNewNote}>Save</button>
      </div>
    </>
  );
}
*/
