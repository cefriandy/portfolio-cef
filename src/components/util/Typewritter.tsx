import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    texts: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ texts }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentIndex = loopNum % texts.length;
            const fullText = texts[currentIndex];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, typingSpeed, texts]);

    return (
        <h2 className="typewriter">
            {displayedText}
            <span className="cursor"></span>
        </h2>
    );
};

export default Typewriter;