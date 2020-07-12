import { API } from "../backend";
import { isAuthenticated } from "../auth/auth_api_calls";

// const { user, token } = isAuthenticated();

/**************** Question Calls ****************/

// create question
export const createQuestion = (content, category) => {
	const { user, token } = isAuthenticated();
	return fetch(`${API}/question/create/${user._id}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ content, category }),
	});
};

// get single question
export const getQuestion = (questionId) => {
	return fetch(`${API}/question/${questionId}`).then((r) => r.json());
};

// get all questions
export const getAllQuestions = () => {
	return fetch(`${API}/questions`)
		.then((r) => r.json())
		.catch((err) => err);
};

// update question
export const updateQuestion = (questionId, userId, token, question) => {};

// delete question
export const deleteQuestion = (questionId, userId, token) => {};

/**************** Answer Calls ****************/

// create answer
export const createAnswer = (userId, token, answer) => {};

// get all answers
export const getAllAnswers = () => {};

// update answer
export const updateAnswer = (answerId, userId, token, answer) => {};

// delete answer
export const deleteAnswer = (answerId, userId, token) => {};
