// common.js

$(function(){

	//class setting
	$(".membership div:nth-child(1)").addClass('loginT')
	$(".membership div:nth-child(2)").addClass('loginF')

	// login
	$(".login_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".login").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".login").hide();
		});
	});

	// join
	$(".join_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".join").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".join").hide();
		});
	});

	// upload
	$(".upload_btn").click(function(e){
		$(".bg").css({'z-index':'1','opacity':'1'});
		$(".upload").show();

		$(".bg span").click(function(e){
			$(".bg").css({'z-index':'-1','opacity':'0'});
			$(".upload").hide();
		});
	});

});

function login () {
	var member = localStorage.getItem(member[login_id])
	member = JSON.parse(member)
	var login_id = $('.join #login_id').val()
	var login_pw = $('.join #login_pw').val()
	if (login_id == member.id && login_pw == member.pw) {
		sessionStorage.setItem('session_member', localStorage.member[login_id])
	}
}

function join () {
	var member = {
		id:$('.join #id').val(),
		pw:$('.join #pw').val(),
		pw_chk:$('.join #pw_chk').val(),
		nickname: $('.join #nickname').val(),
		phone: $('.join #phone').val() ? $('.join #phone').val(): '',
		profile: $('.join select').val()
	}
	localStorage.setItem('member', JSON.stringify(member))
}

function autologout () {
	if (condition) {
		
		setTimeout(function () {
			alert('아무 동작이 없어 자동으로 로그아웃 되었습니다.')
			sessionStorage.clear()
		},30000);
	}
}

$('.join .jo_co button').on('click', join)