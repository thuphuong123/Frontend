import { memo } from "react";
import "./style.scss";
const AboutUsPage = () => {
  return (
    <>
      <div class="container-aboutus">
        <div class="title">
          <h1>About Us</h1>
        </div>

        <div class="achievements">
          <h2>Achievements</h2>
          <div class="achievement-cards">
            <div className="row-achi-cards-1">
              <div class="card" onclick="window.location.href='#';">
                Achievement 1
              </div>
              <div class="card" onclick="window.location.href='#';">
                Achievement 2
              </div>
            </div>
            <div className="row-achi-cards-2">
              <div class="card" onclick="window.location.href='#';">
                Achievement 3
              </div>
              <div class="card" onclick="window.location.href='#';">
                Achievement 4
              </div>
            </div>
          </div>
        </div>

        <div class="goals">
          <h2>Our Goals</h2>
          <div class="goal-cards">
            <div className="row-goal-cards-1">
              <div class="card" onclick="window.location.href='#';">
                Goal 1
              </div>
              <div class="card" onclick="window.location.href='#';">
                Goal 2
              </div>
            </div>
            <div className="row-goal-cards-1">
              <div class="card" onclick="window.location.href='#';">
                Goal 3
              </div>
              <div class="card" onclick="window.location.href='#';">
                Goal 4
              </div>
            </div>
          </div>

          <div class="quote">
            <p>"Striving for excellence in everything we do."</p>
            <button class="join-btn">Join Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AboutUsPage);
