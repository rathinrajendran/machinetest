import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import arrow from "../components/assets/img/arrow.png";

const Carousals = () => {
  const countries = [
    {
      name: "Åland Islands",
      region: "Europe",
      flag: "https://flagcdn.com/ax.svg",
      independent: false,
    },
    {
      name: "Albania",
      region: "Europe",
      flag: "https://flagcdn.com/al.svg",
      independent: false,
    },
    {
      name: "Algeria",
      region: "Africa",
      flag: "https://flagcdn.com/dz.svg",
      independent: false,
    },
  ];

  return (
    <Main>
      <Carousel
        nextIcon={<img src={arrow} alt="" />}
        prevIcon={<img src={arrow} alt="" />}
        pause={true}
      >
        {countries.map((country, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={country.flag}
              alt={country.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Main>
  );
};

export default Carousals;
const Main = styled.div`
  .carousel-item {
    img {
      object-position: center;
      object-fit: cover;
      height: 500px;
      @media (max-width: 767px) {
        height: 200px;
      }
    }
  }
  .carousel-indicators {
    bottom: 10px;
    button {
      width: 14px !important;
      height: 14px !important;
      border-radius: 50%;
      border: none !important;
      margin: 0 5px;
      opacity: 1;
      &.active {
        background: #000000;
      }
    }
  }
  .carousel-control-prev {
    left: 35%;
    img {
      transform: rotate(180deg);
    }
    @media (max-width: 767px) {
      left: 10%;
    }
  }
  .carousel-control-next {
    right: 35%;
    @media (max-width: 767px) {
      right: 10%;
    }
  }
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    height: 15px;
    bottom: 25px;
    z-index: 999;
    width: auto;
    top: auto;
    img {
      filter: invert(1);
    }
  }
`;
