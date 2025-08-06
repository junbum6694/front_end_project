function matchedVideoLoad(subscribe) {
  const creator = creators.find((c) => c.name.trim() === subscribe);
  const matchedVideos = videos.filter((v) => v.author.trim() === subscribe);

  $("#main").append(`
<section class="subcirbe-section">
  <div class="creator-info d-flex ms-5">
    <div class="subscribe-img">
      <img src="../images/${creator.name}.png" width="100" height="100" class="me-3 rounded-circle" />
    </div>
    <div class="subscribe-info">
      <h4 class="mt-2 mb-3">${creator.name}</h4>
      <p class="mb-1">구독자 ${creator.subscriber}</p>
      <p class="mb-1">동영상 ${matchedVideos.length}개</p>
    </div>
  </div>
  <div class="container-fluid card-container">
    <div class="row justify-content-start video-list" data-name="${subscribe}"></div>
  </div>
</section>
  `);

  for (const video of matchedVideos) {
    renderVideoCard(video, { target: `.video-list[data-name='${subscribe}']`, type: "card" });
  }
}

$(document).ready(function () {
  for (const subscribe of subscribes) {
    matchedVideoLoad(subscribe);
  }
});