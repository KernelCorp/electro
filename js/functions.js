$(document).ready(function(){
	if(($.browser.msie)||($.browser.opera&&$.browser.version<11)||($.browser.safari&&$.browser.version<5)||($.browser.mozilla&&$.browser.version<4)){
		var deftxt = new Array(),ini = 0;
		$('input,textarea').each(function(i){
			if($(this).attr('placeholder')){
				deftxt[i] = $(this).attr('placeholder');
				$(this).val(deftxt[i]).attr('rel',i);
			}
		});
		$('input,textarea').focus(function(){
			$(this).addClass('focus');
			if($.inArray($(this).val(),deftxt)>-1){
				$(this).val('');
			}
		});
		$('input,textarea').blur(function(){
			$(this).removeClass('focus');
			if($(this).val().length<=0)$(this).val(deftxt[$(this).attr('rel')]);
		});
	}
	
	$('.popup .close').click(function(){
		$(this).parent().hide();
		$('#overlay').hide();
	});
	$('#overlay').click(function(){
		$('.popup').each(function(){
			$(this).hide();
		});
		$(this).hide();
	});
});
function showpopup(id){
	var st=0,ht=0;
	ht=parseInt($('#wrapper').height());
	st = $(window).scrollTop();
	$('#overlay').height(ht).show();
	$('#'+id).css({top:st+'px'}).show();
}