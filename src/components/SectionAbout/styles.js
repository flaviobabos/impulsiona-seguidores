import styled from "@emotion/styled";

const style = (Component) => styled(Component)`
  .titulo-strong {
    font-size: 42px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;
  }
  .titulo {
    font-size: 42px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;
  }
  .normal {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export default style;
