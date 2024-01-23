import styled from "styled-components";

export const Container = styled.div`

    background-color: grey;
    padding: 10px;
    margin: 3rem;
    box-shadow: 0px 15px 30px rgba(000,000,000,.7);

    border-radius: 20px;

    h3{
      text-align: center;
      margin: 2rem;
    }

    img{
      width: 100%;
      border-radius: 20px;
    }

    p{
      font-size: 1.3rem;
      font-weight: 500;
    }

    .linkProjeto{
      margin: 2rem 0;
      text-align: center;

      a{
        color: black;
        transition: all .4s ease-in-out;
        
        &:hover{
          color:white;
        }
      }
    }

  @media (max-width: 1050px){
    margin: 20px 3%;
    padding: 15px 2%;
    width: 90%;
  }
`
