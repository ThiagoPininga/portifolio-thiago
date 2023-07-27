import styled from "styled-components";



export const Container = styled.header`
  header{
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 12px;

    box-shadow: 0px 2px 20px rgba(111,111,111,.5);

    button{
      background:none;
      border: none;

      width: 1rem;


    }

    svg{
        fill: ${({theme}) => theme.colors.black};
        width: 1rem;
        height: 1rem;
      }

    img{
      width: 6rem;
      margin-left:20px ;
    }

    nav{
      margin-right: 3rem;
    }

    .menuHam{
      display: none;
    }

    ul{
      display: flex;
      flex-direction: row;

      gap: 3rem;

      a{
        text-decoration: none;
        margin-right: 1rem;
        text-align:center;

        color: ${({theme}) => theme.colors.black};
        font-size: 1.4rem;
        font-weight: 600;

        transition: color .3s;

        &:hover{
          text-decoration: underline;
          color: ${({theme}) => theme.colors.gray600};
        }
      }
    }
  }
`
