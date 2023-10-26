import Image from 'next/image'

export default function Timeline() {
    return (
        <div className="m-auto relative after:content-none after:absolute after:top-0 after:left-1/2 after:z-1">
            <div className="ml-[10px] mr-[80px] mt-auto max-w-[94%] block relative z-2">
                <div className="head">
                    <div className="number-box">
                        <span>02</span>
                    </div>
                    <h2><span className="small">Subtitle</span> Confidence</h2>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                    <Image 
                        width={1000}
                        height={500}
                        alt="Graphic"
                        src="/" 
                    />
                </div>
            </div>
        </div>
    );
}