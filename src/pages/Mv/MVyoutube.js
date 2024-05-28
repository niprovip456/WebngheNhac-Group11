import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
    const opts = {
      
        playerVars: {
           // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
