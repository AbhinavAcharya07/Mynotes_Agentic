import React, { useContext, useState } from "react";
import axios from "axios";
import { ModeSwitcher } from "../../contextProvider";
import "./Gemini.css";
import "./AiSearchShimmer.css";

const BackEndUrl = import.meta.env.VITE_API_SECRET;

const Gemini = () => {
  const { color } = useContext(ModeSwitcher);
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const display1 = () => {
    if (IsLoading && PayloadQn) return "PayloadContainerShimmer-Wte";
    if (!IsLoading && !PayloadQn) return "PayloadContainer";
    return "PayloadContainer-Wte";
  };
  const display2 = () => {
    if (IsLoading && PayloadQn) return "PayloadContainerShimmer-Blk";
    if (!IsLoading && !PayloadQn) return "PayloadContainer";
    return "PayloadContainer-Blk";
  };
  const displayAnswer1 = () => (PayloadQn ? "PayloadQn-Wte" : "PayloadQn");
  const displayAnswer2 = () => (PayloadQn ? "PayloadQn-Blk" : "PayloadQn");

  const main = async (question) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BackEndUrl}/askgemini`, {
        question,
      });
      setAnswer(response.data.responseData);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer(
        error.response?.data?.message ||
          "Sorry, I encountered an error while fetching the response."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const SubmitHandler = () => {
    const trimmedQuestion = Askquestion.trim();
    if (trimmedQuestion === "") return;
    setPayloadQn(trimmedQuestion);
    setAskquestion("");
    setAnswer(null);
    main(trimmedQuestion);
  };

  return (
    <div className={color === "white" ? "Gemini-Wte" : "Gemini-Blk"}>
      <div className={color === "white" ? displayAnswer1() : displayAnswer2()}>
        <p className={color === "white" ? "Answer-Wte" : "Answer-Blk"}>
          {PayloadQn}
        </p>
      </div>
      <div className={color === "white" ? display1() : display2()}>
        <p className={color === "white" ? "Answer-Wte" : "Answer-Blk"}>
          {Answer}
        </p>
      </div>
      <div
        className={color === "white" ? "InputWrapper-Wte" : "InputWrapper-Blk"}
      >
        <textarea
          className="dynamicTextArea"
          placeholder="Ask AI"
          onChange={(event) => setAskquestion(event.target.value)}
          value={Askquestion}
        ></textarea>
        <button className="send-btn" type="button" onClick={SubmitHandler}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default Gemini;