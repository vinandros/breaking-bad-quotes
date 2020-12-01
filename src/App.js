import React from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Buttom = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 311px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [quote, setQuote] = React.useState({});

  const handleClick = async () => {
    try {
      const request = await fetch(
        "http://breaking-bad-quotes.herokuapp.com/v1/quotes"
      );
      const jsonRes = await request.json();
      setQuote(jsonRes[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleClick();
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <Buttom onClick={handleClick}>Request Quote</Buttom>;
    </Container>
  );
}

export default App;
