import React from 'react';

const MusicPlayer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="image.png" 
          alt="Apna Bana Le"
          style={styles.image}
        />
        <h2 style={styles.title}>APNA</h2>

        <div style={styles.volumeContainer}>
          <input type="range" min="0" max="100" style={styles.range} />
          <span style={styles.volumeLabel}>0</span>
        </div>

        <div style={styles.controls}>
          <button style={styles.button}>⏮️</button>
          <button style={styles.button}>▶️</button>
          <button style={styles.button}>🔇</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #f8b9b4 50%, #bce3d8 50%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(8px)',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    width: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  },
  title: {
    margin: '20px 0',
    fontSize: '32px',
    color: '#0f4d4d',
  },
  volumeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  range: {
    width: '70%',
    marginRight: '10px',
  },
  volumeLabel: {
    fontSize: '14px',
    color: '#000',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    fontSize: '24px',
    padding: '10px',
    backgroundColor: '#1b7a6e',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default MusicPlayer;
