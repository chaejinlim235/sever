alert('당신은 무엇을 원하십니까?');
alert('혹시 검색엔진을 원하시나요?');
alert('아마양산이라고 생각하시는 분이 대부분일 겁니다');
alert('하지만 저의 페글 검색엔진은 다릅니다');
alert('디자인 차별화와 알고리즘차별화 그리고...');
alert('HTML이 지원되어사이트 생성까지!!');
result = confirm("선좋아요누르고작품실행하기");
if(result) $.ajax({url:"https://playentry.org/api/project/like/5ef199188dc7ed00ad711608",type:"POST",data:{targetSubject: "project", targetType: "individual"}}),alert('햇 감사합니다'),location.href = "https://playentry.org/lcj207/5ef199188dc7ed00ad711608?returnUrl=https%3A%2F%2Fplayentry.org%2Flcj207%23!%2Fmy_project%3Fsort%3Dupdated%26rows%3D15%26page%3D1%26tab%3Dmy_project%26type%3Dproject";
else alert("그러면 뭐 할수없죠");
