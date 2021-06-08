import styled from "@emotion/styled";

const style = (Component) => styled(Component)`
  .titulo-strong {
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }
  .titulo {
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
  }
  p {
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default style;
