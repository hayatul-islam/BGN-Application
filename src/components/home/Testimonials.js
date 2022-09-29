import React from "react";
import Testimonial from "./Testimonial";

// fake data
const datas = [
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "I was planning my wedding from out of state so I had limited time to meet with vendors. For the months leading up to my wedding, I communicated with Bryan only on email yet I was completely confident in his abilities, based on this thorough communication. We spoke on the phone a few days before the wedding and confirmed the timeline, the playlist, and name pronunciation. ",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
];

function Testimonials() {
  return (
    <>
      <div className="py-12">
        <div className="space-y-2 py-12">
          <img
            src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
            alt=""
          />
          <img
            src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
            alt=""
          />
        </div>
        <div className="px-[70px] py-12">
          <div className="grid grid-cols-3 gap-12">
            {datas?.map((data, i) => (
              <Testimonial key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
