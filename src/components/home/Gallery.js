import React from "react";

function Gallery() {
  return (
    <>
      <div className="flex flex-wrap pl-2 md:pl-6 justify-between py-12 xl:py-[200px]">
        <img
          className="w-[140px] h-[210px] md:w-[165px] md:h-[315px] lg:w-[230px] lg:h-[440px] xl:w-[336px] xl:h-[400px] rounded-[10px] xl:rounded-[40px] grayscale"
          src="https://images.unsplash.com/photo-1584778671969-cf6edbe34ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[180px] h-[160px] sm:w-[275px] sm:h-[214px] md:w-[330px] md:h-[250px] lg:w-[455px] lg:h-[350px] xl:w-[650px] xl:h-[400px] mt-20 rounded-[10px] xl:rounded-[40px] grayscale"
          src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[150px] h-[110px] sm:w-[180px] sm:h-[130px] md:w-[250px] md:h-[200px] lg:w-[280px] lg:h-[210px] xl:w-[380px] xl:h-[300px] rounded-[10px] xl:rounded-l-[40px] mt-28 sm:mt-0 grayscale"
          src="https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[165px] h-[200px] sm:h-[165px] sm:w-[200px] md:h-[190px] md:w-[240px] lg:h-[260px] lg:w-[320px]  xl:w-[480px] xl:h-[300px] rounded-[10px] grayscale mt-8 sm:mt-12 md:mt-24"
          src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[205px] h-[200px] sm:w-[205px] sm:h-[340px] md:w-[250px] md:h-[416px] lg:w-[330px] lg:h-[550px] xl:w-[480px] xl:h-[600px] rounded-[10px] grayscale mt-4 sm:mt-12 md:mt-24"
          src="https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="w-[108px] h-[185px] md:w-[195px] md:h-[307px] xl:w-[300px] xl:h-[450px] rounded-[10px] grayscale mt-8"
          src="https://images.unsplash.com/photo-1524253860834-0e02422248bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBhcnR5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </>
  );
}

export default Gallery;
