import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import RepositoryList from "./components/RepositoryList";

function App() {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchRepositories = async (username) => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://api.github.com/users/${username}/repos`
			);
			if (!response.ok) {
				throw new Error("User not found");
			}
			const data = await response.json();
			const filteredData = data.filter((repo) => !repo.fork);
			const sortedData = filteredData.sort(
				(a, b) => b.stargazers_count - a.stargazers_count
			);
			setRepos(sortedData);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<h1>GitHub Repository Viewer</h1>
			<SearchForm onSearch={fetchRepositories} />
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			<RepositoryList repos={repos} />
		</div>
	);
}

export default App;
