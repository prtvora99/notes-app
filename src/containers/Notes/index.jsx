import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../../context/context";
import { ChildWrapper } from "../../hoc/wrapper";
import ActionBar from "./action-bar";
import SideBar from "./sidebar";

const notesData = [{
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
},
{
    title: "ABHGH",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "PERTY",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "VBNM",
    data: "Here is the ata",
    time: "2:30PM"
},
{
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
},
{
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
}, {
    title: "Hello",
    data: "Here is the ata",
    time: "2:30PM"
}

]


const Notes = () => {

    const [notes, handleNotes] = useState(notesData);
    const [selected, handleSelection] = useState(0);

    const lowerCaseParse = (text) => text && text.toString().toLowerCase();

    // handle notes search
    const handleNotesFilter = (e) => {
        const searchStr = lowerCaseParse(e.target.value);
        if (!searchStr) {
            handleNotes(notesData);
            return;
        }
        const filtered = notes && notes.filter((note) => (lowerCaseParse(note.title).indexOf(searchStr) > -1) ||
            (lowerCaseParse(note.data).indexOf(searchStr) > -1));
        filtered.length > 0 ? handleNotes(filtered) : handleNotes(notesData);
    }

    useEffect(() => {
        const tarea = document.getElementById("notes");
        const selectedNote = notes[selected];
        if (tarea) {
            tarea.value = `${selectedNote.title} ${selectedNote.data}`;
        }
    }, [selected]);

    return (
        <AppContext.Provider value={{
            notes,
            selected,
            handleSelection
        }}>
            <ChildWrapper>
                <ActionBar handleSearch={handleNotesFilter} />
                <div className="main">
                    <div className="sidebar">
                        <SideBar />
                    </div>
                    <div className="content">

                        <textarea name="" id="notes" cols="30" rows="10">

                        </textarea>

                        {/* <h2>{notes && notes[selected].title}</h2>
                        <pre>{notes && notes[selected].title}</pre> */}
                    </div>
                </div>
            </ChildWrapper>
        </AppContext.Provider>
    )
}

export default Notes;