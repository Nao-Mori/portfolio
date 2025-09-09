import React, { useState } from 'react';

const Personality = ({ laterLoad }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="post-container" style={styles.postContainer}>
      <div className="post-header" style={styles.header}>
        <img 
          src="/images/profile.jpg" 
          alt="profile" 
          style={styles.profileImage} 
        />
        <h3 style={styles.username}>Nao Mori</h3>
      </div>
      <div style={{ padding: "0 15px" }}>
        <div style={styles.videoContainer}>
            {laterLoad ? <video controls style={styles.video}>
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video> : null}
        </div>
      </div>
      <div className="post-footer" style={styles.footer}>
        <div onClick={toggleLike} style={styles.likeButton}>
          {isLiked ? "❤️ Thanks for Liking!" : "🤍 Like"}
        </div>
        <p style={styles.hashtags}>
          #moodmaker #bright #serious
        </p>
      </div>
    </div>
  );
};

const styles = {
  postContainer: {
    width: '330px',
    margin: '20px auto',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
  },
  profileImage: {
    borderRadius: '50%',
    marginRight: '10px',
    maxWidth: "30px",
  },
  username: {
    fontSize: '20px',
    paddingTop: "3px",
    fontWeight: 'bold',
    margin: 0
  },
  videoContainer: {
    width: '100%',
    overflow: 'hidden',
    minHeight: "200px",
  },
  video: {
    width: '100%',
    borderRadius: '10px',
  },
  footer: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  likeButton: {
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: "0",
  },
  hashtags: {
    color: '#888',
    fontSize: '14px',
    margin: "0",
    padding: "0",
  },
};

export default Personality;