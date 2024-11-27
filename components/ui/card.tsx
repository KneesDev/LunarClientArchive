// ! this ISN'T the shadcn/ui card; it's custom
import React, { ReactNode } from 'react';

interface CardProps {
    className?: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
    return (
        <div
            className={`rounded-2xl border-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.13)] bg-white overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;