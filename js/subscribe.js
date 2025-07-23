// 영상 목록 로드
function videoLoad(video) {
  $(`.video-list[data-name='${video.author}']`).append(`
<div class="round col-sm-1 col-md-6 col-lg-3 mb-4">
    <div class="card h-100" data-id="${video.id}">
        <img class="thumbnail" src="${video.thumbnail}" />
        <div class="card-body d-flex">
            <div>
                <img src="../images/${video.author + ".png"}" id="author" alt="프로필 이미지" width="40" height="40" class="d-inline-block align-text-top me-3 rounded-circle" />
            </div>
            <div>
                <h5 class="card-title">${video.title}</h5>
                <p class="card-text">${video.author}</p>
                <span class="card-text">조회수 ${video.visitor}</span>
            </div>
        </div>
    </div>
</div>
  `);
}

// 구독 영상 목록 로드 함수
function matchedVideoLoad(subscribe) {
  const creator = creators.find((c) => c.name.trim() === subscribe);
  const matchedVideos = videos.filter((c) => c.author.trim() === subscribe);
  $("#main").append(`
<section class="subcirbe-section">
    <div class="creator-info d-flex ms-5">
        <div class="subscribe-img">
        <img src="../images/${creator.name}.png" width="100" height="100" class="d-inline-block align-text-top me-3 rounded-circle" />
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
    videoLoad(video);
  }
}

$(document).ready(function () {
  for (const subscribe of subscribes) {
    matchedVideoLoad(subscribe);
  }
});
