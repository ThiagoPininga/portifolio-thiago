import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem 0;

  padding: 0 7%;

  h1{
    text-align: center;
    margin-bottom:4.5rem;
    font-weight: 800;
  }

  .texto{
    display: flex;
    align-items: center;

    margin-bottom: 2rem;
    font-weight: 550;

    h3{
      text-decoration: underline;
      font-size: 1.3rem;
    }

    img{
      margin: 0 1rem;
      width: 300px;
    }
  }

  @media (max-width:900px) {
    .texto{
      flex-direction: column;
      gap: 3rem;

      margin-bottom: 3rem;

      img{
        width: 150px;
      }
    }

    .PHP{
      flex-direction: column-reverse;
    }


  }
`
