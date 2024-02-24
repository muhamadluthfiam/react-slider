import React from 'react';

const SliderComponent = ({ images, prevButton, nextButton, prevButtonStyle, nextButtonStyle }) => {
  const prev = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 232;
    }
  };

  const next = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 232;
    }
  };

  const zoomOut = (src) => {
    console.log(src)
    const fullImage = document.getElementById('fullImage');
    if (fullImage) {
      fullImage.src = src;
    }
    const fullImageView = document.getElementById('fullImageView');
    if (fullImageView) {
      fullImageView.style.display = 'block';
    }
  };

  const zoomIn = () => {
    const fullImageView = document.getElementById('fullImageView');
    if (fullImageView) {
      fullImageView.style.display = 'none';
    }
  };

  return (
    <div>
      <div className="flex relative">
        <button className="bg-[#FFFF] hover:drop-shadow-lg border-[#F2F2F2] border rounded-full w-[30px] h-[30px] absolute z-10 bottom-1/2 -left-4 flex justify-center items-center" onClick={prev} style={prevButtonStyle}>
          {prevButton}
        </button>
        <div id="slider" className="flex items-center gap-x-8 mb-8 pb-1 overflow-x-scroll scroll-smooth duration-500">
          {images.map((item, i) => (
            <img key={i} alt="ayam" className="cursor-pointer object-cover w-52 h-32 lg:w-72 lg:h-56 rounded-2xl" onClick={() => zoomOut(`${item.name}`)} src={`${item.name}`} />
          ))}
        </div>
        <button className="bg-white hover:drop-shadow-lg border-[#F2F2F2] border rounded-full w-[30px] h-[30px] absolute z-10 -right-4 bottom-1/2 rotate-180 flex justify-center items-center" onClick={next} style={nextButtonStyle}>
          {nextButton}
        </button>
      </div>
      <div id="fullImageView" className="hidden cursor-pointer fixed top-0 left-0 w-full h-screen bg-opacity-50 bg-[#000] z-50" onClick={zoomIn}>
        <div className="w-full h-auto lg:h-5/6 overflow-hidden mt-3 rounded-2xl">
          <img id="fullImage" className="w-full h-full object-contain px-2" />
        </div>
      </div>
    </div>
  );
};

SliderComponent.defaultProps = {
  prevButton: (
    <svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13L1 7L7 1" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  nextButton: (
    <svg width="12" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13L1 7L7 1" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  prevButtonStyle: {},
  nextButtonStyle: {}
};

export default SliderComponent;
