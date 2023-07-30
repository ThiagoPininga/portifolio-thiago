import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10%;

  h1{
    text-align: center;
    margin: 5rem 0;
  }

  .projetos{
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
      }
    }
  }

  @media (max-width: 1050px){
    margin

    .projetos{
      margin: 0 3%;
      padding: 0 2%;
      width: 90%;
    }
  }
`
