import { Button, TextField, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles({
  screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "auto",
  },
  messageWindow: {
    width: "50rem",
    height: "400px",
    overflow: "scroll",
    marginTop: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
  },
  leftBallon: {
    backgroundColor: "#ddd",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
    maxWidth: "60%",
    alignSelf: "flex-start",
  },
  rightBallon: {
    backgroundColor: "#03a9f4",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
    maxWidth: "60%",
    alignSelf: "flex-end",
  },
  textBox: {
    display: "flex",
    marginTop: "10px",
    width: "100%",
    justifyContent: "space-between",
  },
  field: {
    width: "100%",
  },
});

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
      <div className={classes.screen}>
        <div id="messageWindow" className={classes.messageWindow}>
          {myMessages.map((eachMessage, key) => {
            if (eachMessage.from === "bot") {
              return (
                <div key={key} className={classes.leftBallon}>
                  <div>
                    <b>{eachMessage.from}:</b> <span>{eachMessage.text}</span>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={key} className={classes.rightBallon}>
                  <div>
                    <b>{eachMessage.from}:</b> <span>{eachMessage.text}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <form onSubmit={sendMessage}>
          <Box className={classes.textBox} sx={{}}>
            <TextField
              className={classes.field}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              id="outlined-basic"
              placeholder="type a new message"
              variant="outlined"
            />
            <Box>
              <IconButton aria-label="send" size="large" type="submit">
                <Send fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </form>
      </div>
    </Box>
  );
}
export default Chat;
