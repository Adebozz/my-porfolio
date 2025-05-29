import React from 'react'

const HomePage = () => {
  return (
     <div className="w-full h-[620px] flex flex-row overflow-hidden" id="home">
      <div className="w-[40%] h-full overflow-hidden flex flex-col justify-center pl-[8%] text-[rgba(212,212,212,0)]">
        <p>Hello, I am</p>

        <h1>ADEBOSS</h1>
        <h4>WEB DEVELOPER/ GRAPHICS DESIGNER</h4>

        <button>Contact me</button>
      </div>
      <div className="w-[40%] h-full overflow-hidden flex flex-col justify-center pb-[10%] h-[150%] w-[60%] -mt-[10%]">
        <div className="bg-[linear-gradient(rgb(212,212,212),rgb(255,255,255))] rounded-[100%_0%_0%_100%] w-[700px] h-[800px] ml-[10%] flex items-center">
          <div className="mt-[10%] ml-[10%] w-[350px] h-[350px] rounded-full bg-white overflow-hidden">
            <img
              src="/images/adeboss photo.png"
              alt="Adeboss Photo"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
