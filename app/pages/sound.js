// pages/about.js

import React from 'react';

const SoundPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <audio controls>
            <source src="Vo_ember_spirit_embr_move_13.mp3.mpeg" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
    </div>
  );
};

export default AboutPage;