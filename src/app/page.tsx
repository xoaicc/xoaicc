import Banner from "./components/Banner";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

export default function Homepage() {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <Background />
            <div className="w-full relative z-1">    
                <header>
                    <Navbar />
                </header>

                <main>
                    <Banner />
                    <div className="h-[100rem]"></div>
                </main>

                <footer>
                    <p className="specialFont text-center text-2xl text-white/50 hover:text-white/100 hover:bg-orange-300/30">Copyright by XoaiCC.</p>
                </footer>
            </div>
        </div>
    );
}