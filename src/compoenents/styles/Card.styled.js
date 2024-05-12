import styled from "styled-components";


const CardStyles = styled.div`
width: 320px;
background-color: ${({theme}) => theme.colors.white};
box-shadow: 5px 5px 5px ${({theme}) => theme.colors.lightGray};
box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
border-radius: 20px;
`

export default CardStyles;