var link = 'http://pd.npr.org/anon.npr-mp3/npr/waitwait/2015/05/20150516_waitwait_';
var button1 = document.getElementById('part1');
var button2 = document.getElementById('part2');
var button3 = document.getElementById('part3');
var player = document.getElementById('player');

button1.addEventListener('click', function(){
	player.src = "http://pd.npr.org/anon.npr-mp3/npr/waitwait/2015/05/20150516_waitwait_01.mp3";
	player.play();
});
button2.addEventListener('click', function(){
	player.src = "http://pd.npr.org/anon.npr-mp3/npr/waitwait/2015/05/20150516_waitwait_02.mp3";
	player.play();
});

button3.addEventListener('click', function(){
	player.src = "http://pd.npr.org/anon.npr-mp3/npr/waitwait/2015/05/20150516_waitwait_03.mp3";
	player.play();
});