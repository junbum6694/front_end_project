//전달된 영상 id
const params = new URLSearchParams(location.search);
const id = params.get("id");
const matched = videos.find((video) => video.id == id);
const creator = creators.find((creator) => creator.name == matched.author);

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
