import React, { useState } from "react";
import "./Gemini.css";
import "./AiSearchShimmer.css";
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_SECRET;
const ai = new GoogleGenAI({ apiKey: apiKey });

const GeminiMain = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const main = async (question) => {
    setIsLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [question],
      });
      setAnswer(response.text);
      console.log(response.text);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer("Sorry, I encountered an error while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };

  const SubmitHandler = (e) => {
    const trimmedQuestion = Askquestion.trim();
    if (!trimmedQuestion) return;

    setPayloadQn(trimmedQuestion);
    setAskquestion("");
    setAnswer(null);
    main(trimmedQuestion);
  };

  return (
    <div className="Gemini">
      <div className="PayloadQn">
        <p>{PayloadQn}</p>
      </div>
      <div
        className={IsLoading ? "PayloadContainerShimmer" : "PayloadContainer"}
      >
        <p>{Answer}</p>
      </div>
      <div className="InputWrapper">
        <textarea
          className="dynamicTextArea"
          placeholder="Ask Gemini"
          onChange={(e) => setAskquestion(e.target.value)}
          value={Askquestion}
        ></textarea>
        <button className="send-btn" type="submit" onClick={SubmitHandler}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default GeminiMain;