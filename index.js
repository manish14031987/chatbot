var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var port = process.env.PORT || 8080;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/send', function(req, res){
  res.end('Vil du ha noe fra under alternativer? <ul><li type="Bilde" onclick="select_file(this)">  Bilde</li><li type="Musikk" onclick="select_file(this)"> Musikk</li><li type="video" onclick="select_file(this)"> Video</li></ul>');
});

app.get('/getfile', function(req, res){
	if(req.query.type == 'Bilde'){
		res.end('<img src="assets/image.jpg" class="response-image"><br>Vil du ha noe fra under alternativer?<ul><li type="Bilde" onclick="select_file(this)">  Bilde</li><li type="Musikk" onclick="select_file(this)"> Musikk</li><li type="video" onclick="select_file(this)"> Video</li></ul>');
	}
	else if(req.query.type == 'Musikk'){
		res.end('<audio id="t-rex-roar" controls src="http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"></audio><br>Vil du ha noe fra under alternativer? <ul><li type="Bilde" onclick="select_file(this)">  Bilde</li><li type="Musikk" onclick="select_file(this)"> Musikk</li><li type="video" onclick="select_file(this)"> Video</li></ul>');
	}
	else if(req.query.type == 'video'){
		res.end('<iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br>Vil du ha noe fra under alternativer?<ul><li type="Bilde" onclick="select_file(this)">  Bilde</li><li type="Musikk" onclick="select_file(this)"> Musikk</li><li type="video" onclick="select_file(this)"> Video</li></ul>');
	}
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
