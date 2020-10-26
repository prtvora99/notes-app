import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { ChildWrapper } from "../../hoc/wrapper";


const NotesCard = ({ title, data, time, index, active, onClick }) => {
    return (
        <div className={`card ${active ? 'selected' : ''}`} onClick={() => onClick(index)}>
            <h5>{title || ''}</h5>

            <div className="data">
                {data || ""}
            </div>

            <p className="time">Last Updated: <span>{time}</span></p>
        </div>
    )
}

const SideBar = () => {
    const { notes, handleSelection, selected } = useContext(AppContext);
    return (
        <ChildWrapper>
            {notes && notes.map((note, index) => <NotesCard onClick={handleSelection} index={index} key={'note-' + index}
                active={selected === index}    {...note} />)}
        </ChildWrapper>
    )
}

export default SideBar;