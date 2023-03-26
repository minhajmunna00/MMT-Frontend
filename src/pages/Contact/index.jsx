import React from "react";
import contactImage1 from "../../assets/img/Nick_Rudd_MMT.png";
import contactImage2 from "../../assets/img/contact2.png";
import contactImage3 from "../../assets/img/contact3.png";

const Contact = () => {
  return (
    <div className="mt-32">
      <div className="bg-[#FF0044] h-[400px] flex items-center justify-center">
        <h1 className="text-6xl text-white font-bold">Get in touch</h1>
      </div>
      <div className="w-[70%] mx-auto my-16">
        <h1 className="text-4xl font-bold text-[#330523]">
          Specific enquiries
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="border border-2 border-red-600 text-center rounded-md py-10">
            <img
              className="w-[130px] h-[130px] mx-auto rounded-full"
              src={contactImage1}
              alt=""
            />
            <h2 className="mt-4 text-xl font-bold">Nick Rudd</h2>
            <p>Consultancy</p>
            <p>nick.rudd@mmtsigital.co.uk</p>
          </div>
          <div className="border border-2 border-red-600 text-center rounded-md py-10">
            <img
              className="w-[130px] h-[130px] mx-auto rounded-full"
              src={contactImage2}
              alt=""
            />
            <h2 className="mt-4 text-xl font-bold">Jamie Willey</h2>
            <p>New Business - UK</p>
            <p>jamie.willey@mmtdigital.co.uk</p>
          </div>
          <div className="border border-2 border-red-600 text-center rounded-md py-10">
            <img
              className="w-[130px] h-[130px] mx-auto rounded-full"
              src={contactImage3}
              alt=""
            />
            <h2 className="mt-4 text-xl font-bold">Troy Plant</h2>
            <p>New Business - US</p>
            <p>troy.plant@mmtdigital.com</p>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-4xl font-bold text-[#330523]">Contact details</h1>
          <div className="flex mt-4 text-[#330523]">
            <div className="w-[50%]">
              <h3 className="text-lg font-bold">
                London
                <span className="ml-4">
                  <i class="fa-solid fa-circle-chevron-down"></i>
                </span>
              </h3>
              <div className="flex my-8">
                <div>
                  <h4 className="font-bold text-md">Address</h4>
                  <p>34 Bow Street</p>
                  <p>London</p>
                  <p>WC2E 7AU</p>
                </div>
                <div className="ml-32">
                  <h4 className="font-bold text-md">Office Hours</h4>
                  <p>Monday to Friday</p>
                  <p>9:00am to 5:00pm</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-md">Email</h4>
                <p>hello@mmtdigital.co.uk</p>
              </div>
              <div className="my-8">
                <h4 className="font-bold text-md">Phone</h4>
                <p>0207 2425698</p>
              </div>
              <hr className="w-[80%] h-[2px] bg-black" />
              <h3 className="text-lg font-bold my-8">
                London
                <span className="ml-4">
                  <i class="fa-solid fa-circle-chevron-down"></i>
                </span>
              </h3>
              <hr className="w-[80%] h-[2px] bg-black" />
              <h3 className="text-lg font-bold my-8">
                London
                <span className="ml-4">
                  <i class="fa-solid fa-circle-chevron-down"></i>
                </span>
              </h3>
            </div>
            <div className="w-[50%]">
              <div className="w-[100%] flex justify-between">
                <div className="w-[48%]">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-2xl text-[#330523]">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div class="form-control w-full max-w-xs my-6">
                    <label class="label">
                      <span class="label-text text-2xl text-[#330523]">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="w-[48%]">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text text-2xl text-[#330523]">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div class="form-control w-full max-w-xs my-6">
                    <label class="label">
                      <span class="label-text text-2xl text-[#330523]">
                        Phone
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
              <div class="form-control w-[100%]">
                <label class="label">
                  <span class="label-text text-2xl text-[#330523]">
                    Enquiry Type
                  </span>
                </label>
                <select class="w-[100%] select select-bordered">
                  <option selected>general</option>
                </select>
              </div>
              <div class="form-control my-6">
                <label class="label">
                  <span class="label-text text-2xl text-[#330523]">
                    Message
                  </span>
                </label>
                <textarea class="textarea textarea-bordered h-24"></textarea>
              </div>
              <a
                href="https://www.linkedin.com/in/minhajmunna00"
                className="bg-[#FF0044] text-xl text-[#FFFFFF] px-8 py-2 rounded-lg"
                target="_blank"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
