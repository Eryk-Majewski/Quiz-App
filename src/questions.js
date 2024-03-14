export default [
	{
		id: "q1",
		text: "Which of the following definitions best describes React.js?",
		answers: [
			{
				text: "A library for managing state in web applications.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A library to build user interfaces with help of declarative code.",
				type: "ANSWER_CORRECT",
			},
			{
				text: "A framework to build user interfaces with help of imperative code.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A library used for building mobile applications only.",
				type: "ANSWER_WRONG",
			},
		],
	},
	{
		id: "q2",
		text: "What purpose do React hooks serve?",
		answers: [
			{
				text: "Enabling the use of state and other React features in functional components.",
				type: "ANSWER_CORRECT",
			},
			{
				text: "Creating responsive layouts in React applications.",
				type: "ANSWER_WRONG",
			},
			{ text: "Handling errors within the application.", type: "ANSWER_WRONG" },
			{
				text: "Part of the Redux library for managing global state.",
				type: "ANSWER_WRONG",
			},
		],
	},
	{
		id: "q3",
		text: "Can you identify what JSX is?",
		answers: [
			{
				text: "A JavaScript library for building dynamic user interfaces.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A specific HTML version that was explicitly created for React.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A tool for making HTTP requests in a React application.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A JavaScript extension that adds HTML-like syntax to JavaScript.",
				type: "ANSWER_CORRECT",
			},
		],
	},
	{
		id: "q4",
		text: "What is the most common way to create a component in React?",
		answers: [
			{
				text: "By defining a JavaScript function that returns a renderable value.",
				type: "ANSWER_CORRECT",
			},
			{
				text: "By defining a custom HTML tag in JavaScript.",
				type: "ANSWER_WRONG",
			},
			{
				text: "By creating a file with a .jsx extension.",
				type: "ANSWER_WRONG",
			},
			{
				text: 'By using the "new" keyword followed by the component name.',
				type: "ANSWER_WRONG",
			},
		],
	},
	{
		id: "q5",
		text: 'What does the term "React state" imply?',
		answers: [
			{
				text: "An object in a component that holds values and may cause the component to render on change.",
				type: "ANSWER_CORRECT",
			},
			{
				text: "The lifecycle phase a React component is in.",
				type: "ANSWER_WRONG",
			},
			{
				text: "The overall status of a React application, including all props and components.",
				type: "ANSWER_WRONG",
			},
			{
				text: "A library for managing global state in React applications.",
				type: "ANSWER_WRONG",
			},
		],
	},
	{
		id: "q6",
		text: "How do you typically render list content in React apps?",
		answers: [
			{
				text: "By using the for() loop to iterate over an array of data and returning JSX.",
				type: "ANSWER_WRONG",
			},
			{
				text: "By using the forEach() method to iterate over an array of data and returning JSX.",
				type: "ANSWER_WRONG",
			},
			{
				text: "By using the map() method to iterate over an array of data and returning JSX.",
				type: "ANSWER_CORRECT",
			},
			{
				text: "By using the loop() method to iterate over an array of data and returning JSX.",
				type: "ANSWER_WRONG",
			},
		],
	},
	{
		id: "q7",
		text: "Which approach can NOT be used to render content conditionally?",
		answers: [
			{ text: "Using a the #if template syntax.", type: "ANSWER_CORRECT" },
			{ text: "Using a ternary operator.", type: "ANSWER_WRONG" },
			{ text: "Using the && operator.", type: "ANSWER_WRONG" },
			{ text: "Using an if-else statement.", type: "ANSWER_WRONG" },
		],
	},
];
