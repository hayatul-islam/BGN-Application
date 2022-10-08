import React from "react";

function Gallery({ photos }) {
  const { img1, img2, img3, img4, img5, img6 } = photos || {};
  return (
    <>
      <div className="flex flex-wrap pl-2 md:pl-6 justify-between py-12 xl:py-[200px]">
        <img
          className="w-[140px] h-[210px] md:w-[165px] md:h-[315px] lg:w-[230px] lg:h-[440px] xl:w-[336px] xl:h-[400px] rounded-[10px] xl:rounded-[40px]"
          src={img1}
          alt=""
        />
        <img
          className="w-[180px] h-[160px] sm:w-[275px] sm:h-[214px] md:w-[330px] md:h-[250px] lg:w-[455px] lg:h-[350px] xl:w-[650px] xl:h-[400px] mt-20 rounded-[10px] xl:rounded-[40px] "
          src={img2}
          alt=""
        />
        <img
          className="w-[150px] h-[110px] sm:w-[180px] sm:h-[130px] md:w-[250px] md:h-[200px] lg:w-[280px] lg:h-[210px] xl:w-[380px] xl:h-[300px] rounded-[10px] xl:rounded-l-[40px] mt-28 sm:mt-0 "
          src={img3}
          alt=""
        />
        <img
          className="w-[165px] h-[200px] sm:h-[165px] sm:w-[200px] md:h-[190px] md:w-[240px] lg:h-[260px] lg:w-[320px]  xl:w-[480px] xl:h-[300px] rounded-[10px] mt-8 sm:mt-12 md:mt-24"
          src={img4}
          alt=""
        />
        <img
          className="w-[205px] h-[200px] sm:w-[205px] sm:h-[340px] md:w-[250px] md:h-[416px] lg:w-[330px] lg:h-[550px] xl:w-[480px] xl:h-[600px] rounded-[10px]  mt-4 sm:mt-12 md:mt-24"
          src={img5}
          alt=""
        />
        <img
          className="w-[108px] h-[185px] md:w-[195px] md:h-[307px] xl:w-[300px] xl:h-[450px] rounded-[10px]  mt-8"
          src={img6}
          alt=""
        />
      </div>
    </>
  );
}

export default Gallery;
