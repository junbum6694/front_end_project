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

//영상 카드 클릭 시 detail로 이동
$(document).on("click", ".card", function () {
  location.href = "detail.html?id=" + $(this).data("id");
});

// 영상 로드 함수
function videoLoad(video) {
  const diff = calculateDate(video.date);
  $("#video-list").append(`
<div class="round col-sm-12 col-md-6 col-lg-3 mb-4">
    <div class="card h-100" data-id="${video.id}">
        <img class="thumbnail" src="${video.thumbnail}" />
        <div class="card-body d-flex">
            <div class="img-box">
                <img src="../images/${video.author + ".png"}" id="author" alt="프로필 이미지" width="40" height="40" class="d-inline-block align-text-top me-3 rounded-circle" />
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

//검색된 영상 로드 함수
function loadSearchList(keyword) {
  if (keyword === "") {
    alert("검색어를 입력하세요.");
  } else if (keyword === "notFoundData") {
    $(".notFound").append(`
      <img src="../images/notFound.png">
      <h4>검색결과가 없습니다.</h4>
      <p class="notFound-text">다른 검색어를 시도해 보시거나  검색 필터를 삭제하세요.</p>
    `);
  } else {
    $("#video-list").empty();
    for (const video of videos) {
      if (video.title.toLowerCase().includes(keyword.toLowerCase())) {
        videoLoad(video);
      }
    }
    if ($("#video-list").children().length === 0) {
      location.href = "index.html?keyword=notFoundData";
    }
  }
}

//페이지 로드 시 영상목록 출력
$(document).ready(function () {
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  if (keyword === null) {
    for (const video of videos) {
      videoLoad(video);
    }
  } else {
    loadSearchList(keyword);
    if(keyword != "notFoundData"){
      setTimeout(function () {
        $("#search-input").val(keyword);
      }, 10);
    }
  }
});
