(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(9),r=n.n(i),c=(n(16),n(1)),s=n(2),o=n(4),u=n(3),m=n(5),h=(n(7),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={totalNumber:n.props.names.length},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Remaining names: (",this.props.names.length,")"),l.a.createElement("p",null,"Total names: (",this.state.totalNumber,")"))}}]),t}(l.a.Component)),d=n(6),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={nameList:n.props.namelist},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"removeName",value:function(e){console.log("item to be deleted: "+e);var t=this.state.nameList.filter(function(t){return t!==e});this.setState({nameList:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,this.state.nameList.map(function(e,t){var n=this;return l.a.createElement("li",{key:t}," ",e,l.a.createElement("a",{href:"#",onClick:function(t){return n.removeName(e,t)}},"[x]"))}.bind(this))))}}]),t}(l.a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={nameList:n.props.names,showNameList:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.setState({showNameList:!0})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleClick},"Display Whole Names"),this.state.showNameList?l.a.createElement(b,{namelist:this.state.nameList}):null)}}]),t}(l.a.Component),p=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.selectedName;return l.a.createElement("div",null,l.a.createElement("p",null,"Lucky star: ",e," "))}}]),t}(l.a.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={isSelected:!1},n.selectedName=n.getRandomName(n.props.names),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Click button to select the volunteer randomly"),l.a.createElement(f,{names:this.props.names}),l.a.createElement("button",{ref:"btn",onClick:this.handleClick},"Go"),this.state.isSelected?l.a.createElement(p,{selectedName:this.selectedName}):null)}},{key:"handleClick",value:function(){var e=this;this.refs.btn.setAttribute("disabled","disabled"),this.setState(function(t){return{isSelected:!e.state.isSelected}}),console.log(this.selectedName)}},{key:"getRandomName",value:function(e){var t=Math.floor(Math.random()*e.length);return console.log("selected name is: "+e[t]),e[t]}}]),t}(l.a.Component),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={names:["Carolyn Hung","Happy Lemon","Dharma Jaana","Dion\xedsio Stacee","Aristocles Kenanyahu","Dex Lo\xefc","Chanelle Otokar"]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{names:this.state.names}),l.a.createElement(v,{names:this.state.names}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.5e54497a.chunk.js.map