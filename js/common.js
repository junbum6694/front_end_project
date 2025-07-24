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
  },
  {
    title: "ITZY(있지) '달라달라' M/V",
    id: "pNfTK39k55U",
    thumbnail: "https://img.youtube.com/vi/pNfTK39k55U/0.jpg",
    url: "https://www.youtube.com/embed/pNfTK39k55U?autoplay=1&mute=1",
    author: "JYP",
    visitor: "3.3억회",
    date: "2019-02-11",
  },
  {
    title: "aespa 에스파 'Supernova' MV",
    id: "phuiiNCxRMg",
    thumbnail: "https://img.youtube.com/vi/phuiiNCxRMg/0.jpg",
    url: "https://www.youtube.com/embed/phuiiNCxRMg?autoplay=1&mute=1",
    author: "SM",
    visitor: "2억회",
    date: "2024-05-13",
  },
  {
    title: "aespa 에스파 'Whiplash' MV",
    id: "jWQx2f-CErU",
    thumbnail: "https://img.youtube.com/vi/jWQx2f-CErU/0.jpg",
    url: "https://www.youtube.com/embed/jWQx2f-CErU?autoplay=1&mute=1",
    author: "SM",
    visitor: "2억회",
    date: "2024-10-21",
  },
  {
    title: "IVE 아이브 'Be Alright' MV",
    id: "gC7cURZsiH8",
    thumbnail: "https://img.youtube.com/vi/gC7cURZsiH8/0.jpg",
    url: "https://www.youtube.com/embed/gC7cURZsiH8?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: "236만회",
    date: "2025-07-16",
  },
  {
    title: "IVE 아이브 '해야 (HEYA)' MV",
    id: "07EzMbVH3QE",
    thumbnail: "https://img.youtube.com/vi/07EzMbVH3QE/0.jpg",
    url: "https://www.youtube.com/embed/07EzMbVH3QE?autoplay=1&mute=1",
    author: "STARSHIP",
    visitor: "8953만회",
    date: "2024-04-29",
  },
  {
    title: "NMIXX(엔믹스) 'KNOW ABOUT ME' M/V",
    id: "aFrQIJ5cbRc",
    thumbnail: "https://img.youtube.com/vi/aFrQIJ5cbRc/0.jpg",
    url: "https://www.youtube.com/embed/aFrQIJ5cbRc?autoplay=1&mute=1",
    author: "JYP",
    visitor: "3269만회",
    date: "2025-03-17",
  },
  {
    title: "NMIXX 'DASH' M/V",
    id: "7UecFm_bSTU",
    thumbnail: "https://img.youtube.com/vi/7UecFm_bSTU/0.jpg",
    url: "https://www.youtube.com/embed/7UecFm_bSTU?autoplay=1&mute=1",
    author: "JYP",
    visitor: "4031만회",
    date: "2024-01-15",
  },
  {
    title: "집들이 킹크랩 코스요리. 그런데 이제 대사가 조금 많은…",
    id: "jUyoZsP6C64",
    thumbnail: "https://img.youtube.com/vi/jUyoZsP6C64/0.jpg",
    url: "https://www.youtube.com/embed/jUyoZsP6C64?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "14만회",
    date: "2025-07-20",
  },
  {
    title: "조금 미친 아저씨들의 요리모임",
    id: "1ElI2b82-kY",
    thumbnail: "https://img.youtube.com/vi/1ElI2b82-kY/0.jpg",
    url: "https://www.youtube.com/embed/1ElI2b82-kY?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "27만회",
    date: "2025-07-08",
  },
  {
    title: "아저씨들이 만드는 6시간 코스요리",
    id: "MLlrpl57hds",
    thumbnail: "https://img.youtube.com/vi/MLlrpl57hds/0.jpg",
    url: "https://www.youtube.com/embed/MLlrpl57hds?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "30만회",
    date: "2025-04-23",
  },
  {
    title: "대대방어! 이걸 내가 할 수 있을까..? 일단 오마카세 열었습니다.",
    id: "W-_hy7S9o0g",
    thumbnail: "https://img.youtube.com/vi/W-_hy7S9o0g/0.jpg",
    url: "https://www.youtube.com/embed/W-_hy7S9o0g?autoplay=1&mute=1",
    author: "취미로 요리하는 남자",
    visitor: "41만회",
    date: "2025-01-27",
  },
  {
    title: "더워 죽겠는데 무슨 요리를 하세요. 딱 5초 만에 양념하는 방법",
    id: "KLKD9Gb0Gow",
    thumbnail: "https://img.youtube.com/vi/KLKD9Gb0Gow/0.jpg",
    url: "https://www.youtube.com/embed/KLKD9Gb0Gow?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "13민회",
    date: "2025-07-15",
  },
  {
    title: "한낱 두부 따위가 고기보다 더 맛있는데?",
    id: "5HNk-P46ZBE",
    thumbnail: "https://img.youtube.com/vi/5HNk-P46ZBE/0.jpg",
    url: "https://www.youtube.com/embed/5HNk-P46ZBE?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "3.9만회",
    date: "2025-07-07",
  },
  {
    title: "이걸 이제 알았다면… 지금껏 완전 손해 보신 겁니다.",
    id: "yT5Q-DCh5_o",
    thumbnail: "https://img.youtube.com/vi/yT5Q-DCh5_o/0.jpg",
    url: "https://www.youtube.com/embed/yT5Q-DCh5_o?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "3.9만회",
    date: "2025-06-16",
  },
  {
    title: "아는 동생 가게에 메뉴를 하나 만들어줬는데 접시까지 핥아먹더라고요...",
    id: "g8LlRTgmnoU",
    thumbnail: "https://img.youtube.com/vi/g8LlRTgmnoU/0.jpg",
    url: "https://www.youtube.com/embed/g8LlRTgmnoU?autoplay=1&mute=1",
    author: "1분요리 뚝딱이형",
    visitor: "7만회",
    date: "2025-06-01",
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
  profile: "../images/profile.png",
};

let subscribes = ["JYP", "취미로 요리하는 남자"];

//aside 페이지 이동
$(".side-btn").on("click", function () {
  location.href = $(this).data("ad") + ".html";
});

//검색 시 검색어를 매개변수로 main으로 이동
$("#search-form").on("submit", function (e) {
  e.preventDefault();
  const keyword = $("#search-input").val().trim();
  location.href = `main.html?keyword=${keyword}`;
});
