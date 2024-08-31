import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '100px 20px 20px', // Add a larger margin-top
  };

  const postBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const postBoxHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  };

  return (
    <div style={containerStyle}>
      {posts.map((post, index) => (
        <div
          key={index}
          style={{ ...postBoxStyle }}
        >
          <Link
            to={`/post/${post.file}`}
            style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '18px',
            }}
          >
            <h2 style={{ margin: '0', fontSize: '20px', color: '#007bff' }}>
              {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
