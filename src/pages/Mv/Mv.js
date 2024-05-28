import React, { useState } from 'react';
import YouTubeVideo from './MVyoutube';
import './Mv.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Mv() {
  const [videoId, setVideoId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const url = new URL(inputValue);
    const videoId = url.searchParams.get("v");
    setVideoId(videoId);
    setShowVideo(true);
  };

  const handleDownload = () => {
    if (videoId) {
      const downloadUrl = `https://www.y2mate.com/youtube/${videoId}`;
      window.open(downloadUrl);
    }
  };

  return (
    <div>
      <h1 className="header">Video YouTube</h1>
      <div className="search_input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Nhập URL video YouTube"
        />
        <FontAwesomeIcon icon={faSearch} className="button_search" />
      </div>
      {showVideo && <YouTubeVideo videoId={videoId} />}
      {videoId && (
        <button className="button_download" onClick={handleDownload}>
          Tải video
        </button>
      )}
    </div>
  );
}

export default Mv;
