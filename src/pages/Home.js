import styled from 'styled-components'
import { ReactComponent as SVG_arrow } from "../img/arrow.svg";
import { ReactComponent as SVG_stop } from "../img/stop.svg";


function Home() {
  let deviceName = 'HMSoft';
  let serviceUUID = 0xFFE0;
  let characteristicUUID = 0xFFE1;

  let device;
  let characteristic;
  let server;
  let service;

  async function connect() {
    device = await navigator.bluetooth.requestDevice({
      filters: [{ services: [serviceUUID] }]
    })
    server = await device.gatt.connect();
    service = await server.getPrimaryService(serviceUUID);
    characteristic = await service.getCharacteristic(characteristicUUID);
    console.log(server, service, characteristic)
  }

  async function sendData(prop) {
    let data = prop;
    await characteristic.writeValue(new TextEncoder().encode(data)).then(() => {
      console.log('Data sent: ' + data);
    });
  }

  return (
    <Container>
      {/* <div onClick={connect}>Conntect</div>
      <div onClick={sendData}>Send</div> */}
      <img src={"/car.png"} alt="car image" />
      <h1>Web Control Rc Car</h1>
      <button onClick={connect}>
        {
          characteristic ? "Connected!" : "Connect Car"
        }
      </button>
      <BtnWrap>
        <div style={{ marginRight: 25, marginLeft: 10 }}>
          <MoveBtn rot="-90" onClick={() => { sendData(1) }}><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
          <MoveBtn rot="0" onClick={() => { sendData(0) }}><SVG_stop width={24} height={24} fill='white' /></MoveBtn>
          <MoveBtn rot="90" onClick={() => { sendData(2) }}><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
        </div>
        {/* <div style={{ display: "flex" }}>
          <MoveBtn rot="180"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
          <MoveBtn rot="0"><SVG_arrow width={28} height={28} fill='white' /></MoveBtn>
        </div> */}
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
const MoveBtn = styled.div`
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
    transform: ${({ rot }) => `rotate(${rot}deg)`};
  }
`

export default Home
