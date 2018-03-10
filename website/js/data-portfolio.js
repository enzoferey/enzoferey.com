var botxo = {
	title: 'BotXO',
	content: '-Soon-'
};

var exce = {
	title: 'Exce Consulting Group',
	content: '-Soon-'
};

var incyde = {
	title: 'Cámaras Fundación INCYDE',
	content: '-Soon-'
};

var logo = {
	title: '1 Logo Week',
	content: '-Soon-'
};

var talentum = {
	title: 'Talentum Telefónica',
	content: '-Soon-'
};

var websail = {
	title: 'Websail',
	content: '-Soon-'
};

var ephoto = {
	title: 'e-PhotoPRO',
	content: '-Soon-'
};

var picbooth = {
	title: 'Picbooth',
	content: '-Soon-'
};

var showdownStats = {
	title: 'Showdown Stats',
	content: 'This was my <b>first real project with React</b>. Soon after finishing VGC Ladder I found a very active discussion on Twitter about the lack of stadistics in Pokemon esports that could tell players how different teams and pokemons were performing. In League of Legends for example there are websites like <a href="https://www.op.gg" target="_blank">op.gg</a> that show players performances and others like <a href="http://www.probuilds.net/" target="_blank">champion.gg</a> that show winrates and metagames tendencies. Both websites work because of Riot\'s open API, however the <a href="https://pokemonshowdown.com/" target="_blank">Pokemon simulator</a> where everybody plays doesn\'t have such API. But I found a work around: the simulator was logging every game action on console so I built a <b>parser to gather game data</b> and then I would upload it to a database to run stats on it.<br><br>The whole project works throuhgt to a <b>Google Chrome extension</b> where players login into their accounts and then it automatically records the data of all their games. They can later visit the website to see their stats.<br><br>The Chrome extension is actually a single <b>JS script</b> that injects code into the page that <b>overwrites console.log</b> default action and then parses each of the logs to finally send everything at the end of the game. I have a <b>Node.js server</b> running on <b>Heroku</b> to interact with a <b>MongoDB</b> database and the website where the stats are displayed is built with <b>React</b>.<br><br>The project is actually <b>95% completed</b> but I had <b>copyrights issues</b> I didn\'t know about so I still need to figure out how to work around that problem.'
};

var vgcLadder = {
	title: 'VGC Ladder',
	content: 'This was my <b>first backend project</b>. At the beginning of summer 2017 some friends who run the <b>biggest spanish Pokemon esport community in Spain</b> approached me to solve <b>one big problem</b> in the community at that moment. People were training on online simulators but tournaments were actually played on consoles, which felt kind of different, plus tournament games were <b>best of three sets</b> and there wasn\'t a way to play bo3 on the simulator. We discussed for several days to find a solution and we eventually created <a href="http://vgcladder.com/" target="_blank">VGC Ladder</a>.<br><br>This website is a matchmaking platform for people who wants to play bo3 sets with other people of their level. It incorporates an <b>ELO-like system</b> and there is a <b>ranking</b>. Everything was built with <b>Node.js</b>, <b>PostgreSQL</b> database, <b>Socket.io</b> for private chat communication between matched players and plain <b>HTML, CSS, jQuery</b> for front-end (I didn\'t choose React because that would just add a layer of difficulty to the project and I wanted to focus on backend architecture).<br><br>The project itself ended up being a <b>failure</b> because we got huge spikes the first days and the platform wasn\'t robust enough to handle like <b>500 players</b> at the same time, plus <b>we didn\'t manage to find the right solution</b> for cheating (when points are earned or lost people will always try to hack the system). By the time I fixed both of these mistakes players had stoppped using it and <b>we never got a chance to do a second launch</b>.<br><br>Looking back this was my <b>first full stack project</b> and the first time ever I was doing backend tasks such creating a <b>database from scratch</b>, having a <b>server</b>, deploying to <b>Heroku</b>, <b>monitorize</b> the server with <b>email alerts</b>, etc. <b>The only thing I didn\'t do myself was the logo</b>. I guess it was good enough for a first time.'
};

var rating = {
	title: 'react-rating-system',
	content: 'This was my <b>first true React component</b>. After publishing <a href="https://github.com/enzoferey/react-swipe-navigation" target="_blank">react-swipe-navigation</a> I felt kinda like a thief because I didn\'t add that much on top of the already existing code I used, so I decided I would build <b>something from the ground</b>. At that time I started a project for a local JustEat-like that finally never happent, but I knew I would need a <b>rating system</b> for the restaurants. A couple of hours later I had a first version of <a href="https://github.com/enzoferey/react-rating-system" target="_blank">react-rating-system</a>.<br><br>By that time I already had a better understanding of React, so the result ended up being far better than the previous component. I remember the abstraction of this component being way more difficult to adjust all the <a href="https://www.enzoferey.com/react-rating-system/" target="_blank">silly use cases of the demo</a>.'
};

