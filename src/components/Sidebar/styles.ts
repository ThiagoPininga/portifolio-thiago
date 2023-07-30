import styled from "styled-components";

interface ContainerProps{
  isActive:boolean;
}

export const Container = styled.div<ContainerProps>`

  nav{
    /* display: none; */
    display: flex;

    z-index: 98;

    width: 200px;
    height: 100vh;

    position: absolute;
    right: -60px;
    top: 0px;

    padding-left: 0px;
    background-color: ${({theme})=> theme.colors.white};

    box-shadow: 0px -10px 15px rgba(000,000,000,.6);

    ul{
      margin-top: 120px;
      padding-left: 0;

      display: flex;
      flex-direction: column;

      align-items: center;
    }
  }

  svg{
      position: absolute;
      right: 35px;
      top: 30px;

      z-index: 99;

      display: none;

      fill: ${({theme}) => theme.colors.black};
      width: 2rem;
      height: 2rem;
    }

  @media (max-width: 1050px) {

    nav{
      display:initial;
    }



    svg{
      display: initial;
    }
  }
`
