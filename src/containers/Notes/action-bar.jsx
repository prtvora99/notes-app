import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

import "../../styles/notes.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ActionBar = (props) => {
    const classes = useStyles();
    const handleSearch = (e) => props.handleSearch(e);

    return (
        <div className="header">
            <div className={classes.root}>
                <TextField id="standard-basic" label="Search Notes.." onChange={handleSearch} />
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab size="small" color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div>
        </div>
    )
}

export default ActionBar;