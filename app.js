var topicVsQues ;
var singleQuote="\"";
var topicNameVsId ;
var memberAns ;
var currentTopicId ;
var currMember;
$(document).ready(function(){
	
	d3.json('TopQuestionsIdAnswersMembersWithId.json', function(json) {		
    topicVsQues = json;
    
});
	d3.json('AllMembersTopicsAnsers.json', function(json) {
    memberAns = json;
    
});
	d3.json('NewTopicNameVsID.json', function(json) {	
	//console.log(json);
	//console.log(json['Feeding']);
    topicNameVsId = json;
	});
});


function showMainQuestions()
{
	$('#mainDiv').show();
	$("#"+currMember).hide();	
	$('#goback').hide();
}	

function showMemberAnswers(memberid, topicid)
{

	var s = [];
	$('#goback').show();
	currMember = memberid;
	if ($("#"+memberid).length) {
		//console.log("already present");
		$("#"+memberid).show();	
		$('#mainDiv').hide();
	}
	else{
		var s = [];		
		s.push("<div id= \"");
		s.push(memberid);
		s.push("\">")
		var arr = memberAns[memberid];
		var answers = arr[topicid];	
		//console.log(answers);
		for(var i in answers)
		{
			s.push("<div>");
			s.push("<p>");
			s.push("<strong>Q: ")
			var tit = answers[i].title.replace('\"','');
			tit = tit.replace("\\",'');
			s.push(tit);
			s.push("</strong>  ")
			//s.push(answers[i].date)
			s.push("  ");
			s.push(" <img src=\"greenupvote.jpeg\" height=\"20\" width=\"20\"> ");
			s.push("<span style=\"color=green;\">");
			s.push(answers[i].votes);
			s.push("</span>");
			s.push("</p>");
			s.push("<p> <strong>Ans: </strong>");
			var temp = answers[i].answer.replace('\"','');
			temp = temp.replace("\\",'');
			s.push(temp);
			s.push("</p>");
			s.push("</div>");
			//console.log(answers[i].title);
		}
		s.push("</div>");
	}
	//console.log(s.join(""));
	$('#topQuestions').append(s.join(""));
	$('#mainDiv').hide();
}


function hideShowAnswer(id)
{
	
	$("#"+id).siblings('div').toggle();
	$("#"+id).children('div').toggle();
	//console.log($("#"+id).find('#view').text());
	//console.log($("#"+id).find('#view').attr("src"));
	if ($("#"+id).find('#view').attr("src") == "scrollDown.png")
	{
		$("#"+id).find('#view').attr("src","scrollUp.png");	
	}
	else
	{
		$("#"+id).find('#view').attr("src","scrollDown.png");
	}
	//console.log($("#"+id).find('#view'));
	//console.log("#"+id);
	//console.log($("#"+id).siblings('div'));
}

function showTopQuestions(topicName) {
	// body...
	//alert('clicked' + " " + parent.document.getElementById("disease1").innerHTML);
	var topicid = topicNameVsId[parent.document.getElementById("disease1").innerHTML];
	currentTopicId = topicid;
	var s = [];
	s.push("<div id=\"mainDiv\">")
	var memberSet = new Set();
	var questionSet = new Set();
	var members = [];
	var obj = topicVsQues[topicid];

	var details = obj['details'];
	for(var i in details)
	{
		if(questionSet.has(details[i]['questionId']) == false)	
		{
			questionSet.add(details[i]['questionId']);
			s.push(" <div id=\"");
			s.push(details[i]['questionId']);
			s.push(singleQuote);
			s.push("style=\" cursor:pointer;\" >");
			// s.push("onclick=\"hideShowAnswer(\'");
			// s.push(details[i]['questionId']);
			// s.push("\')\"> ");		

			s.push("<p class=\"mblue\">");
			s.push("<strong> Q: </strong>");
			s.push(details[i].title.replace('\\',''));					
			if(!(details[i].membername === null))
			{
				s.push("<span style=\"color:#C24747;\">  Answered by: ");
				s.push(details[i].membername.replace('\"',''));
				s.push("</span>");				
			}			

			s.push(" <img src=\"greenupvote.jpeg\" height=\"20\" width=\"20\">");
			s.push("<span style=\"color:green;\"> ");
			s.push(details[i].helpful);
			s.push("</span>");

			s.push(" <img id=\"view\" src=\"scrollDown.png\" height=\"20\" width=\"20\" onclick=\"hideShowAnswer(\'");
			s.push(details[i]['questionId']);
			s.push("\'); return false;\" >");
			//s.push(" <span style=\"font-size:10px;color:green;\" id=\"view\" onclick=\"hideShowAnswer(\'");
			//s.push(details[i]['questionId']);
			//s.push("\'); return false;\" class=\"underline\" >view</span> ");

			if(!(details[i].membername === null)){
				s.push("<p>")
				s.push("<span class=\"underline\" style=\"font-size:10px;color:#C24747;\" onclick=\"showMemberAnswers(\'");
				s.push(details[i].memberId);
				s.push("\','");
				s.push(topicid);
				s.push("'); return false;\" > ..all answers by ");
				s.push(details[i].membername.replace('\"',''));			
				s.push("</span>");
				s.push("</p>")
			}
			s.push("</p>");						
			s.push("<div style=\"display:none;position: relative; top: 20px;height:250px; \">");
			s.push("<strong>Ans:</strong>");
			s.push(" <p>");
			s.push(details[i].ans.replace('\\',''));
			s.push("</p>");
			s.push("</div>");
			s.push("</div>");
			
		}
	}
	s.push("</div>");
	//console.log(s.join(""));
	$('#topQuestions').empty().html(s.join(""));	
}