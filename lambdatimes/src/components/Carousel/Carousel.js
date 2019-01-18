import React, { Component } from "react";
import { carouselData } from "../../data";
import styled, { css } from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const CarouselButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  ${props =>
    props.left &&
    css`
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
    `}

  ${props =>
    props.right &&
    css`
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
    `}

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      currentImgIndex: 0
    };
  }
  componentDidMount() {
    this.setState(
      {
        carouselData: carouselData
      },
      () => console.log(this.state.carouselData)
    );
  }

  leftClick = () => {
    let nextImg = this.state.currentImgIndex - 1;
    if (this.state.currentImgIndex === 0) {
      nextImg = 3;
    }
    this.setState(
      {
        currentImgIndex: nextImg
      },
      () => this.selectedImage()
    );
  };

  rightClick = () => {
    let nextImg = this.state.currentImgIndex + 1;
    if (this.state.currentImgIndex === 3) {
      nextImg = 0;
    }
    this.setState(
      {
        currentImgIndex: nextImg
      },
      () => this.selectedImage()
    );
  };

  selectedImage = () => {
    return (
      <img
        src={`../../../${this.state.carouselData[this.state.currentImgIndex]}`}
        style={{ display: "block" }}
        alt="Lambda Times carousel"
      />
    );
  };

  render() {
    return (
      <CarouselContainer>
        <CarouselButton left onClick={this.leftClick}>
          {"<"}
        </CarouselButton>
        <div className="image__wrapper">{this.selectedImage()}</div>
        <CarouselButton right onClick={this.rightClick}>
          {">"}
        </CarouselButton>
      </CarouselContainer>
    );
  }
}
