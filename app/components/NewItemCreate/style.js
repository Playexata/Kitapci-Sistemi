import styled from 'styled-components';
const CreateBar = styled.div`
  margin: auto;
  background-color: aqua;
  border-radius: 20px;
  border: 2px solid;
  height: 250px;
  width: 85%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  overflow: auto;
`;
const BigBox = styled.div`
  margin: auto;
  text-align: center;
  width: 760px;
`;
const LittleBox = styled.div`
  margin-right: 50px;
  left: 50px;
  background-color: aliceblue;
  border-radius: 20px;
  border: 2px solid;
  width: 200px;
  height: 75px;
  float: left;
`;
const TextA = styled.div`
  top: 0px;
  font-size: xx-large;
`;
const Bottom = styled.div`
  margin: auto;
  top: 10px;
  position: relative;
`;
export { CreateBar, LittleBox, BigBox, Bottom, TextA };
