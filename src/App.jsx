import Question from "./components/Question";
import { useReducer, useEffect } from "react";
import QuizResults from "./components/QuizResults";
import Header from "./components/Header";

const initialState = {
	questionNumber: 0,
	correctAnswers: 0,
	skippedAnswers: 0,
	wrongAnswers: 0,
	userAnswers: [],
};

function reducer(state, action) {
	switch (action.type) {
		case "ANSWER_CORRECT":
			console.log(action);
			return {
				...state,
				correctAnswers: state.correctAnswers + 1,
				questionNumber: state.questionNumber + 1,
				userAnswers: [...state.userAnswers, action.selectedAnswer],
			};
		case "ANSWER_WRONG":
			console.log(action);
			return {
				...state,
				wrongAnswers: state.wrongAnswers + 1,
				questionNumber: state.questionNumber + 1,
				userAnswers: [...state.userAnswers, action.selectedAnswer],
			};
		case "ANSWER_SKIPPED":
			console.log(action);
			return {
				...state,
				skippedAnswers: state.skippedAnswers + 1,
				questionNumber: state.questionNumber + 1,
				userAnswers: [...state.userAnswers, "Skipped"],
			};
		default:
			throw new Error("Wrong dispatch value");
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(state.questionNumber);
	return (
		<>
			<Header />
			{state.questionNumber < 7 ? (
				<Question state={state} dispatch={dispatch} />
			) : (
				<QuizResults state={state} />
			)}
		</>
	);
}

export default App;
