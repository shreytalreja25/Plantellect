import React, { useState } from "react";

const CommunityFeed = () => {
  const [posts, setPosts] = useState([
    { user: "Alice", content: "My tomatoes are finally growing! 🌱" },
    { user: "Bob", content: "Any tips for keeping roses healthy?" }
  ]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost) {
      setPosts([{ user: "You", content: newPost }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mt-3">
      <h5 className="text-primary fw-bold mb-3">💬 Community Feed</h5>
      <input type="text" className="form-control mb-2" value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="Share an update..." />
      <button className="btn btn-primary w-100" onClick={addPost}>Post</button>
      <ul className="mt-3 list-group">
        {posts.map((post, index) => (
          <li key={index} className="list-group-item">
            <strong>{post.user}:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityFeed;
