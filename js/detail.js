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

// 현재 영상 제외 list Load 함수
function videoLoad(video) {
  const diff = calculateDate(video.date);
  $("#side-list").append(`
<div class="row side-list-container">
  <div class="col-4 p-0">
    <div class="">
      <img src="${video.thumbnail}" class="img-fluid w-100 h-100" />
    </div>
  </div>
  <div class="col-8">
    <h5 class="side-title mb-3">${video.title}</h5>
    <p class=" side-text mb-1">${video.author}</p>
    <p class="mb-0">
      <span class="side-text">${video.visitor}</span>
      <span class="side-text"> ${diff}</span>
    </p>
  </div>
</div>
  `);
}

$(document).ready(function () {
  const notMatchedVideo = videos.filter((v) => v.id != id);
  for (const video of notMatchedVideo) {
    videoLoad(video);
  }
});

$("#video").attr("src", matched.url);
$("#video-title").text(matched.title);
$("#author-profile").attr("src", "../images/" + matched.author + ".png");
$("#author-name").text(matched.author);
$("#subscriber").text("구독자 " + creator.subscriber);

function writeComment(comment) {
  $("#comment-list").prepend(`
<div class="comment-container d-flex align-items-center col-10 pb-4 mb-4">
    <div class="comment-image">
        <img src="${authentication.profile}" id="commenter-profile" alt="프로필 이미지" width="40" height="40" class="d-inline-block align-text-top me-3 rounded-circle" />
    </div>

    <div class="comment mb-0 col-11">
        <span>${authentication.nickname}</span><br />
        <span>${comment}</span>
    </div>
    <button class="delete-btn">
      <i class="bi bi-trash3"></i>
    </button>
</div>
  `);
}

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
