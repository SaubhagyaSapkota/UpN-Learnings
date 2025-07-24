import React, { useEffect, useState } from "react";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GitHubUserSearch = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);


  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearched(true);
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!res.ok) throw new Error("GitHub API error");

      const data = await res.json();
      setUsers(data.items);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if(query.trim() === ""){
        setUsers([]);
        setSearched(false);
    }
  },[query])

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.login}
            className="flex items-center space-x-4 border p-2 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
      {searched && !loading && users.length === 0 && !error && (
        <p className="text-red-500 mt-4">No users found.</p>
      )}
    </div>
  );
};

export default GitHubUserSearch;