function Video() {
  return (
    <div className="video-container">
      <div class="">
        <iframe
          className="iphone-video"
          width="100%"
        //   style={{height: '535px'}}
          src="https://www.youtube.com/embed/f1VEks-QQ4Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
