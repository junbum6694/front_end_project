const videos = [
  {
    title: "ITZY(있지) 'WANNABE' M/V",
    id: "fE2h3lGlOsk",
    thumbnail: "https://img.youtube.com/vi/fE2h3lGlOsk/0.jpg",
    url: "https://www.youtube.com/embed/fE2h3lGlOsk?autoplay=1&mute=1",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "ITZY(있지) '달라달라' M/V",
    id: "pNfTK39k55U",
    thumbnail: "https://img.youtube.com/vi/pNfTK39k55U/0.jpg",
    url: "https://www.youtube.com/embed/pNfTK39k55U?autoplay=1&mute=1",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "aespa 에스파 'Supernova' MV",
    id: "phuiiNCxRMg",
    thumbnail: "https://img.youtube.com/vi/phuiiNCxRMg/0.jpg",
    url: "https://www.youtube.com/embed/phuiiNCxRMg?autoplay=1&mute=1",
    author: "SM",
    visitor: 0,
  },
  {
    title: "aespa 에스파 'Whiplash' MV",
    id: "jWQx2f-CErU",
    thumbnail: "https://img.youtube.com/vi/jWQx2f-CErU/0.jpg",
    url: "https://www.youtube.com/embed/jWQx2f-CErU?autoplay=1&mute=1",
    author: "SM",
    visitor: 0,
  },
  {
    title: "IVE 아이브 'Be Alright' MV",
    id: "gC7cURZsiH8",
    thumbnail: "https://img.youtube.com/vi/gC7cURZsiH8/0.jpg",
    url: "https://www.youtube.com/embed/gC7cURZsiH8?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: 0,
  },
  {
    title: "IVE 아이브 '해야 (HEYA)' MV",
    id: "07EzMbVH3QE",
    thumbnail: "https://img.youtube.com/vi/07EzMbVH3QE/0.jpg",
    url: "https://www.youtube.com/embed/07EzMbVH3QE?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: 0,
  },
  {
    title: "NMIXX(엔믹스) 'KNOW ABOUT ME' M/V",
    id: "aFrQIJ5cbRc",
    thumbnail: "https://img.youtube.com/vi/aFrQIJ5cbRc/0.jpg",
    url: "https://www.youtube.com/embed/aFrQIJ5cbRc?autoplay=1&mute=1",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "NMIXX 'DASH' M/V",
    id: "7UecFm_bSTU",
    thumbnail: "https://img.youtube.com/vi/7UecFm_bSTU/0.jpg",
    url: "https://www.youtube.com/embed/7UecFm_bSTU?autoplay=1&mute=1",
    author: "JYP",
    visitor: 0,
  },
];

const authentication = {
  name: "박찬호",
  nickname: "TooMuchTalker",
  profile: "../images/profile.png",
};

const params = new URLSearchParams(location.search);
const id = params.get("id");
const matched = videos.find((video) => video.id == id);

$("#video").attr("src", matched.url);

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
