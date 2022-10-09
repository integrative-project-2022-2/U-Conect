import Head from "next/head";
import { useState } from "react";
import Notification from "../components/Notification"
import SideBar from "../components/SideBar";

export default function home() {

  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Pagina principal</title>
      </Head>
      <header>
        <Notification
        open={open}
        fun={handleDrawerOpen}
        />
        <SideBar 
        open={open}
        fun={handleDrawerClose}/>
      </header>
    </div>
  )
}
