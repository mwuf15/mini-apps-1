import React from 'react';
import App from './App.jsx';


const Board = ({handleClick}) => {

  return (
    <table className="board">
      <tbody>
        <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        </tr>
      <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
      </tr>
      <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
      </tr>
      <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
      </tr>
      <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
      </tr>
      <tr>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button type="button" onClick={handleClick}></button></td>
        <td><button id="17" type="button" onClick={handleClick}></button></td>
      </tr>
      </tbody>
    </table>
  )
  };

export default Board;