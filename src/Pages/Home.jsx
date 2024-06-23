import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Foots from "../Components/Foots";

function Home({ modal, setModal }) {
  return (
    <main className="flex flex-col items-center bg-stone-950/60 h-dvh text-white ">
      <Navbar modal={modal} setModal={setModal} />
      <div className="w-fit bg-stone-800/70 text-white px-6 rounded-3xl py-1">
        Multi Motion Brush now available in Gen-2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="border-l-2 pl-2 border-stone-600 cursor-pointer">
          TRY NOW
        </span>
      </div>

      <h1 className="text-5xl font-bold text-white text-center letter-spacing my-10">
        Advancing creativity <br /> with artificial intelligence
      </h1>

      <p className="text-xl text-center w-2/5 text-purple-200 hover:text-purple-300 hover:transition-all cursor-pointer">
        Runway is an applied AI research company shaping the next era of art,
        entertainment and human creativity.
      </p>

      <Link className="my-10">
        <button className="flex items-center gap-3 bg-blue-800 px-6 font-normal py-1 rounded-2xl">
          TRY RUNWAY FOR FREE
          <img src="src/assets/bold-rarr.png" className="w-3" alt="" />
        </button>
      </Link>

      <footer className="w-full bg-stone-950 gap-14 h-40 mt-3 py-7 flex">
        <Foots
          title="Gen-2:The Next Step Forward For Generative AI"
          link="Learn about Generative video"
        />
        <Foots
          title="The originals of stable diffusion"
          link="Learn about Generative video"
        />
        <Foots
          title="everthing you need to make anyhting you want"
          link="Try our 30+ AI Magic Tools"
        />
        <Foots
          title="Gen-1:Turn anything into everything"
          link="Learn about Video to video"
        />
      </footer>
    </main>
  );
}

export default Home;
