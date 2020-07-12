import { API } from "../backend";
import { isAuthenticated } from "../auth/auth_api_calls";

/**************** User Calls ****************/

// TODO HERE

/**************** Category Calls ****************/

// create new category
export const createCategory = (name) => {
	const { user, token } = isAuthenticated();
	return fetch(`${API}/category/create/${user._id}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ name }),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

// get single category
export const getCategory = (categoryId) => {};

// get all categories
export const getAllCategories = () => {
	return fetch(`${API}/categories`);
};

// update category
export const updateCategory = (categoryId, userId, token, category) => {};

// delete category
export const deleteCategory = (categoryId, userId, token) => {};

/**************** Question Calls ****************/

// TODO HERE

/**************** Answer Calls ****************/

// TODO HERE

/**************** User Calls ****************/

// TODO HERE
