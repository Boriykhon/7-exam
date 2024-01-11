import Navbar from "./components/navbar/page";
import Type from "./type/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <Type />
    </main>
  )
}
