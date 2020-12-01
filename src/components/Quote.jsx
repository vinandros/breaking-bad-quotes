import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {
  //   if (Object.keys(quote).length === 0) {
  //     return null;
  //   }
  return (
    <Container>
      <h1>{quote.quote}</h1>
      <p>- {quote.author}</p>
    </Container>
  );
};

export default Quote;
