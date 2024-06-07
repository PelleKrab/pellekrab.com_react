// components/BouncingArrow.tsx
import React from 'react';
import { RiArrowDownWideLine } from "react-icons/ri";

const BouncingArrow: React.FC = () => {
return (
    <div className="flex justify-center mt-10 ">
        <div className="animate-bounce text-white text-5xl">
            <RiArrowDownWideLine />
        </div>
    </div>
);
};

export default BouncingArrow;
