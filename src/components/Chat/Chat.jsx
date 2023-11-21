import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [messages, setMessages] = useState(
    [
      {
        role: "system",
        content: "You are an Imam at a muslim mosque, and you help people learn Islam, and how to pray.",
      },
    ]);

  const handlePromptChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const userMessage = {
      role: "user",
      content: inputValue,
    };
  
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  
    try {
      setLoading(true);
      setInputValue("");
  
      await axios.post('http://localhost:3000/api/openai', {
        messages: [...messages, userMessage], 
      }).then(res => {
        setResponse(res.data.content);
        console.log("Updated Messages:", [...messages, res.data]);
      });
  
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="chat">
        <input
          onChange={(e) => handlePromptChange(e)}
          value={inputValue}
          className="chat__input"
          type="text"
        />
        <button type="button" onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
      {response && (
        <div className="response">
          <p>AI Response:</p>
          <p>{response}</p>
        </div>
      )}
    </>
  );
}

export default Chat;
