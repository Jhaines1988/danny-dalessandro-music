import React from 'react';

const Iframe = function ({ videoURL, tags, ...props }) {
  return (
    <>
      <iframe
        // className={props.className ? props.className : styles.iframePlayer}
        src={videoURL}
        title='Youtube Video Player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
      />
      {/* {tags &&
        tags.map((tag, i) => (
          <a
            style={{ margin: 2 }}
            href={`https://www.youtube.com/hashtag/${tag}`}
            key={i}>
            #{tag}
          </a>
        ))} */}
    </>
  );
};

export default Iframe;
