// Importing Modules //
import React from "react";
import "./App.css";

// Declaring components //
function checkWinnerBlock(blockNum, winnerArr) {
	if (winnerArr && winnerArr.includes(Number(blockNum))) return true;
	return false;
}

// generating class name for square
function sqClass(isWinner) {
	if (isWinner) {
		return "square grid-center winnerSquare";
	}
	return "square grid-center";
}

// Square
function Square(props) {
	return (
		<div
			onClick={() => props.moveHandle(props.sqNum)}
			className={sqClass(checkWinnerBlock(props.sqNum, props.winnerBlocks))}
		>
			{props.value}
		</div>
	);
}

// Tic-tac-toe game board
function Board(props) {
	return (
		<>
			<div className="squareContainer">
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="0"
					value={props.squareValue[0]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="1"
					value={props.squareValue[1]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="2"
					value={props.squareValue[2]}
				/>
			</div>
			<div className="squareContainer">
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="3"
					value={props.squareValue[3]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="4"
					value={props.squareValue[4]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="5"
					value={props.squareValue[5]}
				/>
			</div>
			<div className="squareContainer">
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="6"
					value={props.squareValue[6]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="7"
					value={props.squareValue[7]}
				/>
				<Square
					winnerBlocks={props.winnerBlocks}
					moveHandle={props.moveHandle}
					sqNum="8"
					value={props.squareValue[8]}
				/>
			</div>
		</>
	);
}

// Exporting Components //
export default Board;
