import { memo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";

const MBTIQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  // // ở đây để load câu hỏi từ database lên
  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       //thả url api trong ""
  //       const response = await fetch("");
  //       const data = await response.json();
  //       setQuestions(data);
  //     } catch (error) {
  //       console.error("Lỗi khi tải câu hỏi:", error);
  //     }
  //   };

  //   fetchQuestions();
  // }, []);

  //cai nay de test UI
  useEffect(() => {
    const fetchQuestions = async () => {
      // Giả lập dữ liệu trả về từ API
      const data = [
        {
          id: 1,
          question: "Câu hỏi 1: Bạn có thích học React không?",
          options: ["Có", "Không"],
        },
        {
          id: 2,
          question: "Câu hỏi 2: Bạn đã từng lập trình trước đây chưa?",
          options: ["Có", "Không"],
        },
        {
          id: 3,
          question: "Câu hỏi 3: Bạn thích làm việc với frontend hay backend?",
          options: ["Frontend", "Backend"],
        },
        {
          id: 4,
          question: "Câu hỏi 4: Bạn thích học sử dụng Git và Github?",
          options: ["Có", "Không"],
        },
      ];
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <h1 className="title1_quiz">Bài Trắc Nghiệm</h1>
        <ul className="question-list">
          {questions.map((q) => (
            <li key={q.id} className="question-item">
              <h3>{q.question}</h3>
              {q.options.map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleAnswerChange(q.id, option)}
                  />
                  {option}
                </label>
              ))}
            </li>
          ))}
        </ul>
        <div>
          {" "}
          <button className="submit-btn">Xem kết quả</button>
        </div>
      </div>
    </div>
  );
};

export default memo(MBTIQuestions);
