//전달된 영상 id
const params = new URLSearchParams(location.search);
const id = params.get("id");
const matched = videos.find((video) => video.id == id);

$("#video").attr("src", matched.url);
$("#video-title").text(matched.title);
$("#author-profile").attr("src", "../images/" + matched.author + ".png");
$("#author-name").text(matched.author);

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
