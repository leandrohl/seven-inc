import { useEffect, useState } from 'react';


const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const verifyIsMobile = () => {
    setIsMobile(window.innerWidth <= 800)
  }

  window.addEventListener("resize", verifyIsMobile);

  useEffect(() => {
    verifyIsMobile()
  }, [])

  return {
    isMobile
  };
}

export default useMobile;