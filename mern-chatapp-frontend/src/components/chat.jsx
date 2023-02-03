import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    margin: "auto",
    backgroundColor: "lightblue",
  },

  messageWindow: {
    width: "40%",
    margin: "auto",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
  },

  messageScreen: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    backgroundColor: "#f5f5f5",
    width: "100%",
    margin: "auto",
    paddingTop: "20px",
    height: "100vh",
  },

  userMessage: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "20px 20px 0 20px",
    padding: "10px 20px",
    margin: "10px 0",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    borderRadius: "20px 20px 20px 0",
    padding: "10px 20px",
    margin: "10px 0",
    alignSelf: "flex-start",
  },
  messageBox: {
    width: "80%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
  },
  textFieldContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  textField: {
    flex: 1,
    marginRight: "10px",
  },
  sendButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Chat = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.messageWindow}>
          <List className={classes.messageScreen}>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="Hi, how are you today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="User"
                secondary="I'm doing well, thanks!"
                className={classes.userMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="That's great to hear! What can I help you with today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="Hi, how are you today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="User"
                secondary="I'm doing well, thanks!"
                className={classes.userMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="That's great to hear! What can I help you with today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="Hi, how are you today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="User"
                secondary="I'm doing well, thanks!"
                className={classes.userMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="That's great to hear! What can I help you with today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="Hi, how are you today?"
                className={classes.botMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="User"
                secondary="I'm doing well, thanks!"
                className={classes.userMessage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bot"
                secondary="That's great to hear! What can I help you with today?"
                className={classes.botMessage}
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Paper className={classes.messageBox}>
        <Grid container className={classes.textFieldContainer}>
          <TextField
            placeholder="Type your message here..."
            className={classes.textField}
            variant="outlined"
            size="small"
          />
          <IconButton className={classes.sendButton}>
            <SendIcon />
          </IconButton>
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
        </Grid>
      </Paper>
    </div>
  );
};

export default Chat;
