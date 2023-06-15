import styled from 'styled-components'
import { ReactComponent as SVG_arrow } from "../img/arrow.svg";

function Home() {
  return (
    <Container>
      <img src={"/car.png"} alt="car image" />
      <h1>Web Control Rc Car</h1>
      <button>Connect Car</button>
      <BtnWrap>
        <div style={{ marginRight: 25, marginLeft: 10 }}>
          <MoveBtn rot="0"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
          <MoveBtn rot="180"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
        </div>
        <div style={{ display: "flex" }}>
          <MoveBtn rot="-90"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
          <MoveBtn rot="90"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
        </div>
      </BtnWrap>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  img {
    width:110px;
    height:auto;
    margin-bottom: 12px;
  }
  h1{
    font-weight: bold;
    font-size: 20px;
  }
  button{
    border:none;
    color:white;
    margin-top: 100px;
    margin-bottom: 60px;
    font-size: 16px;
    padding: 12px 16px;
    background-color: #6F9DF6;
    border-radius: 8px;
    &:hover{
      background-color: #5f88d8;
    }
  }
`
const BtnWrap = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`
const MoveBtn = styled.div < { rot: string }> `
  width:60px;
  height:60px;
  background: #898989;
  box-shadow: 0px 6px 0px #484848;
  border-radius: 100px;
  margin: 18px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    transform: ${({ rot }: { rot: string }) => `rotate(${rot}deg)`};
  }
`

export default Home
