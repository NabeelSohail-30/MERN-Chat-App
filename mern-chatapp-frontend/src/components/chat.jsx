import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  messageList: {
    width: "100%",
    height: "85%",
    overflowY: "auto",
    padding: "10px",
  },
  messageItem: {
    display: "flex",
    alignItems: "flex-start",
    margin: "10px 0",
  },
  userMessage: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "20px 20px 0 20px",
    padding: "10px 20px",
    maxWidth: "70%",
  },
  botMessage: {
    backgroundColor: theme.palette.secondary.light,
    color: "#333",
    borderRadius: "20px 20px 20px 0",
    padding: "10px 20px",
    maxWidth: "70%",
  },
  messageBox: {
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello, How can I help you today?",
    },
  ]);

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, { type: "user", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.messageList}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} className={classes.messageItem}>
              {message.type === "user" && (
                <ListItemAvatar>
                  <Avatar>U</Avatar>
                </ListItemAvatar>
              )}
              <ListItemText
                primary={message.text}
                className={
                  message.type === "user"
                    ? classes.userMessage
                    : classes.botMessage
                }
              />
              {message.type === "bot" && (
                <ListItemAvatar>
                  <Avatar>B</Avatar>
                </ListItemAvatar>
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
      <Paper elevation={3} className={classes.messageBox}>
        <TextField
          label="Enter message"
          variant="outlined"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={classes.textField}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          className={classes.sendButton}
        >
          Send
        </Button>
      </Paper>
    </div>
  );
};

export default Chat;
