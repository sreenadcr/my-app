import React from "react";
import Image from "next/image";

const BlogContents = () => {
  return (
    <div className="min-h-[40vh]">
      <div className="py-40">
        <p className=" text-6xl ">Today's Headlines: Stay</p>
        <p className="flex gap-2">
        <span className="text-6xl  flex gap-2">informed</span>
          <span className="p-3 px-8">Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.</span>
        </p>
      </div>
      <div>
        <div className="flex  gap-10">
          <div>
            <div><Image alt='logo' width={500} height={500} src="/home/blogcontentpage/image.svg"/></div>
          </div>
          <div>
            <p className="text-2xl py-5">Global Climate Summit Addresses Urgent Climate Action</p>
            <p className="text-1xl text-[#666666] py-5">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-10 pt-4">
              <div className="flex flex-col text-1xl ">
                <span className="text-[#666666]  pb-2">Category</span>
                <span>Environment</span>
              </div>
              <div className="flex flex-col text-1xl">
                <span className="text-[#666666] pb-2">Publication Date</span>
                <span>October 10, 2023</span>
              </div>
              <div className="flex flex-col text-1xl">
                <span className="text-[#666666] pb-2">Category</span>
                <span>Jane Smith</span>
                <div>
                
                </div>
                
              </div>
              
            
            </div>

          </div>
        
        </div>
      
      </div>

      <div className="grid grid-cols-3 gap-10 py-40">
        <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (3).svg"/></p>
          <p className="text-1xl py-2" >A Decisive Victory for Progressive Policies</p>
          <p className="text-[#666666] pb-7">Politics</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>
        <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (2).svg"/></p>
          <p className="text-1xl py-2">Tech Giants Unveil Cutting-Edge AI Innovations</p>
          <p className="text-[#666666] pb-7">Technology</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>
        <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (1).svg"/></p>
          <p className="text-1xl py-2">COVID-19 Variants</p>
          <p className="text-[#666666] pb-7">Health</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 pb-40">
      <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (2).svg"/></p>
          <p className="text-1xl py-2">Tech Giants Unveil Cutting-Edge AI Innovations</p>
          <p className="text-[#666666] pb-7">Technology</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>
        
        <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (1).svg"/></p>
          <p className="text-1xl py-2">COVID-19 Variants</p>
          <p className="text-[#666666] pb-7">Health</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>

        <div>
          <p><Image alt='logo' width={500} height={200} src="/home/blogcontentpage/image (3).svg"/></p>
          <p className="text-1xl py-2" >A Decisive Victory for Progressive Policies</p>
          <p className="text-[#666666] pb-7">Politics</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">60</span>
              <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">2.2k</span>
            </div>
            <span className="text-[#666666] text-1xl border rounded-xl px-3 border-[#666666] p-2">Read More</span>
          </div>
        </div>
       
        
      </div>
<div>
    <div className="flex justify-between px-[12%] ">
        <div>
    <p>Featured Blog</p>
    <p>Visual Insights for the Modern Viewer</p>

        </div>
        <span>View All</span>
    </div>

</div>
{/* featured cards */}
<div className="grid grid-cols-3">
<div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div>
<div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div><div>
    <p>image</p>
    <p>Mars Exploration: Unveiling Alien Landscapes</p>
    <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
</div>
</div>
    </div>
  );
};

export default BlogContents;
