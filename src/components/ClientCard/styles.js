import styled from "@emotion/styled";

const style = (Component) => styled(Component)`
  * {
    font-family: Lato;
  }
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
    color: #f2295b;
    margin-top: 28px;
  }

  h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    align-items: center;
    text-transform: uppercase;
    color: #121212;
  }

  p {
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #121212;
  }

  .card-body-internal {
    height: 240px;
    width: 310px;
    border-radius: 11px;
    background: #ffffff;
    border: 7px linear-gradient(180deg, #575ccc 0%, #f2295b 100%);
  }

  .card-border {
    height: 255px;
    width: 325px;
    background: linear-gradient(180deg, #575ccc 0%, #f2295b 100%);
    border-radius: 11px;
  }
`;

export default style;
