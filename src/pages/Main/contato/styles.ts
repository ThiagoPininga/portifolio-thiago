import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 5rem;

  .contact{
    display: flex;
    width: 50%;
    flex-direction: column;
    border-radius: 6px;
    align-self: start;

    margin: 5% 25%;
    padding: 5% 0;

    gap: 2rem;

    background-color: ${({theme}) => theme.colors.gray500};
    box-shadow: 0px 15px 15px rgba(000,000,000,.6);

    p{
      font-size:1.6rem;

      a{
        color: black;

        transition: color .5s;

        &:hover{
          color: ${({theme}) => theme.colors.gray700};
        }
      }
    }
  }

  @media (max-width: 1050px){
    .contact{
      width: 85%;
      margin: 0 7.5%;
      border-radius: 6px;

      p{
        font-size: 1.1rem
      }
    }

    .curriculo{
      img{
        width: 98%;
      }
        margin: 5% 1%;
    }

  }
`
