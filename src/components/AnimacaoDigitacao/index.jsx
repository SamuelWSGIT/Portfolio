import AnimacaoColorida from "../AnimacaoColorida";
import { AnimacaoDigitacaoContainer } from "./styled";
import { Typewriter } from 'react-simple-typewriter';

export default function AnimacaoDigitacao({ children }) {
    return (
        <AnimacaoDigitacaoContainer>
            <Typewriter
                words={children}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </AnimacaoDigitacaoContainer>
    )
}