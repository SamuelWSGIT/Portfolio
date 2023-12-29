import { Typewriter } from 'react-simple-typewriter';

export default function TextoDigitado({ children }) {
    return (
        <Typewriter
            words={children}
            typeSpeed={10}
        ></Typewriter>
    )
}