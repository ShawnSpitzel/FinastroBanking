import SideBar from "@/components/SideBar"
import Header from "@/components/Header"
import Overview from './Overview'

function Layout() {

  return (
    <>
    <div className="flex flex-col overflow-hidden">
    <div className ="flex flex-row"><SideBar />
      <Header /></div>
      <Overview />
    </div>
    </>
  )
}

export default Layout
