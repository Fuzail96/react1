import React from 'react';
import {Brand} from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
import {Card} from './Card';
import Modal from "../components/Modal";
import {Link, Route, BrowserRouter} from 'react-router-dom';


export function Dashboard() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Brand/>
        <BrowserRouter>
          <div>
            <Modal/>
          </div>
        </BrowserRouter>
      </Container>
    </>
  );
}