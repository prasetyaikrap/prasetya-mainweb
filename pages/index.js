import Head from "next/head";
//components
import Navbar from "../components/Navbar";
import ProfileSec from "../components/ProfilePrev";
import Course from "../components/CoursePrev";
import Project from "../components/ProjectPrev";
import Footer from "../components/Footer";
import Blogpreview from "../components/BlogPrev";

function Home() {
  return (
    <div className="home-body">
      <Head>
        <title>Prasetya Priyadi - All About Technology</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Belajar dan paham teknologi dengan mudah dan menyenangkan"
        />
        <meta property="og:title" content="Prasetya Priyadi Blog Website" />
        <meta
          property="og:description"
          content="Belajar dan paham teknologi dengan mudah dan menyenangkan"
        />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Blogpreview />
        <Project />
        <ProfileSec />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
