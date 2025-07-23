const videos = [
  {
    title: "ITZY(있지) 'WANNABE' M/V",
    id: "fE2h3lGlOsk",
    thumbnail: "https://img.youtube.com/vi/fE2h3lGlOsk/0.jpg",
    url: "https://www.youtube.com/embed/fE2h3lGlOsk?si=lu2KvPRJlbk406b-",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "ITZY(있지) '달라달라' M/V",
    id: "pNfTK39k55U",
    thumbnail: "https://img.youtube.com/vi/pNfTK39k55U/0.jpg",
    url: "https://www.youtube.com/embed/pNfTK39k55U?si=j-t48TR9_GVZJSDB",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "aespa 에스파 'Supernova' MV",
    id: "phuiiNCxRMg",
    thumbnail: "https://img.youtube.com/vi/phuiiNCxRMg/0.jpg",
    url: "https://www.youtube.com/embed/phuiiNCxRMg?si=CwQKhtKxcjBrJzzO",
    author: "SM",
    visitor: 0,
  },
  {
    title: "aespa 에스파 'Whiplash' MV",
    id: "jWQx2f-CErU",
    thumbnail: "https://img.youtube.com/vi/jWQx2f-CErU/0.jpg",
    url: "https://www.youtube.com/embed/jWQx2f-CErU?si=NXfff1yZjlKz9TR0",
    author: "SM",
    visitor: 0,
  },
  {
    title: "IVE 아이브 'Be Alright' MV",
    id: "gC7cURZsiH8",
    thumbnail: "https://img.youtube.com/vi/gC7cURZsiH8/0.jpg",
    url: "https://www.youtube.com/embed/gC7cURZsiH8?si=7TiZFY3zBgmwF2MW",
    author: "STARSHIP",
    visitor: 0,
  },
  {
    title: "IVE 아이브 '해야 (HEYA)' MV",
    id: "07EzMbVH3QE",
    thumbnail: "https://img.youtube.com/vi/07EzMbVH3QE/0.jpg",
    url: "https://www.youtube.com/embed/07EzMbVH3QE?si=wigyqgKwjnF2qPPY",
    author: "STARSHIP",
    visitor: 0,
  },
  {
    title: "NMIXX(엔믹스) 'KNOW ABOUT ME' M/V",
    id: "aFrQIJ5cbRc",
    thumbnail: "https://img.youtube.com/vi/aFrQIJ5cbRc/0.jpg",
    url: "https://www.youtube.com/embed/aFrQIJ5cbRc?si=a6-XEREXhxVhvhDw",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "NMIXX 'DASH' M/V",
    id: "7UecFm_bSTU",
    thumbnail: "https://img.youtube.com/vi/7UecFm_bSTU/0.jpg",
    url: "https://www.youtube.com/embed/7UecFm_bSTU?si=Xxv7SR3KGLvl3x7z",
    author: "JYP",
    visitor: 0,
  },
  {
    title: "집들이 킹크랩 코스요리. 그런데 이제 대사가 조금 많은…",
    id: "jUyoZsP6C64",
    thumbnail: "https://img.youtube.com/vi/jUyoZsP6C64/0.jpg",
    url: "https://www.youtube.com/embed/jUyoZsP6C64?si=VatyplFw-zWL7-v0",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "조금 미친 아저씨들의 요리모임",
    id: "1ElI2b82-kY",
    thumbnail: "https://img.youtube.com/vi/1ElI2b82-kY/0.jpg",
    url: "https://www.youtube.com/embed/1ElI2b82-kY?si=cwatiwSqh07Pgvqp",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "아저씨들이 만드는 6시간 코스요리",
    id: "MLlrpl57hds",
    thumbnail: "https://img.youtube.com/vi/MLlrpl57hds/0.jpg",
    url: "https://www.youtube.com/embed/MLlrpl57hds?si=-PSQ7b-_y8oSH6T8",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "대대방어! 이걸 내가 할 수 있을까..? 일단 오마카세 열었습니다.",
    id: "W-_hy7S9o0g",
    thumbnail: "https://img.youtube.com/vi/W-_hy7S9o0g/0.jpg",
    url: "https://www.youtube.com/embed/W-_hy7S9o0g?si=tT7DutvX2Jd9k-ca",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "더워 죽겠는데 무슨 요리를 하세요. 딱 5초 만에 양념하는 방법",
    id: "KLKD9Gb0Gow",
    thumbnail: "https://img.youtube.com/vi/KLKD9Gb0Gow/0.jpg",
    url: "https://www.youtube.com/embed/KLKD9Gb0Gow?si=jqL_0o0jXombgpne",
    author: "1분요리 뚝딱이형",
    visitor: 0,
  },
  {
    title: "한낱 두부 따위가 고기보다 더 맛있는데?",
    id: "5HNk-P46ZBE",
    thumbnail: "https://img.youtube.com/vi/5HNk-P46ZBE/0.jpg",
    url: "https://www.youtube.com/embed/5HNk-P46ZBE?si=gTtDz5k4PoncDhUl",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "이걸 이제 알았다면… 지금껏 완전 손해 보신 겁니다.",
    id: "yT5Q-DCh5_o",
    thumbnail: "https://img.youtube.com/vi/yT5Q-DCh5_o/0.jpg",
    url: "https://www.youtube.com/embed/yT5Q-DCh5_o?si=nqObJ4WuuvisQAis",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
  {
    title: "아는 동생 가게에 메뉴를 하나 만들어줬는데 접시까지 핥아먹더라고요...",
    id: "g8LlRTgmnoU",
    thumbnail: "https://img.youtube.com/vi/g8LlRTgmnoU/0.jpg",
    url: "https://www.youtube.com/embed/g8LlRTgmnoU?si=PdqlJf0YuDvVXBUg",
    author: "취미로 요리하는 남자",
    visitor: 0,
  },
];

//페이지 이동
$(".side-btn").on("click", function () {
  location.href = $(this).data("ad") + ".html";
});

//영상 카드 클릭 시 detail로 이동
$(document).on("click", ".card", function () {
  location.href = "detail.html?id=" + $(this).data("id");
});

// 영상 로드 함수
function videoLoad(video) {
  $("#video-list").append(`
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

//페이지 로드 시 영상목록 출력
$(document).ready(function () {
  for (const video of videos) {
    videoLoad(video);
  }
});

//검색 시 해당 영상목록 출력
$("#search-form").on("submit", function (e) {
  e.preventDefault();
  const keyword = $("#search-input").val().trim();

  if (keyword === "") {
    alert("검색어를 입력하세요.");
  } else {
    $("#video-list").empty();
    for (const video of videos) {
      if (video.title.toLowerCase().includes(keyword.toLowerCase())) {
        videoLoad(video);
      }
    }
    if ($("#video-list").children().length === 0) {
      window.alert("검색 결과가 없습니다. 초기 화면으로 돌아갑니다.");
      location.reload();
    }
  }
});
