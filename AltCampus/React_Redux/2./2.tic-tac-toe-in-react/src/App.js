// Importing Modules //
import React from "react";
import Board from "./Board.js";
import "./App.css";

// Declaring functions and classes //
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			squaresValue: Array(9).fill(null),
			move: 0,
			timeline: [],
			isXTurn: true
		};
		this.winnerBlocks = Array(3).fill(null);
	}

	checkTurn = move => (move % 2 === 0 ? true : false);

	// function to check for winner
	checkWinner = () => {
		// extracting sqauresValue
		const squaresValue = this.state.squaresValue.slice();
		// match possibilities
		const MATCHES = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0, n = MATCHES.length; i < n; i++) {
			// destructing possible match
			let [a, b, c] = MATCHES[i];
			if (
				squaresValue[a] &&
				squaresValue[a] === squaresValue[b] &&
				squaresValue[b] === squaresValue[c]
			) {
				this.winnerBlocks = [a, b, c];
				return squaresValue[a];
			}
		}
		this.winnerBlocks = Array(3).fill(null);
		return null;
	};

	// handling click on each square
	handleClick = sqNum => {
		// extracting and updating values
		let squaresValue = this.state.squaresValue.slice();
		let timeline = this.state.timeline.slice();
		// updating value of the square only if null
		if (!squaresValue[Number(sqNum)] && !this.checkWinner()) {
			squaresValue[Number(sqNum)] = this.state.isXTurn ? "X" : "O";
			// updating move
			let move = this.state.move + 1;

			// at this point the lenght of the timeline array should be equal to move - 1
			// and the last index should be equal to move - 2
			// Hence filtering out indexes less than or equal to move - 2
			if (timeline.length > move - 1) {
				timeline = timeline.filter((state, index) => index <= move - 2);
			}

			timeline.push({
				state: squaresValue
			});

			// updating state
			this.setState({
				squaresValue: squaresValue,
				isXTurn: this.checkTurn(move),
				move: move,
				timeline: timeline
			});
		} else if (this.checkWinner()) {
			alert("Game Over, reset to play again!");
		} else {
			alert("Choose a different block!");
		}
	};

	// handling timeline click
	handleTimelineClick = (move, event = {}) => {
		// checking if reset button fired the event
		if (event.target.value === "Reset") {
			this.setState({
				squaresValue: Array(9).fill(null),
				move: 0,
				timeline: [],
				isXTurn: true
			});
			return 0;
		}

		let chosenState = this.state.timeline[move - 1];

		// updating current state
		this.setState({
			squaresValue: move ? chosenState.state : Array(9).fill(null),
			move: move,
			isXTurn: this.checkTurn(move)
		});
	};

	render() {
		// calculating game status
		let status = this.checkWinner()
			? "Winner is " + this.checkWinner()
			: this.state.move < 9
			? this.state.isXTurn
				? "Next Turn: X"
				: "Next Turn: O"
			: "Game Over. It's a DRAW.";

		// let gameState = this.state.timeline ? this.state.timeline[this.state.timeline.length - 1].slice() : null;

		return (
			<article>
				<section className="boardContainer margin-bottom">
					<Board
						winnerBlocks={this.winnerBlocks}
						moveHandle={this.handleClick}
						squareValue={this.state.squaresValue}
					/>
				</section>

				<hr className="width-50vw margin-bottom" />

				<section className="text-center">
					<div className="margin-bottom text-center">{status}</div>
					<button
						className="margin-top"
						value="Reset"
						onClick={event => this.handleTimelineClick(0, event)}
					>
						Reset
					</button>

					<div className="text-center">
						<h2>TIMELINE:</h2>
						<ul className="timelineContainer text-center">
							{this.state.timeline.map((state, move) => {
								return (
									<li className="margin-bottom-10" key={move}>
										<button
											onClick={event => this.handleTimelineClick(move, event)}
										>
											{move ? "Go to move " + move : "Go to start"}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</article>
		);
	}
}

// Exporting components //
export default App;
