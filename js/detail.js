const params = new URLSearchParams(location.search);
const id = params.get("id");
const matched = videos.find((video) => video.id == id);
const creator = creators.find((c) => c.name == matched.author);

// 우측 영상 목록
$(document).ready(function () {
  const notMatchedVideo = videos.filter((v) => v.id != id);
  for (const video of notMatchedVideo) {
    renderVideoCard(video, { target: "#lg-side-list", type: "side" });
    renderVideoCard(video, { target: "#mdsm-side-list", type: "card" });
  }
});

// 영상 상세 정보 채우기
$("#video").attr("src", matched.url);
$("#video-title").text(matched.title);
$("#author-profile").attr("src", "../images/" + matched.author + ".png");
$("#commenter-profile").attr("src", authentication.profile);
$("#author-name").text(matched.author);
$("#subscriber").text("구독자 " + creator.subscriber);
$("#visitor").text("조회수 " + matched.visitor);
$("#time").text(calculateDate(matched.date));
$("#time2").text(matched.date);
$("#info-text2").html(matched.info);

// 댓글 작성
$("#comment-form").on("submit", function (e) {
  e.preventDefault();
  const comment = $("#comment-input").val().trim();
  if (!comment) return alert("댓글을 입력해 주세요.");
  $("#comment-list").prepend(`
    <div class="comment-container d-flex align-items-center col-12 pb-4 mb-4">
      <div class="comment-image">
        <img src="${authentication.profile}" width="40" height="40" class="commenter-profile me-3 rounded-circle" />
      </div>
      <div class="comment mb-0 col-12">
        <span>${authentication.nickname}</span><br />
        <span>${comment}</span>
      </div>
      <button class="delete-btn"><i class="bi bi-trash3"></i></button>
    </div>
  `);
  $("#comment-input").val("");
});

// 댓글 삭제
$(document).on("click", ".delete-btn", function () {
  if (confirm("정말 삭제하시겠습니까?")) {
    $(this).closest(".comment-container").remove();
  }
});

$("#up-btn").attr("data-state", "none");   // none | up
$("#down-btn").attr("data-state", "none"); // none | down

// 추천 버튼 클릭
$(document).on("click", "#up-btn", function () {
  const upBtn = $(this);
  const downBtn = $("#down-btn");
  const upCountEl = upBtn.find(".up-count");
  let upCount = parseInt(upCountEl.text() || "0", 10);
  let upState = upBtn.attr("data-state") || "none";

  switch (upState) {
    case "none": // 추천 처리
      upBtn.attr("data-state", "up");
      upBtn.find("i").attr("class", "bi bi-hand-thumbs-up-fill");
      upCountEl.text(upCount + 1);
      if (downBtn.attr("data-state") === "down") { // 비추천 상태였다면 해제
        downBtn.attr("data-state", "none");
        downBtn.find("i").attr("class", "bi bi-hand-thumbs-down");
      }
      break;
    case "up": // 추천 취소
      upBtn.attr("data-state", "none");
      upBtn.find("i").attr("class", "bi bi-hand-thumbs-up");
      upCountEl.text(upCount - 1);
      break;
  }
});

// 비추천 버튼 클릭
$(document).on("click", "#down-btn", function () {
  const upBtn = $("#up-btn");
  const downBtn = $(this);
  const upCountEl = upBtn.find("span");
  let upCount = parseInt(upCountEl.text() || "0", 10);
  let state = downBtn.attr("data-state") || "none";

  switch (state) {
    case "none":
      downBtn.attr("data-state", "down");
      downBtn.find("i").attr("class", "bi bi-hand-thumbs-down-fill");
      if (upBtn.attr("data-state") === "up") {
        upBtn.attr("data-state", "none");
        upBtn.find("i").attr("class", "bi bi-hand-thumbs-up");
        upCountEl.text(upCount - 1);
      }
      break;
    case "down":
      downBtn.attr("data-state", "none");
      downBtn.find("i").attr("class", "bi bi-hand-thumbs-down");
      break;
  }
});