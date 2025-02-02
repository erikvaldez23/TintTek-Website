import { useState } from "react";
import { Box, Button, IconButton, TextField, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const { data } = await axios.post("http://localhost:5001/chat", { message: input });
            setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages([...newMessages, { sender: "bot", text: "Error connecting to AI" }]);
        }
    };

    return (
        <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
            {!open && (
                <IconButton
                    onClick={() => setOpen(true)}
                    sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}
                >
                    <ChatIcon />
                </IconButton>
            )}

            {open && (
                <Paper elevation={4} sx={{ width: 350, height: 500, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 1, bgcolor: "primary.main", color: "white", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">Chatbot</Typography>
                        <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
                        {messages.map((msg, index) => (
                            <Box key={index} sx={{ textAlign: msg.sender === "user" ? "right" : "left", mb: 1 }}>
                                <Typography
                                    sx={{
                                        display: "inline-block",
                                        p: 1,
                                        borderRadius: 2,
                                        bgcolor: msg.sender === "user" ? "primary.light" : "grey.300",
                                        color: msg.sender === "user" ? "white" : "black",
                                    }}
                                >
                                    {msg.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ccc" }}>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <IconButton onClick={sendMessage} color="primary">
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Paper>
            )}
        </Box>
    );
}
