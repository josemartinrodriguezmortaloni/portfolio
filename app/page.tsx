import Nav from "./components/navabar";
import About from "./about/page";

export default function Home() {
  return (
    <div className="">
      <div>
        <Nav />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
