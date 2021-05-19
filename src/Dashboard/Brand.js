import React from 'react';
import {Card} from './Card';


export function Brand() {
  const size= '20px'
  return (
    <Card height={100} style={{backgroundColor: 'aquamarine'}}>
    <div>
        <h1 style={{fontSize: {size}, fontFamily: 'cursive'}}>My To Dos</h1>
    </div>
    </Card>
  );
}