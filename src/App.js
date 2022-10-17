import desktop from "./image-header-desktop.jpg"

function App() {
  return (
    <div className="h-screen bg-main-bg flex items-center justify-center">
      <div className="desk:w-[1100px] desk:h-[446px] mobile:w-[260px] mobile:h-[600px] bg-card-bg flex desk:flex-row mobile:flex-col rounded-xl">
      <div className={window.innerWidth < 900 ? "bg-img":""}>
            <div class={window.innerWidth < 900 ? "overlay":""}><div class={window.innerWidth < 900 ? "overlay-2":""}></div></div>
        </div>

        <div className="desk:w-[560px] [100%] mobile:w-[100%] flex items-center justify-center">
          <div className="desk:w-[100%] desk:h-[100%] mobile:p-3 desk:p-0 flex flex-col items-center justify-center">
            <h1 className="inter font-[700] text-white desk:text-4xl mobile:text-xl desk:text-start mobile:text-center">Get <span className="text-accent">insights</span> that help<br/>your business grow.</h1>
            <h1 className="inter text-paragraph font-[400] desk:text-[15px] mobile:text-[13x] desk:mt-10 mobile:mt-5 text-center">Discover the benefits of data analytics and make<br/>better decisions regarding revenue, customer<br/>experience and overall efficiency.</h1>
            <div className="desk:w-[65%] mobile:w-[100%] h-[15%] flex flex-row desk:mt-10 mobile:mt-5 justify-between">
              <div className="desk:w-[25%] mobile:w-[33%] h-[100%] flex flex-col justify-end">
                <h1 className="inter font-[700] text-white desk:text-2xl mobile:text-lg mobile:text-center desk:text-start">10k+</h1>
                <h1 className="deca text-stat-heading font-[400] mobile:text-[9px] desk:text-[12px] desk:text-start mobile:text-center">COMPANIES</h1>
              </div>
              <div className="desk:w-[25%] mobile:w-[33%] h-[100%] flex flex-col justify-end">
                <h1 className="inter font-[700] text-white desk:text-2xl mobile:text-lg mobile:text-center desk:text-start">314</h1>
                <h1 className="deca text-stat-heading font-[400] mobile:text-[9px] desk:text-[12px] desk:text-start mobile:text-center">TEMPLATES</h1>
              </div>
              <div className="desk:w-[30%] mobile:w-[33%] h-[100%] flex flex-col justify-end">
                <h1 className="inter font-[700] text-white desk:text-2xl mobile:text-lg text-center">12M+</h1>
                <h1 className="deca text-stat-heading font-[400] mobile:text-[9px] desk:text-[12px] text-center">QUERIES</h1>
              </div>
            </div>
          </div>
        </div>
        
          <div className={window.innerWidth > 900 ? "bg-img":""}>
              <div class={window.innerWidth > 900 ? "overlay":""}><div class={window.innerWidth > 900 ? "overlay-2":""}></div></div>
          </div>
          </div>
      </div>
  );
}

export default App;
