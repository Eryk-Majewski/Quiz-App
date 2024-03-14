import questionList from "../questions";
import { useState, useEffect, useRef } from "react";

export default function Question({ state, dispatch }) {
	const [progress, setProgress] = useState(100);

	useEffect(() => {
		// Reset progress when the question changes
		setProgress(100);

		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress > 0 ? prevProgress - 0.1 : 0
			);
		}, 10); // decrease every second
		// Cleanup interval on unmount or question change
		return () => clearInterval(timer);
	}, [state.questionNumber]);

	useEffect(() => {
		if (progress === 0) {
			dispatch({
				type: "ANSWER_SKIPPED",
				selectedAnswer: "Skipped",
			});
		}
	}, [progress]);

	return (
		<section id="quiz">
			<div id="question">
				<progress value={progress} max={100}></progress>
				<h2>{questionList[state.questionNumber].text}</h2>
			</div>
			<ul id="answers">
				{questionList[state.questionNumber].answers.map((answer) => (
					<li className="answer" key={answer.id}>
						<button
							onClick={(event) => {
								dispatch({
									type: answer.type,
									selectedAnswer: answer.text,
								});
								event.currentTarget.blur();
							}}
						>
							{answer.text}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}
