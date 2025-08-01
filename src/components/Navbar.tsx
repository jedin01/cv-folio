import { Code2Icon, House, PenTool } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="h-full flex justify-center fixed pt-[20px] top-[10%] right-5">
        <nav className="w-fit h-fit rounded-[5px] overflow-hidden flex justify-center flex-col">
          <div className="border-b-2 border-[#404049] h-fit w-full bg-[#2e2e3c]">
            <div className="flex items-center m-2 p-2 gap-5 bg-[#404049] w-fit h-fit rounded-[6px]">
              <div className="">
                <Code2Icon />
              </div>
              <div className="">
                <PenTool />
              </div>
            </div>
          </div>
          <div className="w-fit">
            <div>
              <House/>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
