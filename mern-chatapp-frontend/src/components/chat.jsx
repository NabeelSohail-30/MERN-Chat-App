import { Button, TextField, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  messageScreen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "orange",
    width: "50%",
    margin: "auto",
    paddingTop: "20px",
    height: "100vh",
    alignItems: "center",
  },

  messageWindow: {
    width: "100%",
    margin: "auto",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },

  userMessage: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "20px 20px 0 20px",
    padding: "10px 20px",
    margin: "10px 0",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: "20px 20px 20px 0",
    padding: "10px 20px",
    margin: "10px 0",
    alignSelf: "flex-start",
  },
  messageBox: {
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    backgroundColor: "lightgrey",
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
    backgroundColor: "white",
    color: "#fff",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
}));

function Chat() {
  const classes = useStyles();
  const [myMessages, setMyMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const scrollToBottom = () => {
    let messageWindow = document.querySelector("#messageWindow");
    if (messageWindow) {
      messageWindow.scrollTo(0, messageWindow.scrollHeight);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [myMessages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    console.log("newMessage: ", newMessage);

    setMyMessages((prev) => {
      return [...prev, { text: newMessage, from: "user" }];
    });

    let response = await axios.post("http://localhost:5001/message", {
      query: newMessage,
    });

    setMyMessages((prev) => {
      return [
        ...prev,
        {
          text: response?.data?.message?.text,
          from: "bot",
        },
      ];
    });

    e.target.reset();
  };

  return (
    <Box>
      <div className={classes.messageScreen}>
        <div id="messageWindow" className={classes.messageWindow}>
          {myMessages.map((eachMessage, key) => {
            if (eachMessage.from === "bot") {
              return (
                <div key={key} className={classes.botMessage}>
                  <div>
                    <b>{eachMessage.from}:</b> <span>{eachMessage.text}</span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={key} className={classes.userMessage}>
                  <div>
                    <b>{eachMessage.from}:</b> <span>{eachMessage.text}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <form onSubmit={sendMessage} className={classes.messageBox}>
          <Box className={classes.textFieldContainer} sx={{}}>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              id="outlined-basic"
              placeholder="type a new message"
              variant="outlined"
            />
            <Box>
              <IconButton className={classes.sendButton}>
                <SendIcon />
              </IconButton>
              <IconButton>
                <InsertEmoticonIcon />
              </IconButton>
            </Box>
          </Box>
        </form>
      </div>
    </Box>
  );
}
export default Chat;
