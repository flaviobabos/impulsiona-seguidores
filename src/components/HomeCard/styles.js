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

`;

export default style;