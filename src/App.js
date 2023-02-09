import {useState, useEffect} from "react";

function App() {
  const[counter,setValue] = useState(0);
  const[keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // 렌더링시 항상 실행되는 코드
  console.log("i run all the time");

  // 최초 렌더링 시에만 실행되는 코드
  useEffect(()=>{
    console.log("I Run Only Once..");
  }, []);

  // keyword 의 값이 바뀔 때에만 실행되는 코드
  useEffect(()=>{
    if(keyword !=="" && keyword.length > 5){
    console.log("SEARCH FOR", keyword);
    };
  },[keyword]);
  // counter 의 값이 바뀔 떄에만 실행되는 코드
  useEffect(()=>{
    if(counter !== 0 ){
    console.log("I Run When 'counter' Changes!");
    }
  },[counter]);
  // keyword, counter 의 값이 바뀔떄 실행되는 코드
  useEffect(()=>{
    console.log("I Run When Keyword & Counter Chages!")
  },[keyword,counter]);
  return (
    <div>
      <input 
        value = {keyword} 
        onChange = {onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default App;
