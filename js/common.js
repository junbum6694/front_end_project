// 영상 데이터
const videos = [
  {
    title: "ITZY(있지) 'WANNABE' M/V",
    id: "fE2h3lGlOsk",
    thumbnail: "https://img.youtube.com/vi/fE2h3lGlOsk/0.jpg",
    url: "https://www.youtube.com/embed/fE2h3lGlOsk?autoplay=1&mute=1",
    author: "JYP",
    visitor: "5.6억회",
    date: "2020-03-09",
    info: "👑 𝐈𝐓𝐙𝐘 '𝐂𝐇𝐄𝐂𝐊𝐌𝐀𝐓𝐄' 𝐏𝐑𝐄-𝐒𝐀𝐕𝐄 & 𝐏𝐑𝐄-𝐎𝐑𝐃𝐄𝐑<br>https://itzy.lnk.to/CHECKMATE",
  },
  {
    title: "ITZY(있지) '달라달라' M/V",
    id: "pNfTK39k55U",
    thumbnail: "https://img.youtube.com/vi/pNfTK39k55U/0.jpg",
    url: "https://www.youtube.com/embed/pNfTK39k55U?autoplay=1&mute=1",
    author: "JYP",
    visitor: "3.3억회",
    date: "2019-02-11",
    info: "👑 𝐈𝐓𝐙𝐘 '𝐂𝐇𝐄𝐂𝐊𝐌𝐀𝐓𝐄' 𝐏𝐑𝐄-𝐒𝐀𝐕𝐄 & 𝐏𝐑𝐄-𝐎𝐑𝐃𝐄𝐑<br>https://itzy.lnk.to/CHECKMATE",
  },
  {
    title: "aespa 에스파 'Supernova' MV",
    id: "phuiiNCxRMg",
    thumbnail: "https://img.youtube.com/vi/phuiiNCxRMg/0.jpg",
    url: "https://www.youtube.com/embed/phuiiNCxRMg?autoplay=1&mute=1",
    author: "SM",
    visitor: "2억회",
    date: "2024-05-13",
    info: "aespa's 1st album 'Armageddon' is out!<br>Listen and download on your favorite platform: https://aespa.lnk.to/Armageddon",
  },
  {
    title: "aespa 에스파 'Whiplash' MV",
    id: "jWQx2f-CErU",
    thumbnail: "https://img.youtube.com/vi/jWQx2f-CErU/0.jpg",
    url: "https://www.youtube.com/embed/jWQx2f-CErU?autoplay=1&mute=1",
    author: "SM",
    visitor: "2억회",
    date: "2024-10-21",
    info: "aespa's 1st album 'Armageddon' is out!<br>Listen and download on your favorite platform: https://aespa.lnk.to/Armageddon",
  },
  {
    title: "IVE 아이브 'Be Alright' MV",
    id: "gC7cURZsiH8",
    thumbnail: "https://img.youtube.com/vi/gC7cURZsiH8/0.jpg",
    url: "https://www.youtube.com/embed/gC7cURZsiH8?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: "236만회",
    date: "2025-07-16",
    info: "■「Be Alright<br>2025年7月16日(水) 先行配信<br>配信リンク： https://ive.lnk.to/qSldSj",
  },
  {
    title: "IVE 아이브 '해야 (HEYA)' MV",
    id: "07EzMbVH3QE",
    thumbnail: "https://img.youtube.com/vi/07EzMbVH3QE/0.jpg",
    url: "https://www.youtube.com/embed/07EzMbVH3QE?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: "8953만회",
    date: "2024-04-29",
    info: "Listen & Download from: https://ive.lnk.to/IVESWITCH <br>STARSHIP SQUARE (Domestic): https://bit.ly/3HtQ7GF<br>STARSHIP SQUARE (Global): https://bit.ly/3JWPxm0",
  },
  {
    title: "NMIXX(엔믹스) 'KNOW ABOUT ME' M/V",
    id: "aFrQIJ5cbRc",
    thumbnail: "https://img.youtube.com/vi/aFrQIJ5cbRc/0.jpg",
    url: "https://www.youtube.com/embed/aFrQIJ5cbRc?autoplay=1&mute=1",
    author: "JYP",
    visitor: "3269만회",
    date: "2025-03-17",
    info: "NMIXX(엔믹스) “KNOW ABOUT ME” M/V<br>NMIXX 4th EP ‘Fe3O4: FORWARD’ Stream & Buy Now ▶ https://nmixx.lnk.to/Fe3O4FORWARD",
  },
  {
    title: "NMIXX 'DASH' M/V",
    id: "7UecFm_bSTU",
    thumbnail: "https://img.youtube.com/vi/7UecFm_bSTU/0.jpg",
    url: "https://www.youtube.com/embed/7UecFm_bSTU?autoplay=1&mute=1",
    author: "JYP",
    visitor: "4031만회",
    date: "2024-01-15",
    info: "NMIXX “DASH” M/V<br>ⓒ 2024 JYP Entertainment. All Rights Reserved",
  },
  {
    title: "집들이 킹크랩 코스요리. 그런데 이제 대사가 조금 많은…",
    id: "jUyoZsP6C64",
    thumbnail: "https://img.youtube.com/vi/jUyoZsP6C64/0.jpg",
    url: "https://www.youtube.com/embed/jUyoZsP6C64?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "14만회",
    date: "2025-07-20",
    info: "해리, 포터, 건하 가족이 집에 놀러왔어요!<br>우리 집에 오랜만에, 정말 많은 단어가 공기중에 떠다녔습니다…",
  },
  {
    title: "조금 미친 아저씨들의 요리모임",
    id: "1ElI2b82-kY",
    thumbnail: "https://img.youtube.com/vi/1ElI2b82-kY/0.jpg",
    url: "https://www.youtube.com/embed/1ElI2b82-kY?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "27만회",
    date: "2025-07-08",
    info: "이상한 아저씨들 또 모였습니다.",
  },
  {
    title: "아저씨들이 만드는 6시간 코스요리",
    id: "MLlrpl57hds",
    thumbnail: "https://img.youtube.com/vi/MLlrpl57hds/0.jpg",
    url: "https://www.youtube.com/embed/MLlrpl57hds?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "30만회",
    date: "2025-04-23",
    info: "배가 터질 것 같은데<br>맛있어서 또 먹구...<br>모임 끝나면 2키로씩 살찌는 모임.",
  },
  {
    title: "대대방어! 이걸 내가 할 수 있을까..? 일단 오마카세 열었습니다.",
    id: "W-_hy7S9o0g",
    thumbnail: "https://img.youtube.com/vi/W-_hy7S9o0g/0.jpg",
    url: "https://www.youtube.com/embed/W-_hy7S9o0g?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "41만회",
    date: "2025-01-27",
    info: "오늘은 대방어를 선물받아서<br>급하게 친구들을 불러봤습니다.",
  },
  {
    title: "더워 죽겠는데 무슨 요리를 하세요. 딱 5초 만에 양념하는 방법",
    id: "KLKD9Gb0Gow",
    thumbnail: "https://img.youtube.com/vi/KLKD9Gb0Gow/0.jpg",
    url: "https://www.youtube.com/embed/KLKD9Gb0Gow?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "13민회",
    date: "2025-07-15",
    info: "랍스타맛이 나는 홍새우로 만든 새우장 레시피입니다.<br>손질된 냉동 새우는 원칙적으로 ‘가열 조리용’입니다.<br>또한 ‘가열 조리용’으로 판매되는 새우를 사용해 새우장을 만들어 판매하는 건 불법입니다.",
  },
  {
    title: "한낱 두부 따위가 고기보다 더 맛있는데?",
    id: "5HNk-P46ZBE",
    thumbnail: "https://img.youtube.com/vi/5HNk-P46ZBE/0.jpg",
    url: "https://www.youtube.com/embed/5HNk-P46ZBE?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "3.9만회",
    date: "2025-07-07",
    info: "갈비양념에 넣고 볶은 두부입니다.<br>자세한 레시피는 고정 댓글에 있는 블로그를 참고해 주세요.",
  },
  {
    title: "이걸 이제 알았다면… 지금껏 완전 손해 보신 겁니다.",
    id: "yT5Q-DCh5_o",
    thumbnail: "https://img.youtube.com/vi/yT5Q-DCh5_o/0.jpg",
    url: "https://www.youtube.com/embed/yT5Q-DCh5_o?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "3.9만회",
    date: "2025-06-16",
    info: "참치회를 조금 더 맛있게 먹는 방법입니다.<br>시청해 주셔서 감사합니다",
  },
  {
    title: "아는 동생 가게에 메뉴를 하나 만들어줬는데 접시까지 핥아먹더라고요...",
    id: "g8LlRTgmnoU",
    thumbnail: "https://img.youtube.com/vi/g8LlRTgmnoU/0.jpg",
    url: "https://www.youtube.com/embed/g8LlRTgmnoU?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "7만회",
    date: "2025-06-01",
    info: "미나리항정살 스테이크 레시피입니다.<br>자세한 레시피는 고정 댓글에 있는 블로그를 참고해 주세요.<br>시청해 주셔서 감사합니다.",
  },
];

