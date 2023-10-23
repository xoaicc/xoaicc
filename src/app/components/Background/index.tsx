export default function Background() {
    return (
        <div className="w-full h-full fixed">
            <div 
                className="w-full h-full relative flex justify-center items-center overflow-hidden"
            >
                <iframe 
                    className="h-screen w-[178vh] 2xl:w-screen 2xl:h-[56.25vw] absolute z-0" 
                    src="https://www.youtube-nocookie.com/embed/AY6CPqEijBQ?si=INwtgwVaNBElaaBo?autoplay=1&controls=0" 
                    allow="autoplay;"
                ></iframe>
            </div>
        </div>
    );
}