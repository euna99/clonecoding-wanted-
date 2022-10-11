// document.querySelectorAll('.btnmove').forEach(function(item){
//     item.addEventListener('click', function(e){
//         clearInterval(banner.rollId);//롤링 인터벌 해제
//         //화살표 방향 구분
//         if(e.target.parentElement.parentElement.classList.contains('prev')){
//             banner.rollPrev();
//         }else{
//             banner.rollNext();
//         }
//         banner.rollId = setInterval(banner.rollNext, banner.interval);//롤링 인터벌 재호출
//     });
// }); 

// rollPrev: function () {
//     document.querySelector('.rollimgs').classList.add('reverse');
//     if(document.querySelector('.nextroll')){
//         document.querySelector('.nextroll').classList.remove('nextroll');
//     }
//     if(document.querySelector('.currentroll')){
//         document.querySelector('.currentroll').classList.add('nextroll');
//         document.querySelector('.currentroll').classList.remove('currentroll');
//     }
//     if(document.querySelector('.prevroll')){
//         document.querySelector('.prevroll').classList.add('currentroll');
//         document.querySelector('.prevroll').classList.remove('prevroll');
//     }else{

//     }
//     if(document.querySelector('.currentroll').previousElementSibling){
//         document.querySelector('.currentroll').previousElementSibling.classList.add('prevroll');
//     }else{
//         document.querySelector('.rollimgs li:last-child').classList.add('prevroll');
//     }
// }


let hamberger = document.getElementsByID("hamberger");
let test=document.getElementById("test");
hamberger.addEventListener("mouseover",function(event){
    test.style.display="block"
})
hamberger.addEventListener("mouseout",function(event){
    test.style.display="none"
})


