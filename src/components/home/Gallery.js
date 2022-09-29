import React from "react";

function Gallery() {
  return (
    <>
      <div className="flex flex-wrap justify-between py-[200px]">
        <img
          className="w-[336px] h-[400px] rounded-[40px] grayscale"
          src="https://images.unsplash.com/photo-1584778671969-cf6edbe34ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[650px] h-[400px] mt-20 rounded-[40px] grayscale"
          src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[380px] h-[300px] rounded-l-[40px] grayscale"
          src="https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[480px] h-[300px] rounded-[40px] grayscale mt-24"
          src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[480px] h-[600px] rounded-[40px] grayscale mt-24"
          src="https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[300px] h-[450px] rounded-[40px] grayscale "
          src="https://images.unsplash.com/photo-1524253860834-0e02422248bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </>
  );
}

export default Gallery;
