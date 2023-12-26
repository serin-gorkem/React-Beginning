import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="max-container w-full">
        <Hero />
      </main>
      <footer className="max-container w-full flex flex-col justify-center items-center p-6">
        <Footer/>
      </footer>
    </>
  );
}
