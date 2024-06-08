import { FaHome } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
function SideBar() {
  return (
    <div className="h-screen flex flex-col w-64 border-r border-gray-200 bg-content">
      <div className="flex-1 flex flex-col pt-5 pb-5 overflow-y-auto px-6">
          <div className="flex items-center flex-shrink-0 font-black text-3xl">
            <h1 className="w-auto">Finastro</h1>
          </div>
          {/* Dashboard */}
          <div className="flex-1">
            <div className="flex mt-5 mb-2 text-[15px] font-semibold text-txt/50">
              <span className="">Dashboard</span>
            </div>
            <div className="flex pt-1 list-none">
              <li>
                <ul className="flex pb-2">
                  <div className="flex items-center rounded-md font-semibold py-2  px-4 cursor-pointer hover:bg-gray-200 w-full">
                    <FaHome />
                    <span className="ml-4 text-[17px] text-txt">Home</span>
                  </div>
                </ul>
                <ul className="flex pb-2">
                  <div className="flex items-center rounded-md font-semibold py-2  px-4 pr-10 cursor-pointer hover:bg-gray-200 w-full">
                    <GrTransaction />
                    <span className="ml-4 text-[17px] text-txt">Transactions</span>
                  </div>
                </ul>
                <ul className="flex pb-2">
                  <div className="flex items-center rounded-md font-semibold py-2  px-4  cursor-pointer hover:bg-gray-200 w-full">
                    <FaMoneyCheck />
                    <span className="ml-4 text-[17px] text-txt">Budgeting</span>
                  </div>
                </ul>
              </li>
            </div>
          {/* Account */}
            <div className="flex mt-5 mb-2 text-[15px] font-semibold text-txt/50">
              <span className="">Account</span>
            </div>
            <div className="flex pt-1 list-none">
              <li>
                <ul className="flex pb-2">
                  <div className="flex items-center rounded-md font-semibold py-2 pr-[70px] px-4 cursor-pointer hover:bg-gray-200 w-full">
                    <IoSettings />
                    <span className="ml-4 text-[17px] text-txt">Settings</span>
                  </div>
                </ul>
              </li>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SideBar;
