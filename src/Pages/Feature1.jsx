import Header from "../Components/Feature1Components/Header";

export default function Feature1(){
    return(
        <>
            <Header/>
            <div className="pt-56 bg-gradient-to-b from-black via-blue-950 to-black py-12">
                <div className="text-center">
                    <div className="inline-block font-semibold text-sm text-blue-200 bg-blue-800 bg-opacity-50 cursor-pointer px-2 py-2 rounded-lg shadow-sm">
                        TRUSTED BY 50,000 COMPANIES
                    </div>
                
                    <h1 className="text-5xl md:text-7xl text-white font-bold mt-4">The complete <span className="bg-gradient-to-r from-blue-300 to-indigo-700 text-transparent bg-clip-text">AI Video Platform</span><br/> for companies.</h1>
                    <p className="text-lg mt-8 px-4 text-gray-200 font-bold">
                    Easily produce your training, marketing and internal communication videos.
                    </p>

                    <button className="mt-8 bg-indigo-500 transition ease-in-out duration-200 group hover:bg-indigo-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors">
                    Create free AI video
                    <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                    </button>
                
                    <p className=" mt-4 text-gray-600  text-sm">No credit card required  &nbsp; &nbsp; | &nbsp;  &nbsp;  Rated 4.7/5 on G2</p>
                </div>
            </div>
            
        </>
    )
}