import { ThemeProvider } from "styled-components";
import GlobalStyles from "./compoenents/styles/Global";
import CardStyled from "./compoenents/styles/Card.styled";
import Flex from "./compoenents/styles/Flex.styled";
import qrCode from "./assets/images/image-qr-code.png"
import Image from "./compoenents/styles/Image.styled";
import Container from "./compoenents/styles/Container.styled";

const theme = {
    colors: {
        background: '#D5E1EF',
        white: '#FFF',
        blue: '#2C7DFA',
        darkNavy: '#1F314F',
        lightGray: '#7D889E'
    }
}

function App() {
    
    return <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <CardStyled>
            <Image src={qrCode} alt="not working"/>
            <Flex>
              <h2>Improve your front-end skills by building projects</h2>
              <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </Flex>
          </CardStyled>
        </Container>
    </ThemeProvider>
}
export default App
