import React, { useState } from 'react';
import albumsData from '../data/album.json';

export default function TestPortfolio() {
  // State to keep track of the currently selected category
  const [filter, setFilter] = useState('All');

  // Filter the albums based on the state
  const filteredAlbums = filter === 'All' 
    ? albumsData 
    : albumsData.filter(album => album.category === filter);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>My Music Portfolio</h2>
      
      {/* --- Filter Buttons --- */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFilter('All')} 
          style={buttonStyle(filter === 'All')}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('Synthwave')} 
          style={buttonStyle(filter === 'Synthwave')}
        >
          Synthwave
        </button>
        <button 
          onClick={() => setFilter('Acoustic')} 
          style={buttonStyle(filter === 'Acoustic')}
        >
          Acoustic
        </button>
      </div>

      {/* --- Album Gallery --- */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredAlbums.map(album => (
          <div key={album.id} style={cardStyle}>
            <img 
              src={album.imageUrl} 
              alt={album.title} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{album.title}</h3>
            <span style={{ fontSize: '12px', color: '#666', background: '#eee', padding: '4px 8px', borderRadius: '12px' }}>
              {album.category}
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
}

// --- Helper Styles ---
// These keep the JSX clean and make the buttons react to being clicked
const buttonStyle = (isActive) => ({
  marginRight: '10px',
  padding: '8px 16px',
  cursor: 'pointer',
  backgroundColor: isActive ? '#007BFF' : '#f0f0f0',
  color: isActive ? 'white' : '#333',
  border: 'none',
  borderRadius: '4px',
  fontWeight: isActive ? 'bold' : 'normal',
  transition: 'all 0.2s ease-in-out'
});

const cardStyle = {
  border: '1px solid #ddd', 
  padding: '10px', 
  borderRadius: '8px', 
  textAlign: 'center',
  width: '180px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};