(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Stan Marsh","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png?height=165"},{"id":2,"name":"Kyle Brolovski","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png?height=165"},{"id":3,"name":"Eric Cartman","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png?height=165"},{"id":4,"name":"Kenny McCormick","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165"},{"id":5,"name":"Butters Stotch","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png?height=165"},{"id":6,"name":"Tweek Tweak","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/tweek-tweak.png?height=165"},{"id":7,"name":"Jimmy Valmer","image":"http://southparkstudios.mtvnimages.com/shared/characters/kids/jimmy-valmer.png?height=165"},{"id":8,"name":"Randy Marsh","image":"https://southparkstudios.mtvnimages.com/shared/characters/adults/identities-guitar-hero-randy.png?height=165"},{"id":9,"name":"Mr. Mackey","image":"http://southparkstudios.mtvnimages.com/shared/characters/adults/mackey.png?height=165"},{"id":10,"name":"PC Principal","image":"http://southparkstudios.mtvnimages.com/shared/characters/adults/education-pc-principal.png?height=165"},{"id":11,"name":"Terrance","image":"http://southparkstudios.mtvnimages.com/shared/characters/celebrities/terrance.png?height=165"},{"id":12,"name":"Phillip","image":"http://southparkstudios.mtvnimages.com/shared/characters/celebrities/pillip.png?height=165"}]')},,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(3),i=a.n(c),n=(a(15),a(7)),o=a(4),m=a(5),h=a(8),d=a(6),l=a(9),u=(a(16),function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",null,"South ",s.a.createElement("br",null),"Park"),s.a.createElement("h3",null,"React Clicky Game"),s.a.createElement("h4",null,"Score: ",e.score," ",s.a.createElement("span",null," High Score: ",e.highScore," "))))}),g=(a(17),function(e){return s.a.createElement("div",{className:"box"},s.a.createElement("a",{onClick:function(){return function(e){e.randomCards(),e.updateScore(e.id)}(e)}},s.a.createElement("img",{src:e.image,alt:"",className:"img-thumbnail"})))}),p=a(1),k=(a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={cards:p,score:0,highScore:0,clickedCards:[]},a.updateScore=function(e){a.state.clickedCards.includes(e)?(alert("You lose!"),a.setState({score:0,clickedCards:[]})):(a.setState({clickedCards:[].concat(Object(n.a)(a.state.clickedCards),[e])}),a.setState({score:a.state.score+1}),a.state.score>=a.state.highScore&&a.setState({highScore:a.state.score+1}),11===a.state.score&&(a.setState({score:0,highScore:12,clickedCards:[],cards:p}),alert("You win!")))},a.randomCards=function(e){for(var t=e.length;0!==t;){var r=Math.floor(Math.random()*t),s=e[t-=1];e[t]=e[r],e[r]=s}a.setState({randomize:p})},a}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u,{score:this.state.score,highScore:this.state.highScore}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.cards.map((function(t){return s.a.createElement("div",{className:"col-md-3",id:t.id},s.a.createElement(g,{image:t.image,randomCards:function(){e.randomCards(e.state.cards)},updateScore:function(){e.updateScore(t.id)}}))})))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2a4e998d.chunk.js.map