const creators = [
  {
    name: "JYP",
    subscriber: "3070만명",
  },
  {
    name: "SM",
    subscriber: "3330만명",
  },
  {
    name: "STARSHIP",
    subscriber: "658만명",
  },
  {
    name: "취미로 요리하는 남자",
    subscriber: "141만명",
  },
  {
    name: "1분요리 뚝딱이형",
    subscriber: "303만명",
  },
];

//로그인된 사용자 정보
const authentication = {
  name: "박찬호",
  nickname: "TooMuchTalker",
  profile: "../images/TooMuchTalker.png",
};

let subscribes = ["취미로 요리하는 남자", "SM", "STARSHIP"];

//header, aside include
fetch("common.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("common").innerHTML = data;
    $("#profile-img").attr("src", authentication.profile);
    $("#dropdown-img").attr("src", authentication.profile);
    $("#profile-name").text(authentication.nickname);

    //사이드바 아이콘 활성화/비활성화
    const savedTheme = localStorage.getItem("theme");
    let pageName = location.pathname.split("/").pop().split(".")[0]; // 페이지 이름 가져오기

    switch (savedTheme) {
      case "light":
        $("#theme-btn").text("테마 : Light Mode");
        $("#logo").attr("src", "../images/youtube light.png");
        $(".icon[data-ad='youtubeMusic']").attr("src", "../images/youtubeMusic.png");
        $(".icon[data-ad='offlineSave']").attr("src", "../images/offlineSave.png");
        if (pageName === "main") {
          $(".icon[data-ad='main']").attr("src", "../images/home2.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub1.png");
        } else if (pageName === "subscribe") {
          $(".icon[data-ad='main']").attr("src", "../images/home1.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub2.png");
        } else if (pageName === "detail") {
          $(".icon[data-ad='main']").attr("src", "../images/home1.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub1.png");
        }
        break;
      case "dark":
        $("#theme-btn").text("테마 : Dark Mode");
        $("#logo").attr("src", "../images/youtube dark.png");
        $(".icon[data-ad='youtubeMusic']").attr("src", "../images/youtubeMusic dark.png");
        $(".icon[data-ad='offlineSave']").attr("src", "../images/offlineSave dark.png");
        if (pageName === "main") {
          $(".icon[data-ad='main']").attr("src", "../images/home2 dark.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub1 dark.png");
        } else if (pageName === "subscribe") {
          $(".icon[data-ad='main']").attr("src", "../images/home1 dark.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub2 dark.png");
        } else if (pageName === "detail") {
          $(".icon[data-ad='main']").attr("src", "../images/home1 dark.png");
          $(".icon[data-ad='subscribe']").attr("src", "../images/sub1 dark.png");
        }
        break;
    }
  });

//aside 페이지 이동
$(document).on("click", ".side-btn", function () {
  location.href = $(this).data("ad") + ".html";
});

//검색 시 검색어를 매개변수로 main으로 이동
$(document).on("submit", "#search-form", function (e) {
  e.preventDefault();
  const keyword = $("#search-input").val().trim();
  if (keyword === "") {
    alert("검색어를 입력하세요.");
  } else {
    location.href = `main.html?keyword=${keyword}`;
  }
});

//------------------------------------Dark Mode----------------------------------------------------------
$(document).on("click", "#theme-btn", function () {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  location.reload();
});

// 페이지 로드 시 지정된 테마 적용
$(document).ready(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
     if(savedTheme === null){
        localStorage.setItem("theme", "light");
      }
    document.body.classList.remove("dark-mode");
  }
});
