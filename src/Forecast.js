import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="seven-day-container">
        <div className="sev-day-rowone">
          <div className="row">
            <div className="col-sm-2">
              <div className="row">
                <p className="day-two days">TUE</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="fas fa-cloud icon-two"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-two">
                  <span className="temperature all-temps">30</span>°
                  <span className="units" id="unit-two">
                    C
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <p className="day-three days">WED</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="fas fa-sun icon-three"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-three">
                  <span className="temperature all-temps">31</span>°
                  <span className="units" id="unit-three">
                    C
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <p className="day-four days">THU</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="fas fa-cloud-sun-rain icon-four"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-four">
                  <span className="temperature all-temps">34</span>°
                  <span className="units" id="unit-four">
                    C
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <p className="day-five days">FRI</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="fas fa-cloud-showers-heavy icon-five"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-five">
                  <span className="temperature all-temps">32</span>°
                  <span className="units" id="unit-five">
                    C
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <p className="day-six days">SAT</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="far fa-snowflake icon-six"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-six">
                  <span className="temperature all-temps">-10</span>°
                  <span className="units" id="unit-six">
                    C
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <p className="day-seven days">SUN</p>
              </div>
              <div className="row">
                <span className="other-icons">
                  <i className="fas fa-cloud-rain icon-seven"></i>
                </span>
              </div>
              <div className="row">
                <p className="temp-seven">
                  <span className="temperature all-temps">28</span>°
                  <span className="units" id="unit-seven">
                    C
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
