import React, { useEffect, useRef } from 'react';
import img from '../../assets/imgs/11.jpg'
import img1 from '../../assets/imgs/12.jpg'
import bgImg from '../../assets/imgs/slide-01.jpg'
const AboutPage = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-[350px] flex items-center justify-center text-white text-7xl font-bold uppercase relative animate-fadeInSlide" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <span className="relative z-10 animate-fadeInText font-[beatrice]">About Us</span>
      </div>

      {/* About Container */}
      <div className="flex flex-col gap-20 max-w-[1200px] mx-auto px-5 py-10">
        {/* Our Story */}
       <div className="flex flex-col md:flex-row items-start gap-20 ">

          <div className="w-full md:w-3/5 text-[#969393]">
            <h2 className="text-2xl font-bold text-[#333] mt-5 mb-3 font-[beatrice]">Our Story</h2>
            <p className="leading-relaxed font-[beatrice]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
            <br />
            <p className="leading-relaxed font-[beatrice]">Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
            <br />
            <p className="leading-relaxed font-[beatrice]">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="relative w-full md:w-2/5 h-[400px] flex justify-center items-center opacity-0 translate-y-[100px] transition duration-[2000ms] ease-in-out"
          >
            <img
              src={img}
              alt="Our Story"
              className="w-[90%] h-full object-cover transition-transform duration-500 hover:scale-105 ml-[70px] mb-[150px] "
            />
            <div className="absolute w-[80%] h-[400px] border-[3px] border-gray-300 -top-[60px] left-[50px] -z-10"></div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-start gap-20 ">
          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="relative w-full md:w-2/5 h-[400px] flex justify-center items-center opacity-0 translate-y-[100px] transition duration-[2000ms] ease-in-out"
          >
            <img
              src={img1}
              alt="Our Mission"
              className="w-[90%] h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute w-[90%] h-[400px] border-[3px] border-gray-300 top-[15px] left-[35px] -z-10 "></div>
          </div>
          <div className="w-full md:w-4/5 text-[#969393] ">
            <h2 className="text-2xl font-bold text-[#333] mt-10 mb-3 font-[beatrice]">Our Mission</h2>
            <p className="leading-relaxed font-[beatrice]">Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
            <br />
            <p className="italic border-l-2 border-gray-300 pl-4 leading-relaxed">
              Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
              <br />
              <span className="text-gray-600">- Steve Jobs</span>
            </p>
          </div>
        </div>
        
      </div>
      
    <div className="footer  font-[beatrice] bg-[#F5F5F5] mt-20">
      <div className='grid grid-cols-12  p-10'>
        <div className='col-span-4 flex flex-col'>
          <div className='mb-15'>
            <h2 className='text-stone-500 text-[20px]'>info</h2>
          <p className='text-[14px]'>pricing</p>
          <p className='text-[14px]'>about</p>
          <p className='text-[14px]'>contacts</p>
        </div>
          <div>
            <h2 className='text-stone-500 text-[20px]'>Languages</h2>
          <p className='text-[14px]'>English</p>
          <p className='text-[14px]'>Spanish</p>
          <p className='text-[14px]'>French</p>
        </div>
        </div>
        <div className='col-span-4 flex flex-col justify-center items-center'>
        <h2 className='text-stone-500 text-[20px] mb-4'>Technologies</h2>
         <div className="w-10 h-10 bg-gradient-to-br from-white to-black transform rotate-45 mb-2"></div>
          <div className='text-[80px] font-[inter] font-extrabold leading-[70px] text-gray-950'>XIV</div>
          <div className='text-[80px] font-[inter] font-extrabold leading-[60px] text-gray-950'>QR</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
