import { css } from "styled-components";

export const global = css`
  @font-face {
    font-family: "PT Sans";
    font-style: italic;
    font-weight: 400;
    src: local("PT Sans Italic"), local("PTSans-Italic"),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf)
        format("truetype");
  }
  @font-face {
    font-family: "PT Sans";
    font-style: italic;
    font-weight: 700;
    src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf)
        format("truetype");
  }
  @font-face {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 400;
    src: local("PT Sans"), local("PTSans-Regular"),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf)
        format("truetype");
  }
  @font-face {
    font-family: "PT Sans";
    font-style: normal;
    font-weight: 700;
    src: local("PT Sans Bold"), local("PTSans-Bold"),
      url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf)
        format("truetype");
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f1f1f1;
    color: #333;
    font-family: "PT Sans", sans-serif;
  }
  #root {
    width: 100%;
  }
  .App {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: "PT Sans", sans-serif;
  }
`;

export default global;

// .carousel {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   height: 500px;
//   position: relative;
//   overflow: hidden;
//   margin-top: 16px;
// }
// @media (min-width: 1200px) {
//   .carousel {
//     width: 1200px;
//   }
// }
// .carousel .left-button,
// .carousel .right-button {
//   display: flex;
//   justify-content: center;
//   align-items: none;
//   flex-direction: row;
//   color: #fff;
//   background-color: #333;
//   font-size: 40px;
//   border-radius: 50%;
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
// }
// .carousel .left-button:hover,
// .carousel .right-button:hover {
//   color: #333;
//   background-color: #fff;
//   border: 2px solid #333;
// }
// .carousel .left-button {
//   top: 50%;
//   left: 25px;
//   transform: translate(0, -50%);
// }
// .carousel .right-button {
//   top: 50%;
//   right: 25px;
//   transform: translate(0, -50%);
// }
// .carousel img {
//   width: 100%;
//   display: none;
// }
