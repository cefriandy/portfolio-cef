import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [text]);

    return <h2>{displayedText}</h2>;
};

export default Typewriter;