const MODEL = "openai/gpt-oss-20b";

const askGemini = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || !question.trim()) {
      return res
        .status(400)
        .send({ success: false, message: "Question is required" });
    }

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant. You provide accurate and comprehensive definition. Your response MUST be a single, cohesive paragraph of exactly 4 to 5 lines and with examples of exactly 2-3 lines in another paragraph. Do not use lists or subheadings.",
            },
            { role: "user", content: question },
          ],
        }),
      }
    );

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      console.log(data);
      return res.status(groqResponse.status).send({
        success: false,
        message: data?.error?.message || "AI request failed",
      });
    }

    res.send({
      success: true,
      responseData: data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

export { askGemini };