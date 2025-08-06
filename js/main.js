$(document).ready(function () {
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");

  function loadSearchList(keyword) {
    if (keyword === "") {
      alert("검색어를 입력하세요.");
    } else if (keyword === "notFoundData") {
      $(".notFound").append(`
        <img src="../images/notFound.png">
        <h4>검색결과가 없습니다.</h4>
        <p class="notFound-text">다른 검색어를 시도해 보시거나 검색 필터를 삭제하세요.</p>
      `);
    } else {
      $("#video-list").empty();
      for (const video of videos) {
        if (video.title.toLowerCase().includes(keyword.toLowerCase())) {
          renderVideoCard(video, { target: "#video-list", type: "card" });
        }
      }
      if ($("#video-list").children().length === 0) {
        location.href = "index.html?keyword=notFoundData";
      }
    }
  }

  if (keyword === null) {
    for (const video of videos) {
      renderVideoCard(video, { target: "#video-list", type: "card" });
    }
  } else {
    loadSearchList(keyword);
    if (keyword != "notFoundData") {
      setTimeout(() => $("#search-input").val(keyword), 10);
    }
  }
});