var swipe = {
	title: 'react-swipe-navigation',
	content: 'This was my <b>first open source code</b>. Along the first month learning React I stumbled into <b>npm</b> package manager and the idea of having <b>something mine accesible to everybody in the whole world throught a single command</b> was mind blowing for me. It was a way to giveback to the community aswell. So I decided to build something I would probably use a lot in all kind of projects and specially beginners would like to have. That\'s why I created <a href="https://github.com/enzoferey/react-swipe-navigation" target="_blank">react-swipe-navigation</a> (this was way before discovering react-router).<br><br>It\'s nothing more than a tipical <b>Tabs component</b>, but it actually taught me a lot things. First of all <b>component abstraction</b>, in order to be reusable to other people in other project it had to be <b>totally independent and customizable</b>. In second place, as I didn\'t have much experience yet, I had to reuse a library which was already solving the problem in plain JS, that helped me to understand more about <b>imports</b> and <b>exports</b>. Finally I had to do all the process of uploading it to npm and setting up a <b>README</b> page in Github, I remember it like something quite magical. The code is actually very funny, but I won\'t update it.'
};

var react = {
	title: 'How I fell in love with React',
	content: 'This was the <b>first contact with my lover</b>. Right after stopping Mr. Melon Games in summer 2016 I somehow got attracted by web development again and that\'s the moment when I met <b>React</b>. It was also the same moment when I realized <b>I actually didn\'t know anything about real web development world</b>. So I took the decision to learn about React first and fill knowledge gaps along the way. Back to Mr. Melon Games times I really enjoyed writing DevBlogs, it was for me a way to <b>give back to the community</b>, so I decided I would immortalize my <b>first month using React</b>. Where? I dug a little bit into React authors and I discovered <b>Medium</b>, an amazing platform where people write surprisingly good articles about all kind of subjects (being tech and startups the most popular). You can check the <a href="https://medium.com/@enzoferey/how-i-fell-in-love-with-react-part-0-background-e736460a8cd4" target="_blank">articles</a>.<br><br>This month was both incredibly intense and incredibly fun. By that time React was quite a new framework and its <b>entry barrier</b> was actually very high for a stranger to web development like me (webpack, babel, ...), plus, to be honest, I couldn\'t find a single good tutorial giving you insights about how everything was connected (which I was very interested about because I was looking to get a basic understanding of the whole ecosystem). In this series of articles I tried to explain the best I could things that I had just learnt a couple of days ago. That forced me do a lot of research in order to understand everything. Thanks to this experience I finally understood all the people saying that <b>teaching something helps you to get a better understanding of it</b>.'  
};

var mrmelon = {
	title: 'Mr. Melon Games',
	content: 'This was my <b>first company</b>. Of course it failed. We were 3 young boys making <b>videogames</b> in a specialized game incubator program in Madrid (Demium Games) and I was the only developer in the team (artist, musician and me).We first started doing <b>HTML5 browser</b> games and then moved to <b>mobile phone</b> games. All of them were <b>2D games</b>. I would also write <b>weekly DevBlogs</b> about my job and we were very active on <b>Twitter</b><br><br>We built our games using <b>Game Maker: Studio</b> which has its own coding langague called <b>GML</b> and using <b>Unity</b> which uses <b>C#</b>.<br><br>This experience that lasted for one year is probably the one that taught me most of the things I know about startups and other non-coding fields. First of all I learnt that <b>building a company isn\'t that easy</b>, it requires a lot of things in order to work. In second place, because of the incubator program we would frequently assist talks and workshops about <b>startup ecosystem</b>, giving us a firgm grasp of the basics. In third place I discovered for the first time <b>growth hacking</b> methods, I even <a href="https://youtu.be/JPB6UF1o_jQ?t=2h19m52s" target="_blank">gave a talk</a> about that on a marketing event. I got very used to speak in front of people as we gave several talks and I even worked as a videogame teacher in some workshops. Finally it was the first time I would <b>code things made from other people<b>.'
};

var rincon = {
	title: 'Rincón Natural',
	content: 'This was my <b>first paid developer job</b>. Back to year 2013, a local store of my hometown that my parents used to go to wanted to start a <b>multilanguage online shop</b>. I only had prior experience because of the SpainVGC community and some videogame coding with Unity, but I decided to take the challenge.<br><br>The first step was to find the easiest way to build a e-commerce. I didn\'t even know how to start so I remember googling "online shop wordpress" and I quickly found my solution: <b>Prestashop</b>. I asked the client to choose one of the default templates and modified it to match their needs.<br><br>This project taught me that sometimes it\'s just better to <b>jump into the unknown</b> and then manage to <b>Google</b> you out. It was also my first contact with a <b>template engine</b> such as <b>Smarty</b>, which actually was a pioneer in this field used commonly nowadays.'
};

var spainVGC = {
	title: 'SpainVGC',
	content: 'This was my <b>first coding task ever</b>. I used to play Pokemon e-sport (VGC) around 2011, so I decided to build the <b>first online community for VGC players</b>. Although all our content was in spanish, we had over 500 active users and over 1000 messages in the forum per day.<br><br>The initial website was built with the help of <b>Namo</b> web editor in plain <b>HTML</b> and <b>CSS</b> and the forum with <b>MyBB</b> open source forum software. Later on I learnt enough to migrate to <b>Wordpress</b>.<br><br>This first project taught me a lot about <b>managing teams of people</b> (we were 6 people in the staff), about <b>finding and niche communities</b> and about <b>organising championships and all kind of events</b>.'
};

var descriptions = [ botxo, exce, incyde, logo, talentum, websail, ephoto, picbooth, showdownStats, vgcLadder, rating, swipe, react, mrmelon, rincon, spainVGC ];