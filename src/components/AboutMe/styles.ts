import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10%;
  margin-top: 30px;

  display: flex;
  align-items: center;
  text-align: center;

  img{
    width: 400px;
    height: fit-content;

    border-radius: 40%;
    box-shadow: 0px 15px 30px rgba(000,000,000,.5);
  }

  .textoAM{
    margin: 0 5%;
    font-size: 1.2rem;
  }

  @media(max-width: 1050px) {
    padding: 0 3%;
    
    .textoAM{
      margin: 0;
      font-size: 1rem;
    }

    img{
      width: 200px;
    }

    flex-direction: column;
    gap: 3rem;
  }
`
