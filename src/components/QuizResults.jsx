import questions from "../questions";
export default function QuizResults({ state }) {
	return (
		<section id="summary">
			<img
				src="quiz-complete.png"
				alt="Graphic showing a pink and blue trophy"
			/>
			<h2>QUIZ COMPLETED!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">
						{Math.round((state.skippedAnswers * 100) / questions.length)}%
					</span>
					<span className="text">Skipped</span>
				</p>
				<p>
					<span className="number">
						{Math.round((state.correctAnswers * 100) / questions.length)}%
					</span>
					<span className="text">Answered correctly</span>
				</p>
				<p>
					<span className="number">
						{Math.round((state.wrongAnswers * 100) / questions.length)}%
					</span>
					<span className="text">Answered incorrectly</span>
				</p>
			</div>
			<ol>
				{state.userAnswers.map((answer, index) => {
					const correctAns = questions[index].answers.find(
						(ans) => ans.type == "ANSWER_CORRECT"
					);
					const isCorrect = answer == correctAns.text;

					return (
						<li key={index}>
							<h3>{index}</h3>
							<p>{questions[index].text}</p>
							<p className={isCorrect ? "correct" : "wrong"}>{answer}</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
