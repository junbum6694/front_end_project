// 시간 계산 함수
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

//전달된 영상 id
const params = new URLSearchParams(location.search);
const id = params.get("id");
const matched = videos.find((video) => video.id == id);
const creator = creators.find((creator) => creator.name == matched.author);

// side-list Load 함수1
function videoLoad1(video) {
  const diff = calculateDate(video.date);
  $("#lg-side-list").append(`
<div class="row side-list-container" data-id="${video.id}">
  <div class="col-4 p-0">
    <div class="">
      <img src="${video.thumbnail}" class="img-fluid w-100 h-100" />
    </div>
  </div>
  <div class="col-8">
    <h5 class="side-title mt-2 mb-4">${video.title}</h5>
    <p class=" side-text mb-1">${video.author}</p>
    <p class="mb-0">
      <span class="side-text">${video.visitor}</span>
      <span class="side-text"> ${diff}</span>
    </p>
  </div>
</div>
    `);
}

// side-list Load 함수2
function videoLoad2(video) {
  const diff = calculateDate(video.date);
  $("#mdsm-side-list").append(`
<div class="round col-sm-12 col-md-6 col-lg-3 mb-4">
  <div class="card h-100" data-id="${video.id}">
    
    <div class="thumbnail-wrapper position-relative w-100">
      <div class="ratio-wrapper" style="padding-top: 56.25%; position: relative;">
        <img class="thumbnail position-absolute top-0 start-0 w-100 h-100" src="${video.thumbnail}" style="object-fit: cover;" />
        <iframe class="video-frame position-absolute top-0 start-0 w-100 h-100 d-none"
          src=""
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

//우측 영상 목록 Load
$(document).ready(function () {
  const notMatchedVideo = videos.filter((v) => v.id != id);
  for (const video of notMatchedVideo) {
    videoLoad1(video);
  }
  for (const video of notMatchedVideo) {
    videoLoad2(video);
  }
});

//우측 영상 목록 클릭 시 detail 페이지로 이동
$(document).on("click", ".side-list-container", function () {
  location.href = "detail.html?id=" + $(this).data("id");
});

//영상 id 받아와 정보 채워넣기
$("#video").attr("src", matched.url);
$("#video-title").text(matched.title);
$("#author-profile").attr("src", "../images/" + matched.author + ".png");
$("#commenter-profile").attr("src", "../images/" + authentication.nickname + ".png");
$("#author-name").text(matched.author);
$("#subscriber").text("구독자 " + creator.subscriber);
$("#visitor").text("조회수 " + matched.visitor);
$("#time").text(calculateDate(matched.date));
$("#time2").text(matched.date);
$("#info-text2").html(matched.info);

//댓글 작성 함수
function writeComment(comment) {
  $("#comment-list").prepend(`
<div class="comment-container d-flex align-items-center col-12 pb-4 mb-4">
    <div class="comment-image">
        <img src="${authentication.profile}" alt="프로필 이미지" width="40" height="40" class="commenter-profile d-inline-block align-text-top me-3 rounded-circle" />
    </div>

    <div class="comment mb-0 col-12">
        <span>${authentication.nickname}</span><br />
        <span>${comment}</span>
    </div>
    <button class="delete-btn">
      <i class="bi bi-trash3"></i>
    </button>
</div>
  `);
}

//댓글 작성
$("#comment-form").on("submit", function (e) {
  e.preventDefault();

  const comment = $("#comment-input").val().trim();

  if (comment === "") {
    window.alert("댓글을 입력해 주세요.");
  } else {
    writeComment(comment);
    $("#comment-input").val("");
  }
});

$(document).on("click", ".delete-btn", function () {
  const check = window.confirm("정말 삭제하시겠습니까?");
  if (check) {
    $(this).closest(".comment-container").remove();
  }
});

// 추천
let check = 0;
//0 >> 추천X 상태
//1 >> 추천O 상태
//2 >> 비추천O 상태
$("#up-btn").on("click", function () {
  let number = parseInt($("#up-btn").text(), 10);
  switch (check) {
    case 0:
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up-fill"></i>
          <span class="ms-1">${number + 1}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down"></i>
      `);
      check = 1;
      break;
    case 1:
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up"></i>
          <span class="ms-1">${number + -1}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down"></i>
      `);
      check = 0;
      break;
    case 2:
      check = 1;
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up-fill"></i>
          <span class="ms-1">${number + 1}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down"></i>
      `);
      break;
  }
});

$("#down-btn").on("click", function () {
  let number = parseInt($("#up-btn").text(), 10);
  switch (check) {
    case 0:
      check = 2;
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up"></i>
          <span class="ms-1">${number}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down-fill"></i>
      `);
      break;
    case 1:
      check = 2;
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up"></i>
          <span class="ms-1">${number - 1}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down-fill"></i>
      `);
      break;
    case 2:
      check = 0;
      $("#up-btn").html(`
        <i class="bi bi-hand-thumbs-up"></i>
          <span class="ms-1">${number}</span>
      `);
      $("#down-btn").html(`
        <i class="bi bi-hand-thumbs-down"></i>
      `);
      break;
  }
});
