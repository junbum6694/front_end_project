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
];

$(".side-btn").on("click", function () {
  location.href = $(this).data("ad") + ".html";
});

$(document).ready(function () {
  for (const video of videos) {
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
});

$(document).on("click", ".card", function () {
  console.log("test");
  location.href = "detail.html?id=" + $(this).data("id");
});
