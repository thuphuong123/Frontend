import { memo, useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const MBTIPage = () => {
  const [personalityTypes, setPersonalityTypes] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // check data đang tải

  const fetchPersonalityData = async () => {
    //giả lập data để test UI
    const data = [
      {
        title: "INTJ",
        description:
          "Có khả năng tư duy sắc bén và luôn tìm cách cải tiến mọi thứ.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "INTP",
        description:
          "Tư duy logic, thích khám phá lý thuyết và giải quyết vấn đề phức tạp.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ENTJ",
        description:
          "Lãnh đạo quyết đoán, tập trung vào mục tiêu và tổ chức hiệu quả.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ENTP",
        description:
          "Thích thử thách, sáng tạo và luôn có những ý tưởng mới mẻ.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "INFJ",
        description: "Nhạy cảm, sâu sắc và luôn tìm cách giúp đỡ người khác.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "INFP",
        description:
          "Lý tưởng, quan tâm đến cảm xúc và có đam mê trong việc giúp đỡ thế giới.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ENFJ",
        description:
          "Quan tâm đến người khác, có khả năng lãnh đạo và truyền cảm hứng.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ENFP",
        description: "Sáng tạo, nhiệt huyết và luôn tìm kiếm những cơ hội mới.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ISTJ",
        description: "Cẩn thận, thực tế và luôn thực hiện nhiệm vụ đúng cách.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ISFJ",
        description: "Tận tâm, chu đáo và luôn hỗ trợ những người xung quanh.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ESTJ",
        description:
          "Quản lý tốt, có tổ chức và luôn tìm cách thực hiện công việc hiệu quả.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ESFJ",
        description: "Đồng cảm, quan tâm và luôn làm việc vì lợi ích của nhóm.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ISTP",
        description:
          "Thực tế, độc lập và giỏi trong việc giải quyết vấn đề ngay lập tức.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ISFP",
        description: "Nhạy cảm, nghệ thuật và thích sống trong khoảnh khắc.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ESTP",
        description: "Năng động, thích thử thách và tìm kiếm cơ hội hành động.",
        image: "https://via.placeholder.com/170x248",
      },
      {
        title: "ESFP",
        description:
          "Vui vẻ, hướng ngoại và thích tận hưởng cuộc sống đầy màu sắc.",
        image: "https://via.placeholder.com/170x248",
      },
    ];

    setPersonalityTypes(data);
  };

  useEffect(() => {
    fetchPersonalityData();
  }, []);

  const handleTestButtonClick = () => {
    navigate(ROUTERS.USER.MBTIQuestions);
  };

  //  // ở đây để gọi data , nhớ tải axios khi dùng
  //  const fetchData = async () => {
  //   try {
  //     const response = await axios.get(""); // api url
  //     setPersonalityTypes(response.data);  // save data to state
  //     setLoading(false);  // data load done
  //   } catch (error) {
  //     console.error("Không thể tải dữ liệu tính cách MBTI", error);
  //     setLoading(false);  // stop state when erroe
  //   }
  // };

  // // khi ui dc render lần đầu, dùng cái dưới để gọi api
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="mbti-container">
      <div className="header">
        <h1 className="header-title">TRẮC NGHIỆM TÍNH CÁCH MBTI</h1>
        <p className="header-subtitle">Khám phá tiềm năng bản thân</p>
        <button className="test-button" onClick={handleTestButtonClick}>
          Làm bài test
        </button>
      </div>

      <div className="personality-section mbti-animate">
        {personalityTypes.length > 0 ? (
          <div className="personality-list">
            {/* Các phần tử trong danh sách */}
            {personalityTypes.map((type, index) => (
              <div key={index} className="personality-card">
                <div className="card-background"></div>
                <img
                  className="personality-image"
                  src={type.image} // Dữ liệu từ API
                  alt={type.title}
                />
                <h2 className="personality-title">{type.title}</h2>
                <p className="personality-description">{type.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </div>

      <div className="explanation-section">
        <h2 className="section-title">Trắc nghiệm tính cách MBTI là gì?</h2>
        <p className="section-text">
          Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) là một phương
          pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách
          con người. Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức
          thế giới xung quanh và ra quyết định cho mọi vấn đề trong cuộc sống.
          <br />
          <br />
          Hiện nay, MBTI được coi là công cụ khám phá tính cách phổ biến và
          chính xác nhất trên thế giới. Trong công việc, MBTI giúp mỗi cá nhân
          có thêm thông tin để định hướng và lựa chọn nghề nghiệp. Nhà tuyển
          dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù hợp của ứng viên
          với vị trí công việc và văn hoá doanh nghiệp.
        </p>
      </div>

      <div className="classification-section">
        <h2 className="section-title">Cách phân loại 16 nhóm tính cách</h2>
        <p className="section-text">
          Trắc nghiệm MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên quan đến
          những vấn đề cơ bản trong cuộc sống với các đáp án sẵn có để bạn lựa
          chọn. Tổng kết bài trắc nghiệm sẽ cho ra kết quả đánh giá bạn là người
          có tính cách như thế nào thông qua phương pháp phân loại.
          <br />
          <br />
          Sự phân loại này dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm là một cặp
          lưỡng phân của 8 yếu tố chức năng, nhận thức sau:
        </p>
        <div className="functional-groups">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="functional-card">
              <div className="card-overlay"></div>
              <img
                className="functional-image"
                src="https://via.placeholder.com/623x254"
                alt="Decision Making"
              />
              <p className="functional-description">Text</p>
            </div>
          ))}
        </div>
        <div className="functional-groups">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="functional-card">
              <div className="card-overlay"></div>
              <img
                className="functional-image"
                src="https://via.placeholder.com/623x254"
                alt="Decision Making"
              />
              <p className="functional-description">Text</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MBTIPage);
