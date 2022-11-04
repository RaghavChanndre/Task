import React from "react";
import "./page.css";

export default function Page() {
  return (
    <>
      <div className="header">
        <div className="pink">
          <div className="row card-holder ">
            <div className="col-md-2 C1">
            <i class="fa-solid fa-lightbulb"></i>
              <h1 className="card-head">STRATEGY</h1>
              <p className="card-para">
                <em>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </em>
              </p>
              <h1 className="card-head2">MORE</h1>
            </div>

            {/* ============================================================================================ */}

            <div className="col-md-2 C2">
            <i class="fa-solid fa-bullhorn"></i>
              <h1 className="card-head">STRATEGY</h1>
              <p className="card-para">
                <em>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </em>
              </p>
              <h1 className="card-head2">MORE</h1>
            </div>

            {/* ============================================================================================ */}

            <div className="col-md-2 C1">
            <i class="fa-brands fa-ethereum"></i>
              <h1 className="card-head">STRATEGY</h1>
              <p className="card-para">
                <em>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </em>
              </p>
              <h1 className="card-head2">MORE</h1>
            </div>

            {/* ============================================================================================ */}

            <div className="col-md-2 C2">
            <i class="fa-solid fa-headphones"></i>
              <h1 className="card-head">STRATEGY</h1>
              <p className="card-para">
                <em>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </em>
              </p>
              <h1 className="card-head2">MORE</h1>
            </div>

            {/* ============================================================================================ */}
          </div>

          <div className="black">
            <div className="col-6 left-bg">
              <h1 className="left-head">
                We advise organizations in value creation strategies
              </h1>
            </div>
            <div className="col-md-6 right-bg">
              <div className="para-div">
              <p className="right-para">
                Massa ultricies mi quis hendrerit. Ac ut consequat semper
                viverra nam. Libero id faucibus nisl tincidunt eget nullam non
                nisi est. Arcu odio ut sem nulla. Amet tellus cras adipiscing
                enim. Et magnis dis parturient montes. Imperdiet sed euismod
                nisi porta.
              </p>
            </div>
           
             <div className="btn">
            LEARN MORE
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
