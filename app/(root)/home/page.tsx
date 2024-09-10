import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import BlogContents from "./components/BlogContents";


export default function Home() {
  return (
    <div className="bg-[#141414] text-white border border-[#666666] px-[10%] ">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 flex flex-col justify-between">
          <div>
        <p className="text-2xl text-[#666666] pt-14 pb-5">Your Journey to Tomorrow Begins Here</p>

          <p className="text-6xl py-5">Explore the Frontiers of Artificial Intelligence</p>
          <p className="text-1xl pt-4 pb-10  text-[#666666]">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
          </div>
          
          <div className="grid grid-cols-3 ">
            <div className=" border border-opacity-50 border-[#666666]">
            <div className="flex flex-col justify-start items-start p-10 ">
              <span className="text-2xl pb-5">300<span className="text-[#ffd119]">+</span></span>
              <span className="text-1xl text-[#666666]">Resources available</span>
            </div>
            </div>
            <div className=" border border-[#666666]">
            
            <div className="flex flex-col justify-start items-start p-10 ">
              <span className="text-2xl pb-5">12k<span className="text-[#ffd119]">+</span></span>
              <span className="text-[#666666] text-1xl">Total Downloads</span>
            </div>
            </div>
            <div className=" border border-[#666666]">
            <div className="flex flex-col justify-start items-start p-10 border-[#666666]">
            <span className="text-2xl pb-5">10k<span className="text-[#ffd119]">+</span></span>
            <span className="text-1xl text-[#666666]">Active Users</span>
            
            </div>
            </div>

          </div>
        </div>

        <div className="col-span-5 border border-[#666666] relative">
          <Image
            src="/home/hero.svg"
            alt="hero"
            width={100}
            height={100}
            className="w-full "
          />
          <div className="absolute bottom-10 px-10">
          <div className="flex -space-x-3 *:ring-[#666666]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>
            <p className="text-2xl py-4">Explore 1000+ resources</p>
            <p className="text-1xl pb-5 text-[#666666]">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <button className="text-[#666666] text-1xl border rounded border-[#666666] p-2">Explore Resources</button>
          </div>
        </div>
      </div>
      {/* second section */}
      
      <div className="min-h-[40vh]">
        <div className="grid grid-cols-3">
          <div>
          <div className=" border border-[#666666] p-[10%]">
            <div className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/icon.svg"/></div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-1xl">Latest News Updates</p>
                <p className="text-1xl text-[#666666]">Stay Current</p>
              </div>
              
              <p className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/Button.svg"/></p>
            </div>
            <p className="text-1xl text-[#666666]  pt-5">Over 1,000 articles published monthly</p>
          </div>
          </div>
          <div className=" border border-[#666666] p-[10%]">
          <div>
            <p className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/sop.svg"/></p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-1xl">Expert Contributors</p>
                <p className="text-1xl text-[#666666] ">Trusted Insights</p>
              </div>
              <div className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/Button.svg"/></div>
            </div>
            <p className="text-1xl text-[#666666] pt-5 ">50+ renowned AI experts on our team</p>
          </div>
          </div>
          <div className=" border border-[#666666] p-[10%]">
          <div>
            <p className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/icon (2).svg"/></p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-1xl">Global Readership</p>
                <p className="text-1xl text-[#666666] ">Worldwide Impact</p>
              </div>
              <div className="py-5"><Image alt='logo' width={50} height={50} src="/home/3cards/Button.svg"/></div>
            </div>
            <p className="text-1xl text-[#666666] pt-5">2 million monthly readers</p>
          </div>
          </div>
        </div>
      </div>

      <div>
<BlogContents/>
      </div>
    </div>
  );
}
