import { API } from "../backend";

/**************** Question Calls ****************/

// create question
export const createQuestion = (userId, token, question) => {};

// get single question
export const getQuestion = questionId => {};

// get all questions
export const getAllQuestions = () => {};

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
