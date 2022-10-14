import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
const blogPosts = [
	{
	title: "JAVASCRIPT",
	body: "JavaScript is the world most popular",
	author: "Nishant Singh "
	},
	{
	title: "Data Structure ",
	body: "There are many real-life examples",
	author: "Suresh Kr"
	},
	{
	title: "Algorithm",
	body: "The word Algorithm means",
	author: "Monu Kr"
	},
	{
	title: "Computer Network",
	body: "An interconnection of multiple devices",
	author: "Sonu Kr"
	},
];
const Posts = () => {


return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
