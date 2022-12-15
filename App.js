import './App.css';

import {useState,useRef,useEffect} from "react"
import {FaChessPawn} from "react-icons/fa";
import {FaChessKnight} from "react-icons/fa";
import {FaChessKing} from "react-icons/fa";
import {FaChessBishop} from "react-icons/fa";
import {FaChessQueen} from "react-icons/fa";
import {FaChessRook} from "react-icons/fa";

function App() {
  const [map,setMap]=useState([
    ["8a-w","8b-b","8c-w","8d-b","8e-w","8f-b","8g-w","8h-b"],
    ["7a-b","7b-w","7c-b","7d-w","7e-b","7f-w","7g-b","7h-w"],
    ["6a-w","6b-b","6c-w","6d-b","6e-w","6f-b","6g-w","6h-b"],
    ["5a-b","5b-w","5c-b","5d-w","5e-b","5f-w","5g-b","5h-w"],
    ["4a-w","4b-b","4c-w","4d-b","4e-w","4f-b","4g-w","4h-b"],
    ["3a-b","3b-w","3c-b","3d-w","3e-b","3f-w","3g-b","3h-w"],
    ["2a-w","2b-b","2c-w","2d-b","2e-w","2f-b","2g-w","2h-b"],
    ["1a-b","1b-w","1c-b","1d-w","1e-b","1f-w","1g-b","1h-w"]
  ]);

  const [pieces,setPieces]=useState([
    ["R-b","H-b","B-b","K-b","Q-b","B-b","H-b","R-b"],
    ["P-b","P-b","P-b","P-b","P-b","P-b","P-b","P-b"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P-w","P-w","P-w","P-w","P-w","P-w","P-w","P-w"],
    ["R-w","H-w","B-w","K-w","Q-w","B-w","H-w","R-w"]
  ]);

  function pieceConvertor(piece){
    switch(piece){
      case "R-b" :  return <FaChessRook style={{color:"black",fontSize:"50px"}}></FaChessRook>
      break;

      case "H-b" : return <FaChessKnight style={{color:"black",fontSize:"50px"}}></FaChessKnight>
      break;

      case "B-b" : return <FaChessBishop style={{color:"black",fontSize:"50px"}}></FaChessBishop>
      break;

      case "K-b" : return <FaChessKing style={{color:"black",fontSize:"50px"}}></FaChessKing>
      break;

      case "Q-b" : return <FaChessQueen style={{color:"black",fontSize:"50px"}}></FaChessQueen>
      break;

      case "P-b" : return <FaChessPawn style={{color:"black",fontSize:"50px"}}></FaChessPawn>
      break;
      //
      case "R-w" : return <FaChessRook style={{color:"white",fontSize:"50px"}}></FaChessRook>
      break;

      case "H-w" : return <FaChessKnight style={{color:"white",fontSize:"50px"}}></FaChessKnight>
      break;

      case "B-w" : return <FaChessBishop style={{color:"white",fontSize:"50px"}}></FaChessBishop>
      break;

      case "K-w" : return <FaChessKing style={{color:"white",fontSize:"50px"}}></FaChessKing>
      break;

      case "Q-w" : return <FaChessQueen style={{color:"white",fontSize:"50px"}}></FaChessQueen>
      break;

      case "P-w" : return <FaChessPawn style={{color:"white",fontSize:"50px"}}></FaChessPawn>
      break;
      
    }

  }

  let [chosenCard,setChosenCard]=useState({x:-1,y:-1,piece:null});

  console.log(chosenCard);

  window.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
      if(chosenCard.x!=-1 && chosenCard.y!=-1){
        setChosenCard(chosenCard.x=-1,chosenCard.y=-1);
      }
    }
  })

  return (
    <div className='container'>
      {
        map.map((card,i)=>{
          return(
            card.map((block,j)=>{
              let color;
              if(block[3]=="b"){
                color="black";
              }
              return(
                <div className={(chosenCard.x==i && chosenCard.y==j) ? "card-chosen" : color=="black" ? "card-black" : "card-white"} key={block} onClick={()=>{
                  setChosenCard(chosenCard={x:i,y:j,piece:pieces[i][j]})
                }}>{pieceConvertor(pieces[i][j])}</div>
              )
            })
          )
        })
      }
    </div>
  );
}

export default App;
