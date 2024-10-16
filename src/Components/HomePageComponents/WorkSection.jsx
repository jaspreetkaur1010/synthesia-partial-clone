import { useState, useEffect, useRef } from "react";

const WorkSection = () => {
    const [toggleState, setToggleState] = useState(1);
    const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const handleVideoEnd = () => {
        if (toggleState < 4) {
            setToggleState(toggleState + 1);
        } else {
            setToggleState(1);
        }
    };

    useEffect(() => {
        const currentVideo = videoRefs[toggleState - 1].current;
        if (currentVideo) {
            currentVideo.addEventListener("ended", handleVideoEnd);
            return () => {
                currentVideo.removeEventListener("ended", handleVideoEnd);
            };
        }
    }, [toggleState]);

    return (
        <>
            <div className="px-2 py-8 sm:w-5/6 mx-auto flex flex-col items-center rounded-3xl rounded-br-[90px] justify-center bg-blue-950 md:p-8 space-y-6">
                <button className="font-semibold text-xs cursor-pointer px-2 py-2 rounded-lg shadow-sm bg-blue-500 bg-opacity-30 text-indigo-100">
                    FROM IDEA TO VIDEO IN MINUTES
                </button>
                <h2 className="text-center text-4xl md:text-6xl text-white">How Synthesia works</h2>

                <div className="w-full">
                    <div className="lg:flex  space-y-4 lg:space-y-0 lg:space-x-4">
                        <div
                            className={` flex lg:w-1/2 space-x-4 p-4 bg-blue-500 rounded-lg bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 ${
                                toggleState === 1 ? "tab active-tab" : "tab"
                            }`}
                            onClick={() => toggleTab(1)}
                        >
                            <button className="h-6 mt-1 px-2 rounded-lg bg-blue-500">1</button>
                            <div className="flex flex-col justify-center transition-all duration-300">
                                <h2 className="text-xl text-white font-semibold">Create your script</h2>
                                <p className="text-xs text-white">Generate it from a link, doc, or even just an idea with the help of AI.</p>
                            </div>
                        </div>

                        <div
                            className={` flex lg:w-1/2 space-x-4 p-4 bg-blue-500 rounded-lg bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 ${
                                toggleState === 2 ? "tab active-tab" : "tab"
                            }`}
                            onClick={() => toggleTab(2)}
                        >
                            <button className="h-6 mt-1 px-2 rounded-lg bg-blue-500 ">2</button>
                            <div className="flex flex-col justify-center transition-all duration-300">
                                <h2 className="text-xl text-white font-semibold">Collaborate</h2>
                                <p className="text-xs text-white">Generate it from a link, doc, or even just an idea with the help of AI.</p>
                            </div>
                        </div>

                        <div
                            className={` flex lg:w-1/2 space-x-4 p-4 bg-blue-500 rounded-lg bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 ${
                                toggleState === 3 ? "tab active-tab" : "tab"
                            }`}
                            onClick={() => toggleTab(3)}
                        >
                            <button className="h-6 mt-1 px-2 rounded-lg bg-blue-500 ">3</button>
                            <div className="flex flex-col justify-center transition-all duration-300">
                                <h2 className="text-xl text-white font-semibold">Edit your video</h2>
                                <p className="text-xs text-white">Refine your video easily before sharing.</p>
                            </div>
                        </div>

                        <div
                            className={` flex lg:w-1/2 space-x-4 p-4 bg-blue-500 rounded-lg bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 ${
                                toggleState === 4 ? "tab active-tab" : "tab"
                            }`}
                            onClick={() => toggleTab(4)}
                        >
                            <button className="h-6 mt-1 px-2 rounded-lg bg-blue-500">4</button>
                            <div className="flex flex-col justify-center transition-all duration-300">
                                <h2 className="text-xl text-white font-semibold">Share and export</h2>
                                <p className="text-xs text-white">Easily export your video in various formats.</p>
                            </div>
                        </div>
                    </div>

                    {/* Video Containers */}
                    <div className={`rounded-3xl pt-8 rounded-br-[90px] ${toggleState === 1 ? "content active-content" : "content"}`}>
                        <video
                            ref={videoRefs[0]}
                            src="https://webcdn.synthesia.io/02-1%20Create%20Your%20Script.mp4"
                            width="100%"
                            height="100%"
                            className="object-cover rounded-3xl rounded-br-[90px]"
                            autoPlay
                            loop={false}
                            muted
                            playsInline
                        />
                    </div>
                    <div className={`rounded-3xl pt-8 rounded-br-[90px] ${toggleState === 2 ? "content active-content" : "content"}`}>
                        <video
                            ref={videoRefs[1]}
                            src="https://webcdn.synthesia.io/02-3%20Collaborate.mp4"
                            width="100%"
                            height="100%"
                            className="object-cover rounded-3xl rounded-br-[90px]"
                            autoPlay
                            loop={false}
                            muted
                            playsInline
                        />
                    </div>
                    <div className={`rounded-3xl pt-8 rounded-br-[90px] ${toggleState === 3 ? "content active-content" : "content"}`}>
                        <video
                            ref={videoRefs[2]}
                            src="https://webcdn.synthesia.io/02-1%20Create%20Your%20Script.mp4"
                            width="100%"
                            height="100%"
                            className="object-cover rounded-3xl rounded-br-[90px]"
                            autoPlay
                            loop={false}
                            muted
                            playsInline
                        />
                    </div>
                    <div className={`rounded-3xl pt-8 rounded-br-[90px] ${toggleState === 4 ? "content active-content" : "content"}`}>
                        <video
                            ref={videoRefs[3]}
                            src="https://webcdn.synthesia.io/02-4%20Share%20and%20export.mp4"
                            width="100%"
                            height="100%"
                            className="object-cover rounded-3xl rounded-br-[90px]"
                            autoPlay
                            loop={false}
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkSection;
