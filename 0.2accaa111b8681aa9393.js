webpackJsonp([0],{369:function(e,t,o){"use strict";function n(e){return{type:p,payload:e}}function d(e){return{type:O,payload:e}}function r(e){return{type:T,payload:e}}function a(){return{type:g}}function i(e){return{type:m,payload:e}}function l(e){return{type:v,payload:e}}function s(){return{type:y}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments[1],o=h[t.type];return o?o(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"TODOS_ADD_TODO",function(){return p}),o.d(t,"TODOS_TOGGLE_TODO",function(){return O}),o.d(t,"TODOS_REMOVE_TODO",function(){return T}),o.d(t,"TODOS_CLEAR_COMPLETED",function(){return g}),o.d(t,"TODOS_TOGGLE_EDIT_MODE",function(){return m}),o.d(t,"TODOS_UPDATE_TODO",function(){return v}),o.d(t,"TODOS_TOGGLE_ALL",function(){return y}),t.addTodo=n,t.toggleTodo=d,t.removeTodo=r,t.clearCompleted=a,t.toggleEditMode=i,t.updateTodo=l,t.toggleAll=s,o.d(t,"actions",function(){return E}),t.default=u;var c,f=o(374),_=o.n(f),p="TODOS:ADD_TODO",O="TODOS:TOGGLE_TODO",T="TODOS:REMOVE_TODO",g="TODOS:CLEAR_COMPLETED",m="TODOS:TOGGLE_EDIT_MODE",v="TODOS:UPDATE_TODO",y="TODOS:TOGGLE_ALL",E={addTodo:n,toggleTodo:d,removeTodo:r,clearCompleted:a,toggleEditMode:i},h=(c={},_()(c,p,function(e,t){var o=Object.assign({},e),n={id:o.lastId+1,text:t.payload,done:!1,editMode:!1};return o.lastId=o.lastId+1,o.todos.push(n),o}),_()(c,O,function(e,t){for(var o=Object.assign({},e),n=0;n<o.todos.length;n++)if(t.payload===o.todos[n].id){o.todos[n].done=!o.todos[n].done,o.todos[n].done?o.doneCount=o.doneCount+1:o.doneCount=o.doneCount-1;break}return o}),_()(c,T,function(e,t){for(var o=Object.assign({},e),n=0;n<o.todos.length;n++)if(t.payload===o.todos[n].id){o.todos[n].done&&(o.doneCount=o.doneCount-1),o.todos.splice(n,1);break}return o}),_()(c,g,function(e,t){var o=Object.assign({},e);return o.todos=o.todos.filter(function(e){return!e.done}),o.doneCount=0,o}),_()(c,m,function(e,t){for(var o=Object.assign({},e),n=0;n<o.todos.length;n++)if(t.payload===o.todos[n].id){o.todos[n].editMode=!o.todos[n].editMode;break}return o}),_()(c,v,function(e,t){for(var o=Object.assign({},e),n=0;n<o.todos.length;n++)t.payload.id===o.todos[n].id&&(o.todos[n].text=t.payload.text,o.todos[n].editMode=!1);return o}),_()(c,y,function(e,t){for(var o=Object.assign({},e),n=o.doneCount!==o.todos.length,d=0;d<o.todos.length;d++)o.todos[d].done=n;return o.doneCount=n?o.todos.length:0,o}),c),D={lastId:-1,doneCount:0,todos:[]}},370:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(95),d=o(369),r=o(372),a={addTodo:d.addTodo,toggleTodo:d.toggleTodo,removeTodo:d.removeTodo,clearCompleted:d.clearCompleted,toggleEditMode:d.toggleEditMode,updateTodo:d.updateTodo,toggleAll:d.toggleAll},i=function(e){return{todos:e.todos}};t.default=o.i(n.connect)(i,a)(r.a)},371:function(e,t,o){"use strict";var n=o(170),d=o.n(n),r=o(171),a=o.n(r),i=o(173),l=o.n(i),s=o(172),u=o.n(s),c=o(5),f=o.n(c),_=o(379),p=(o.n(_),function(e){function t(e){d()(this,t);var o=l()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.toggleEditMode=function(){o.setState(function(e){return{editMode:!e.editMode}}),o.refs.input.style.display="inline",o.refs.input.focus()},o.onKeyDown=function(e){var t=o.props,n=t.todo,d=t.updateTodo;13===e.keyCode&&(d({id:n.id,text:e.target.value}),o.setState({editMode:!1}),o.refs.input.style.display="none")},o.onBlur=function(e){var t=o.props,n=t.todo;(0,t.updateTodo)({id:n.id,text:e.target.value}),o.setState({editMode:!1}),o.refs.input.style.display="none"},o.state={editMode:!1},o}return u()(t,e),a()(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todo,n=t.toggleTodo,d=t.removeTodo;return f.a.createElement("div",{className:"todos__list__item"+(o.done?" todos__list__item--done":"")},f.a.createElement("input",{className:"todos__list__item__checkbox",type:"checkbox",checked:o.done,onClick:function(){return n(o.id)}}),f.a.createElement("input",{style:{display:"none"},onFocus:function(e){return console.log(e)},ref:"input",type:"text",defaultValue:o.text,onKeyDown:this.onKeyDown,onBlur:this.onBlur}),f.a.createElement("label",{className:"todos__list__item__label"+(this.state.editMode?" hidden":""),onDoubleClick:function(){return e.toggleEditMode()}},o.text),f.a.createElement("div",{className:"todos__list__item__close",onClick:function(){return d(o.id)}}))}}]),t}(f.a.Component));p.propTypes={todo:f.a.PropTypes.object,toggleTodo:f.a.PropTypes.func,removeTodo:f.a.PropTypes.func,updateTodo:f.a.PropTypes.func},t.a=p},372:function(e,t,o){"use strict";var n=o(375),d=o.n(n),r=o(170),a=o.n(r),i=o(171),l=o.n(i),s=o(173),u=o.n(s),c=o(172),f=o.n(c),_=o(5),p=o.n(_),O=o(380),T=(o.n(O),o(371)),g=function(e){function t(e){a()(this,t);var o=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.addTodo=function(e){if(13===e.keyCode){var t=o.refs.text.value;t.length>0&&(o.props.addTodo(t),o.refs.text.value="")}},o.setFilter=function(e){o.setState({filter:e})},o.renderTodos=function(){return o.props.todos.todos.filter(function(e){return"all"===o.state.filter||("active"===o.state.filter?!e.done:e.done)}).map(function(e,t){return p.a.createElement(T.a,d()({key:t,todo:e},o.props))})},o.state={filter:"all"},o}return f()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todos,n=t.clearCompleted,d=t.toggleAll,r=o.todos.length-o.doneCount;return p.a.createElement("div",{className:"todos"},p.a.createElement("input",{ref:"text",onKeyDown:this.addTodo,className:"todos__input",placeholder:"What you need to do?"}),p.a.createElement("div",{className:"todos__filter"},p.a.createElement("div",{className:"todos__filter__item"+("all"===this.state.filter?" todos__filter__item--selected":""),onClick:function(){e.setFilter("all")}},"All"),p.a.createElement("div",{className:"todos__filter__item"+("active"===this.state.filter?" todos__filter__item--selected":""),onClick:function(){e.setFilter("active")}},"Active"),p.a.createElement("div",{className:"todos__filter__item"+("completed"===this.state.filter?" todos__filter__item--selected":""),onClick:function(){e.setFilter("completed")}},"Completed"),p.a.createElement("div",{className:"todos__filter__toggle-all",onClick:d},"Toggle all")),p.a.createElement("div",{className:"todos__list"},this.renderTodos()),p.a.createElement("div",{className:"todos__footer"},p.a.createElement("div",{className:"todos__footer__done-count"},r+(r>1?" items left":" item left")),p.a.createElement("div",{className:"todos__footer__clear",onClick:n},"Clear completed")))}}]),t}(p.a.Component);g.propTypes={todos:p.a.PropTypes.object,addTodo:p.a.PropTypes.func,clearCompleted:p.a.PropTypes.func,toggleAll:p.a.PropTypes.func},t.a=g},373:function(e,t,o){e.exports={default:o(376),__esModule:!0}},374:function(e,t,o){"use strict";t.__esModule=!0;var n=o(174),d=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t,o){return t in e?(0,d.default)(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},375:function(e,t,o){"use strict";t.__esModule=!0;var n=o(373),d=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=d.default||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}},376:function(e,t,o){o(378),e.exports=o(24).Object.assign},377:function(e,t,o){"use strict";var n=o(47),d=o(106),r=o(58),a=o(176),i=o(175),l=Object.assign;e.exports=!l||o(46)(function(){var e={},t={},o=Symbol(),n="abcdefghijklmnopqrst";return e[o]=7,n.split("").forEach(function(e){t[e]=e}),7!=l({},e)[o]||Object.keys(l({},t)).join("")!=n})?function(e,t){for(var o=a(e),l=arguments.length,s=1,u=d.f,c=r.f;l>s;)for(var f,_=i(arguments[s++]),p=u?n(_).concat(u(_)):n(_),O=p.length,T=0;O>T;)c.call(_,f=p[T++])&&(o[f]=_[f]);return o}:l},378:function(e,t,o){var n=o(37);n(n.S+n.F,"Object",{assign:o(377)})},379:function(e,t){},380:function(e,t){}});
//# sourceMappingURL=0.2accaa111b8681aa9393.js.map