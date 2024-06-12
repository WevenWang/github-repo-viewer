import React from "react";
import RepositoryItem from "./RepositoryItem";

function RepositoryList({ repos }) {
	return (
		<div>
			{repos.map((repo) => (
				<RepositoryItem key={repo.id} repo={repo} />
			))}
		</div>
	);
}

export default RepositoryList;
