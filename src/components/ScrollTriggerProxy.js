import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll && document.querySelector('.shop-scroller')) {
      const element = scroll?.el;
  
      scroll.on("scroll", ScrollTrigger.update);
  
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
  
      ScrollTrigger.addEventListener("refresh", () => scroll.update());
  
      // Detectar navegación hacia atrás
      const handlePopState = () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
          scroll.update();
        }, 500); // Pequeño retraso para asegurar que el DOM esté listo
      };

      // Agregar el listener para "popstate"
      window.addEventListener("popstate", handlePopState);
  
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
