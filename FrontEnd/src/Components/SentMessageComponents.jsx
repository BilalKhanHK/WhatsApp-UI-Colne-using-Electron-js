import React, { useState } from "react";
import { Input, Button, Space, Tooltip } from "antd";
import {
  SmileOutlined,
  AudioOutlined,
  SendOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

const SentMessageComponents = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      //   onSendMessage(message);
      setMessage(""); // Clear input field after sending
    }
  };

  const handleVoiceRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];
      setIsRecording(true); // Update state to indicate recording has started

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        // onSendVoice(audioUrl); // Call the function to send the voice note
        setIsRecording(false); // Update state to indicate recording has stopped
      };

      mediaRecorder.start();

      // Automatically stop recording after 5 seconds or stop manually
      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000);
    } catch (err) {
      console.error("Error accessing microphone: ", err);
    }
  };

  return (
    <div className="flex gap-4 p-3 w-full items-center justify-end">
      {isRecording ? (
        <>
          <Tooltip title="Emojis">
            <Button
              icon={<SmileOutlined />}
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
          </Tooltip>

          <div className=" w-full">
            <Input.TextArea
              className="italic "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              autoSize={{ minRows: 1, maxRows: 4 }}
              style={{
                scrollbarWidth: "none",
                border: "none",
              }}
            />
          </div>
        </>
      ) : (
        ""
      )}

      {message.length < 1 && (
        <Tooltip title="Record Voice">
          <Button icon={<AudioOutlined />} onClick={handleVoiceRecord} />
        </Tooltip>
      )}

      {message.length > 0 && (
        <Tooltip title="Send">
          <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
        </Tooltip>
      )}
    </div>
  );
};

export default SentMessageComponents;
