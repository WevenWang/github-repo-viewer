import React from "react";

function RepositoryItem({ repo }) {
	return (
		<div className="repository-item">
			<h2>
				<a
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{repo.name}
				</a>
			</h2>
			<p>{repo.description}</p>
			<p>⭐ {repo.stargazers_count}</p>
			<p>Languages: {repo.language}</p>
		</div>
	);
}

export default RepositoryItem;
