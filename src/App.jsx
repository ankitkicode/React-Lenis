import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


const App = () => {
 

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Cleanup on component unmount
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);
      console.log(xTransform);
      
      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? '0%' : '100%'}`,
      }, "start")
      .to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      }, "start")
      .to(elem, {
        xPercent: xTransform,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  });





  return (
    <div className="bg-zinc-900 w-full  ">
      <div className="grid grid-cols-15 grid-rows-20 gap-2 overflow-hidden">
        <div className="elem col-span-1 row-span-1" style={{ "--r": 0, "--c": 1 }}>
          <img src="public/img/background-image-0.jpg" alt="img0" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c":3 }}>
          <img src="public/img/background-image-1.jpg" alt="img1" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 3 }}>
          <img src="public/img/background-image-2.jpg" alt="img2" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 8 }}>
          <img src="public/img/background-image-3.jpg" alt="img3" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 2 }}>
          <img src="public/img/background-image-4.jpg" alt="img4" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 6 }}>
          <img src="public/img/background-image-5.jpg" alt="img5" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 3 }}>
          <img src="public/img/background-image-6.jpg" alt="img6" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 8 }}>
          <img src="public/img/background-image-7.jpg" alt="img7" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 4 }}>
          <img src="public/img/background-image-8.jpg" alt="img8" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 2 }}>
          <img src="public/img/background-image-9.jpg" alt="img9" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 6 }}>
          <img src="public/img/background-image-10.jpg" alt="img10" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 3 }}>
          <img src="public/img/background-image-11.jpg" alt="img11" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 7 }}>
          <img src="public/img/background-image-12.jpg" alt="img12" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 5 }}>
          <img src="public/img/background-image-13.jpg" alt="img13" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 8 }}>
          <img src="public/img/background-image-14.jpg" alt="img14" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 1 }}>
          <img src="public/img/background-image-15.jpg" alt="img15" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 4 }}>
          <img src="public/img/background-image-16.jpg" alt="img16" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 2 }}>
          <img src="public/img/background-image-17.jpg" alt="img17" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 6 }}>
          <img src="public/img/background-image-18.jpg" alt="img18" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 3 }}>
          <img src="public/img/background-image-19.jpg" alt="img19" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 7 }}>
          <img src="public/img/background-image-20.jpg" alt="img20" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 4 }}>
          <img src="public/img/background-image-21.jpg" alt="img21" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 1 }}>
          <img src="public/img/background-image-22.jpg" alt="img22" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 5 }}>
          <img src="public/img/background-image-23.jpg" alt="img23" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 7  }}>
          <img src="public/img/background-image-24.jpg" alt="img24" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 5 }}>
          <img src="public/img/background-image-25.jpg" alt="img25" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 2 }}>
          <img src="public/img/background-image-26.jpg" alt="img26" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 3 }}>
          <img src="public/img/background-image-27.jpg" alt="img27" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 6 }}>
          <img src="public/img/background-image-28.jpg" alt="img28" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 5 }}>
          <img src="public/img/background-image-29.jpg" alt="img29" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 1 }}>
          <img src="public/img/background-image-30.jpg" alt="img30" />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="cont text-center font-gilroy text-red-700">
          <h1 className="text-6xl font-bold">Hello World!</h1>
          <p className="text-2xl font-semibold">This is demo text</p>
        </div>

      </div>
      <div className="w-full bg-red-300 text-black h-screen relative text-center flex items-center justify-center">
        <p className="font-regular text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam tempora provident dolore consequuntur animi esse soluta sed ipsa amet.</p>
      </div>

    </div>
  )
}

export default App
