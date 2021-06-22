import styled from "@emotion/styled";

const style = (Component) => styled(Component)`

.card{
    height: 400px;
width: 300px;
background: #FFFFFF;
border-radius: 11px;
filter: drop-shadow(4px 11px 10px rgba(0, 0, 0, 0.125));
}

h2{
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
}

.card-border{
    background: #575CCC;
border-radius: 11px 11px 0px 0px;
width:100%;
position:absolute;
top:0%;
}

.btn{
min-height:50px;
padding: 5px;
width: 200px;
border-radius: 5px;
background: #F2295B;
box-shadow: 0px 4px 4px 0px #00000040;
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
}

h4{
font-size: 20px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;

}

p{


font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;

}

.card-increase{
    height: 650px;
    transition: 0.5s;
}

input[type=range] {
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #ECECEC;
  border-radius: 10px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #F2295B;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ECECEC;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #ECECEC;
  border-radius: 10px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #F2295B;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #ECECEC;
  border: 0px solid #000000;
  border-radius: 20px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #ECECEC;
  border: 0px solid #000000;
  border-radius: 20px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 1px #000000;
  border: 0px solid #000000;
  height: 22px;
  width: 22px;
  border-radius: 50px;
  background: #F2295B;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #ECECEC;
}
input[type=range]:focus::-ms-fill-upper {
  background: #ECECEC;
}

`;

export default style;
