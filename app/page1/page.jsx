"use client";

import Activities from "../components/Activities";
import Gallery2 from "../components/Gallery2";
import Navbar2 from "../components/Navbar2";
import Teaching from "../components/Teaching";
import TimeTable from "../components/TimeTable";

export default function Page1() {
  return (
    <main className="p-0">
      <Navbar2 />
      <Teaching />
      <Activities />
      <TimeTable />
      <TimeTable />
      <Gallery2 />
    </main>
  );
}
