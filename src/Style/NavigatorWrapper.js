import styled from "styled-components"

export const  NavigatorWrapper2 = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(156, 148, 187, 0.5);

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 3rem;
    
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0rem;
    .menu-btn {
      display: block;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .nav-links {
      display: none;
    }
  }    
`


export const  NavigatorWrapper = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(156, 148, 187, 0.5);

  nav {
    display: flex;
    justify-content: space-between;
    margin: 0 3rem;
    
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0rem;
    .menu-btn {
      display: block;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .nav-links {
      display: none;
    }
  }

  .nav-right {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .cart-btn {
      position: relative;

      svg,
      path {
        fill: hsl(var(--black));
      }

      span {
        user-select: none;
        position: absolute;
        top: -1rem;
        right: -1rem;
        background-color: hsl(var(--orange));
        font-weight: 700;
        color: hsl(var(--white));
        border-radius: 50%;
        padding: 0.3rem 0.8rem;
        font-size: 1.1rem;
      }
    }

    .avatar-btn {
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 30px;
    padding-bottom: 4rem;
    .nav-left {
      .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin-left: 3rem;
        a {
          text-decoration: none;
          font-size: 1.5rem;
          text-transform: capitalize;
          color: hsl(var(--dark-grayish-blue));
        }
      }
    }

    .nav-right {
      gap: 2.4rem;

      .avatar-btn {
        height: 3.5rem;
        width: 3.5rem;
        &:hover {
          outline: 2px solid hsl(var(--orange));
        }
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    max-width: 100%;
    margin: 0 auto;

    .nav-right {
      gap: 4.7rem;
      justify-content: space-between;
      .avatar-btn {
        height: 5rem;
        width: 5rem;

        img {
          width: 100%;
        }
      }
    }
  }
`
