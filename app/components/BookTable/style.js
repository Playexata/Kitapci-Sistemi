import styled from 'styled-components';
const BookTableMain = styled.div`
  margin: auto;
  width: 540px;
  text-align: center;
`;
const SerchContainer = styled.div`
  margin: center;
  padding-left: 25%;
  padding-top: 10px;
`;
const Input = styled.input`
  border-radius: 5px;
  border: solid;
  float: left;
  margin-right: 5px;
`;
const Controller = styled.div`
margin-left:20%;
`;
const ControllerLeft = styled.div`
width:100px;
cursor:pointer;
border:1px solid blue;
border-radius:25px;
float:left;
`;
const ControllerPage = styled.div`
width:100px;
cursor:pointer;
float:left;
`;
const ControllerRight = styled.div`
width:100px;
cursor:pointer;
border:1px solid blue;
border-radius:25px;
float:left;
`;
export { BookTableMain, Input, SerchContainer, Controller, ControllerLeft, ControllerPage, ControllerRight };
