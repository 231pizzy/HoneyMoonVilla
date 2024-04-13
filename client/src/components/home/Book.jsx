import React from "react";

export default function Book() {
  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date items-center justify-center flex" id="date1" data-target-input="nearest">
                      <h2 className="form-control datetimepicker-input text-primary md:ml-5 text-xl">Luxury ☆☆☆☆☆</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date items-center justify-center flex" id="date1" data-target-input="nearest">
                      <h2 className="form-control datetimepicker-input text-primary md:ml-5 text-xl">Elegance ☆☆☆☆☆</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date items-center justify-center flex" id="date1" data-target-input="nearest">
                      <h2 className="form-control datetimepicker-input text-primary md:ml-5 text-xl">Comfort ☆☆☆☆☆</h2>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date items-center justify-center flex" id="date1" data-target-input="nearest">
                      <h2 className="form-control datetimepicker-input text-primary md:ml-5 text-xl">Security ☆☆☆☆☆</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
