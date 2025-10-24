import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loader = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024); // show only on screens wider than 1024px
    };

    checkScreenSize(); // initial check
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isDesktop) return null; // hide loader on mobile/tablet

  return (
    <StyledWrapper>
      <div className="preloader">
        <div className="crack crack1" />
        <div className="crack crack2" />
        <div className="crack crack3" />
        <div className="crack crack4" />
        <div className="crack crack5" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .preloader {
    position: fixed;
    width: 30%;
    height: 30%;
    display: flex;
    top: 26rem;
    left: 0.6rem;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 5px #60A5FA);
  }

  .crack {
    position: absolute;
    width: 10%;
    aspect-ratio: 1;
    background-color: #fef3fc;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    animation: rotate 6s infinite;
  }

  .crack2 { width: 12%; animation-delay: 1s; }
  .crack3 { width: 14%; animation-delay: 1.5s; }
  .crack4 { width: 16%; animation-delay: 2s; }
  .crack5 { width: 18%; animation-delay: 2.5s; }

  @keyframes rotate {
    to {
      rotate: 360deg;
    }
  }
`;

export default Loader;
