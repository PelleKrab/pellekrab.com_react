import React, { useEffect, useRef } from 'react';

const StarrySky: React.FC = () => {
    const starContainerRef = useRef<HTMLDivElement>(null);
    const numStars = 600;
    const minStarDistance = 5;

    useEffect(() => {
        const starContainer = starContainerRef.current;
        if (!starContainer) return;

        const stars: HTMLDivElement[] = [];

        function calculateDistance(star1: HTMLDivElement, star2: HTMLDivElement): number {
            const dx = (star1.dataset.x ? parseFloat(star1.dataset.x) : 0) - (star2.dataset.x ? parseFloat(star2.dataset.x) : 0);
            const dy = (star1.dataset.y ? parseFloat(star1.dataset.y) : 0) - (star2.dataset.y ? parseFloat(star2.dataset.y) : 0);
            return Math.sqrt(dx * dx + dy * dy);
        }

        function createStars() {
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star', 'absolute', 'bg-white', 'rounded-full');
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight * 3.2;
                star.dataset.x = x.toString();
                star.dataset.y = y.toString();

                let validPosition = true;
                for (const existingStar of stars) {
                    const distance = calculateDistance(existingStar, star);
                    if (distance < minStarDistance) {
                        validPosition = false;
                        break;
                    }
                }

                if (validPosition) {
                    star.style.left = `${x}px`;
                    star.style.top = `${y}px`;
                    star.style.width = '2px';
                    star.style.height = '2px';
                    star.style.animationDelay = `${Math.random() * 3}s`;
                    star.style.animationName = 'twinkle';
                    star.style.animationDuration = '1.5s';
                    star.style.animationIterationCount = 'infinite';
                    star.style.animationTimingFunction = 'ease-in-out';
                    if (starContainer) {
                        starContainer.appendChild(star);
                    }
                    stars.push(star);
                }
            }
        }

        createStars();

        function updateParallax() {
            const scrollY = window.scrollY;
            stars.forEach(star => {
                const yOffset = -scrollY * 0.5;
                star.style.transform = `translateY(${yOffset}px)`;
            });
        }

        window.addEventListener('scroll', updateParallax);
        return () => {
            window.removeEventListener('scroll', updateParallax);
        };
    }, []);

    return <div className="starry-sky absolute w-full h-full overflow-hidden z-0" ref={starContainerRef}></div>;
};

export default StarrySky;
