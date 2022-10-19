let dev_fliter=document.querySelector(".dev_fliter")
let bookmark=document.querySelector(".bookmark")
window.addEventListener('scroll', () => { 
    let top=document.documentElement.scrollTop
    console.log(top)
    if (top>300){
        dev_fliter.style.position="fixed"

    }
    // console.log(window.scrollX, window.scrollY);
    else{
        dev_fliter.style.position="unset"
    }
  });
    
/* [html 최초 로드 및 이벤트 상시 대기 실시] */
// window.onload = function() {
//     console.log("");
//     console.log("[window onload] : [start]");
//     console.log("");
// };



// /* [top 스크롤 이벤트 함수 정의] */
// function top_scroll_move(){
//     console.log("");
//     console.log("[top_scroll_move] : [start]");
//     console.log("");

//     // 스크롤을 이동할 레이아웃 아이디 지정
//     var tagId = document.getElementsByClassName(".dev_fliter");

//     // [맨 상단으로 스크롤 이동 실시]
//     tagId.scrollTop = 0;
// };


