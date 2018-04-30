var topicVsQues ;
var singleQuote="\"";
$(document).ready(function(){
	console.log('jahahah');

	
	d3.json('NewTopQuestionsIdAnswersMembers.json', function(json) {
    topicVsQues = json;
    console.log(json);
    console.log('brain');
    console.log(topicVsQues['brain-questions']);
});

    $(".topMembers").hover(function(){
        $(this).css("background", "#f5f5f5");
    }, function(){
        $(this).css("background", "#fff");
    });
});

	


function hideShowAnswer(id)
{
	//console.log($(this));
	$("#"+id).siblings('div').toggle();
	$("#"+id).children('div').toggle();

	//console.log("#"+id);
	//console.log($("#"+id).siblings('div'));
}

function showTopQuestions(topicid) {
	// body...
	//alert('clicked');
	
	var s = [];
	var memberSet = new Set();
	var members = [];
	var obj = topicVsQues[topicid];

	var details = obj['details'];
	for(var i in details)
	{
		//console.log(details[i]['title']);			
		s.push(" <div id=\"");
		s.push(details[i]['questionId']);
		s.push("\" class=\"questionDiv\" onclick=\"hideShowAnswer(\'");
		s.push(details[i]['questionId']);
		s.push("\')\"> <a   class=\"questionLink\" target=\"_blank\" href=");
		s.push(singleQuote);
		s.push(details[i].url);
		s.push(singleQuote);
		s.push(">")
		s.push(details[i].title);
		s.push("</a>");
		s.push("<div style=\"display:none;position: relative; top: 50px;\">");
		s.push(details[i].ans);
		s.push("</div>");
		s.push("</div>");
		if( !(details[i].membername === null) && details[i].membername && memberSet.has(details[i].membername) == false){
			members.push("<div class=\"memberDiv\"> ");
			members.push("<p class=\"memberContent\">");
			members.push(details[i].membername);
			members.push("</p>")
			members.push("</div>");		
			memberSet.add(details[i].membername);
		}
	}
	console.log(s.join(""));
	$('#topQuestions').empty().html(s.join(""));
	$('#topMembers').empty().html(members.join(""));
}