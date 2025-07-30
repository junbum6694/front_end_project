function calculateDate(inputDate) {
  const date = new Date(inputDate); // 문자열이든 Date든 변환
  const today = new Date();
  const diffMs = today - date;

  if (isNaN(diffMs)) return "잘못된 날짜";

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) {
    return diffMinutes + "분 전";
  } else if (diffDays < 1) {
    return diffHours + "시간 전";
  } else if (diffDays < 7) {
    return diffDays + "일 전";
  } else if (diffDays < 30) {
    return Math.floor(diffDays / 7) + "주 전";
  } else if (diffDays < 365) {
    return Math.floor(diffDays / 30) + "달 전";
  } else {
    return Math.floor(diffDays / 365) + "년 전";
  }
}

// 영상 목록 로드
function videoLoad(video) {
  const diff = calculateDate(video.date);
  $(`.video-list[data-name='${video.author}']`).append(`
<div class="round col-sm-12 col-md-6 col-lg-3 mb-4">
  <div class="card h-100" data-id="${video.id}">
    
    <div class="thumbnail-wrapper position-relative w-100">
      <div class="ratio-wrapper" style="padding-top: 56.25%; position: relative;">
        <img class="thumbnail position-absolute top-0 start-0 w-100 h-100" src="${video.thumbnail}" style="object-fit: cover;" />
        <iframe class="video-frame position-absolute top-0 start-0 w-100 h-100 d-none"
          src="#"
          allow="autoplay"
          frameborder="0"
          style="object-fit: cover;">
        </iframe>
      </div>
    </div>

    <div class="card-body d-flex">
      <div class="img-box">
        <img src="../images/${video.author + ".png"}" id="author" alt="프로필 이미지"
          width="40" height="40" class="d-inline-block align-text-top me-3 rounded-circle" />
      </div>
      <div class="text-box position-relative w-100">
        <h5 class="card-title">${video.title}</h5>
        <p class="card-text">${video.author}</p>
        <div class="bottom d-flex position-absolute bottom-0 w-100">
          <span class="card-text">조회수 ${video.visitor}</span>
          <span class="card-text text ms-auto">${diff}</span>
        </div>
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

//영상 카드 클릭 시 detail로 이동
$(document).on("click", ".card", function () {
  location.href = "detail.html?id=" + $(this).data("id");
});
