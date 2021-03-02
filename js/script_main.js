
//1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();  //기본적으로 정의된 메소드를 작동하지 못하도록 함
});


//slick.js

$(function(){    //외부파일로 js파일 연결하는 것이기 때문에 function으로 감싸줘야함
    $('.visual .slide').slick({
        arrows: false,  //화살표 사용안함
        dots: false, //인디케이스 해제
        fade: true,//페이드효과
        autoplay: true,//자동재생
        autoplaySpeed:4000,// 재생시간  4초
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
    
    //slide2
    $('.intro_dining .slide2').slick({
        arrows: false,  //화살표
        dots: false, //인디케이스 해제
        fade: false,//페이드효과
        autoplay: true,//자동재생
        autoplaySpeed:4000,// 재생시간
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
});

//탭메뉴
$(function(){
    
    //a 태그가 클릭되면 이벤트를 걸어주겠다(클릭되면 다음의 함수 실행)
    $('.introduce .roomInfo .tab li a').on('click', function(){

        // ' ' 안에는 선택자,  클릭하는 인덱스의 자신의 인덱스 번호가 변수에 저장(deluxe dougle, deluxe twin 선택에 따라서 인덱스 0 또는 1 반환)
        //index($(this))는 갯수를 세주는 메소드
        var num = $('.introduce .roomInfo .tab li a').index($(this));

        //tabBox에 붙어있는 on 클래스 삭제 => 모든 탭 닫음
        $('.introduce .roomInfo .tabBox').removeClass('on');

        //num에 부여된 인덱스값에 on을 더해라 
        //eq()메소드는 인덱스값을 사용해 원하는 위치의 요소를 선택해서 사져올 수 있는 선택 메소드임
        $('.introduce .roomInfo .tabBox:eq('+ num +')').addClass('on'); 
    });
});

//scroll animation
$(function() {

    //애니메이스 클래스의 scrolla를 호출해서 적용함
	$('.animate').scrolla({  //<script src="js/scrolla.jquery.min.js"></script> 연결해줘야함
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true // 스크롤 할때마다 실행되게 하려면 false
	});    
      }); 

//패밀리 사이트
$(function(){  // txt_wrap아래 .btn_fam태그에 클릭이벤트 발생하면 이벤트 실행(item_wrap)
    $('.txt_wrap .btn_fam ').on('click', function(){
        $('.fam_site_wrap .item_wrap').slideToggle();
    });
});

//햄버거버튼
$(function(){
    //가로줄 3개(메뉴버튼) 클릭하면 다음의 함수 실행
    $('header .menuOpen').on('click', function(){
        //on클래스 이름을 붙여라
        $('header .menuWrap').addClass('on');
    });
    //close 버튼을 클릭하면 다음의 함수 실행
    $('.menuWrap .close').on('click', function(){
        //클래스 이름 on을 제거
        $('.menuWrap').removeClass('on');
    });
});

//헤더 이벤트
var scrollTop = 0;
//문서의 scrollTop의 위치값을 저장함
scrollTop = $(document).scrollTop();

//scroll resize 할때 다음의 함수 실행
$(window).on('scroll resize', function(){
 scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
        
      //200보다 클 경우 on 클래스 header에 붙임 
      if( scrollTop > 200) {
           $('header').addClass('on'); 
        }

      //200보다 크지 않을 경우 on클래스 지우기
      else{
           $('header').removeClass('on'); 
        }
    } 











