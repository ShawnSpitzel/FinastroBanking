import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdModeNight } from "react-icons/md";
function Header() {
  let catName ="Dashboard";
  let pageName ="Overview";
  return (
    <div className ="flex-shrink w-screen">
        <div className ="flex flex-shrink justify-between items-center p-5 px-10 border-b pb-5 w-full border-gray-200">
        <div><span className = "text-txt/50 mr-2">{catName} /</span>  {pageName}</div>
        <div className="flex items-center ">
        <span className ="text-3xl text-txt mx-5"><MdModeNight /></span>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        </div>
    </div>
  );
}
export default Header;
