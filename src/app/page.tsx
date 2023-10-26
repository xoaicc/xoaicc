import Banner from "./components/Banner";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";

export default function Homepage() {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <Background />
            <div className="w-full">    
                <header>
                    <Navbar />
                </header>

                <main>
                    <Banner />
                    <div>
                        <h2 className="uppercase effectFont2">Education</h2>
                        <Timeline />
                    </div>
                </main>

                <footer>
                    <p className="specialFont text-center text-2xl text-white/50 hover:text-white/100 hover:bg-orange-300/30 cursor-default">Copyright by XoaiCC.</p>
                </footer>
            </div>
        </div>
    );
}