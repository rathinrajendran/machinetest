import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  loadMore,
} from "../../features/countries/countriesSlice";
import CountryCard from "../../components/CountryCard";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";
import Button from "../../components/Button";
import PageFooter from "../components/PageFooter";
import PageNav from "../components/PageNav";
import Carousals from "../components/Carousals";

const HomePage = () => {
  const dispatch = useDispatch();
  const { countries, status, visibleCount, filter } = useSelector(
    (state) => state.countries,
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  const filteredCountries = countries.filter((country) =>
    filter === "All" ? true : country.region === filter,
  );
  const visibleCountries = filteredCountries.slice(0, visibleCount);

  return (
    <Main>
      <PageNav filter={filter} />
      <Row className="m-0">
        <div className="heading">
          <h1>Welcome</h1>
        </div>
      </Row>
      <Row className="mt-4 pt-2 flex-column-reverse flex-md-row">
        <Col md={9}>
          <Carousals />
        </Col>
        <Col md={3} className="pb-4 pb-md-0">
          <ImgBlock
            src="https://flagcdn.com/al.svg"
            alt="ao"
            className="single-block"
          />
        </Col>
      </Row>
      <CardBlock>
        <Container className="mt-4">
          <Row>
            {status === "loading" ? (
              <div className="text-center py-4">
                <Spinner animation="border" />
              </div>
            ) : (
              visibleCountries.map((country, index) => (
                <Col key={index} md={6} className="mb-4">
                  <CountryCard data={country} />
                </Col>
              ))
            )}
          </Row>

          {visibleCount < filteredCountries.length && (
            <div className="text-center my-4">
              <Button onClick={() => dispatch(loadMore())} padding="0 25px">
                Load More
              </Button>
            </div>
          )}
        </Container>
      </CardBlock>
      <PageFooter />
    </Main>
  );
};

export default HomePage;

const Main = styled.div`
  font-family: "Noto Sans", sans-serif;
  max-width: 1150px;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin: 0 20px;
    .heading {
      padding: 10px 0;
    }
  }
  .heading {
    position: relative;
    text-align: center;

    h1 {
      font-family: "Noto Sans", sans-serif;
      text-transform: uppercase;
      display: inline-block;
      position: relative;
      color: #3d3d3d;
      font-weight: 700;
      padding: 0 20px;
      font-size: 36px;
      margin: 0;
      @media (max-width: 767px) {
        width: 100%;
        padding: 10px 0;
      }
      &::before,
      &::after {
        background: #3d3d3d;
        position: absolute;
        width: 1500px;
        content: "";
      }

      &::before {
        right: 100%;
        top: 0;
        height: 2px;
        @media (max-width: 767px) {
          right: 0;
          left: 0;
        }
      }

      &::after {
        left: 100%;
        bottom: 0;
        height: 2.5px;
        @media (max-width: 767px) {
          right: 0;
          left: 0;
          height: 1px;
        }
      }
    }
  }
  .single-block {
    @media (max-width: 767px) {
      height: 150px;
    }
  }
  .navbar-toggler {
    box-shadow: none !important;
    outline: none !important;
    border: none !important;
    padding: 0;
  }
`;

const CardBlock = styled.div`
  margin: 0 -10px;
  & > .container {
    padding: 0 20px;
  }
`;

const ImgBlock = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
