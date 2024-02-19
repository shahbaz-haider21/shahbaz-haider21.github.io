(()=>{"use strict";var e={1568:(e,t,n)=>{n(3792),n(3362),n(9085),n(9391);var r=n(5130),i=n(6768);function o(e,t){var n=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(n)}var a=n(1241);const l={},s=(0,a.A)(l,[["render",o]]),u=s;n(6099),n(7764),n(2953);var d=n(1387);function c(e,t,n,r,o,a){var l=(0,i.g2)("formdemo");return(0,i.uX)(),(0,i.Wv)(l)}var p=n(4232),m=function(e){return(0,i.Qi)("data-v-f2cda65c"),e=e(),(0,i.jt)(),e},h={class:"box"},v={class:"form__field"},f={key:0,class:"invalid-feedback"},y={class:"form__field"},g={key:1,class:"invalid-feedback"},k=m((function(){return(0,i.Lk)("div",{class:"form__field btn-wrapper"},[(0,i.Lk)("input",{class:"btn",type:"submit",value:"Sign In"})],-1)}));function b(e,t,n,o,a,l){return(0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("form",{action:"/list",method:"POST",class:"form login",novalidate:"true",onSubmit:t[2]||(t[2]=(0,r.D$)((function(){return l.validate&&l.validate.apply(l,arguments)}),["prevent"])),autocomplete:"off",id:"Form"},[(0,i.Lk)("div",v,[(0,i.bo)((0,i.Lk)("input",{type:"text",name:"username",placeholder:"Username",id:"username",class:(0,p.C4)(["form-control",{"is-valid":a.validation.valid.username,"is-invalid":a.validation.invalid.username}]),autocomplete:"false","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),required:""},null,2),[[r.Jo,a.username]])]),a.validation.invalid.username?((0,i.uX)(),(0,i.CE)("span",f,(0,p.v_)(a.validation.invalid.username),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",y,[(0,i.bo)((0,i.Lk)("input",{id:"password",type:"password",name:"password",class:(0,p.C4)(["form__input",{"is-valid":a.validation.valid.password,"is-invalid":a.validation.invalid.password}]),placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),required:""},null,2),[[r.Jo,a.password]])]),a.validation.invalid.password?((0,i.uX)(),(0,i.CE)("span",g,(0,p.v_)(a.validation.invalid.password),1)):(0,i.Q3)("",!0),k],32)])}n(4114);const E={data:function(){return{username:"",password:"",validation:{invalid:{},valid:{}}}},methods:{validate:function(){this.username?(this.validation.invalid.username="",this.validation.valid.username="true"):this.validation.invalid.username="Please enter your username.",this.password?(this.validation.invalid.password="",this.validation.valid.password="true"):this.validation.invalid.password="Please enter password.",this.$forceUpdate(),"true"==this.validation.valid.username&&"true"==this.validation.valid.password&&this.$router.push("/listing")}}},w=(0,a.A)(E,[["render",b],["__scopeId","data-v-f2cda65c"]]),L=w,C={name:"HomeView",components:{formdemo:L}},A=(0,a.A)(C,[["render",c]]),j=A;var x={id:"app",class:"small-container"},S={class:"header-section"},_={class:"heading"},O=(0,i.Lk)("h1",null,"Employee Details",-1);function X(e,t,n,r,o,a){var l=(0,i.g2)("router-link"),s=(0,i.g2)("employee-form"),u=(0,i.g2)("employee-details");return(0,i.uX)(),(0,i.CE)("div",x,[(0,i.Lk)("div",S,[(0,i.Lk)("div",_,[O,(0,i.bF)(l,{to:"/"},{default:(0,i.k6)((function(){return[(0,i.eW)("Logout")]})),_:1})]),(0,i.bF)(s,{"onAdd:employee":a.addEmployee},null,8,["onAdd:employee"])]),(0,i.bF)(u,{employees:o.employees,"onEdit:employee":a.editEmployee,"onDelete:employee":a.deleteEmployee},null,8,["employees","onEdit:employee","onDelete:employee"])])}var V=n(4048),P=n(9258),T=n(388),U=(n(8706),n(2008),n(2062),n(3110),n(2010),function(e){return(0,i.Qi)("data-v-d8773520"),e=e(),(0,i.jt)(),e}),F={id:"employee-form"},N={class:"input-wrapper"},$=U((function(){return(0,i.Lk)("label",{class:"name"},"Employee Name",-1)})),J=U((function(){return(0,i.Lk)("br",null,null,-1)})),D={class:"input-wrapper"},Q=U((function(){return(0,i.Lk)("label",null,"Employee Email",-1)})),I=U((function(){return(0,i.Lk)("br",null,null,-1)})),M={key:0,class:"error-message"},W={key:1,class:"success-message"},q=U((function(){return(0,i.Lk)("button",{class:"addemployee"},[(0,i.Lk)("img",{width:"22",height:"22",src:"https://img.icons8.com/ios-glyphs/30/000000/add--v1.png",alt:"add--v1",title:"Add Employee"})],-1)}));function z(e,t,n,o,a,l){return(0,i.uX)(),(0,i.CE)("div",F,[(0,i.Lk)("form",{onSubmit:t[5]||(t[5]=(0,r.D$)((function(){return l.handleSubmit&&l.handleSubmit.apply(l,arguments)}),["prevent"]))},[(0,i.Lk)("div",N,[$,(0,i.eW)(),J,(0,i.bo)((0,i.Lk)("input",{ref:"first",type:"text",class:(0,p.C4)({"has-error":a.submitting&&l.isNameValid}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.employee.name=e}),onFocus:t[1]||(t[1]=function(){return l.clearStatus&&l.clearStatus.apply(l,arguments)}),onKeypress:t[2]||(t[2]=function(){return l.clearStatus&&l.clearStatus.apply(l,arguments)})},null,34),[[r.Jo,a.employee.name]])]),(0,i.Lk)("div",D,[Q,(0,i.eW)(),I,(0,i.bo)((0,i.Lk)("input",{type:"text",class:(0,p.C4)({"has-error":a.submitting&&l.isEmailValid}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.employee.email=e}),onFocus:t[4]||(t[4]=function(){return l.clearStatus&&l.clearStatus.apply(l,arguments)})},null,34),[[r.Jo,a.employee.email]])]),a.error&&a.submitting?((0,i.uX)(),(0,i.CE)("p",M," ❗Please fill out all required fields and valid email address ")):(0,i.Q3)("",!0),a.success?((0,i.uX)(),(0,i.CE)("p",W," ✅ Employee successfully added ")):(0,i.Q3)("",!0),q],32)])}n(7495),n(906);const Z={name:"employee-form",data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:"",reg:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.isNameValid||this.isEmailValid?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:"",reg:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{isNameValid:function(){return""===this.employee.name},isEmailValid:function(){return""===this.employee.email||!this.employee.reg.test(this.employee.email)}}},K=(0,a.A)(Z,[["render",z],["__scopeId","data-v-d8773520"]]),B=K;var H=function(e){return(0,i.Qi)("data-v-c869187a"),e=e(),(0,i.jt)(),e},G={id:"employee-details"},R={key:0},Y={key:1},ee=H((function(){return(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Name"),(0,i.Lk)("th",null,"Email"),(0,i.Lk)("th",null,"Actions")])],-1)})),te={key:0},ne=["onUpdate:modelValue"],re={key:1},ie={key:2},oe=["onUpdate:modelValue"],ae={key:3},le={key:4},se=["onClick"],ue=["onClick"],de={key:5},ce=["onClick"],pe=["onClick"];function me(e,t,n,o,a,l){return(0,i.uX)(),(0,i.CE)("div",G,[n.employees.length<1?((0,i.uX)(),(0,i.CE)("p",R," No employees ")):((0,i.uX)(),(0,i.CE)("table",Y,[ee,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.employees,(function(t){return(0,i.uX)(),(0,i.CE)("tr",{key:t.id},[a.editing===t.id?((0,i.uX)(),(0,i.CE)("td",te,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":function(e){return t.name=e}},null,8,ne),[[r.Jo,t.name]])])):((0,i.uX)(),(0,i.CE)("td",re,(0,p.v_)(t.name),1)),a.editing===t.id?((0,i.uX)(),(0,i.CE)("td",ie,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":function(e){return t.email=e}},null,8,oe),[[r.Jo,t.email]])])):((0,i.uX)(),(0,i.CE)("td",ae,(0,p.v_)(t.email),1)),a.editing===t.id?((0,i.uX)(),(0,i.CE)("td",le,[(0,i.Lk)("img",{onClick:function(e){return l.editEmployee(t)},width:"18",height:"18",src:"https://img.icons8.com/color/48/save--v1.png",alt:"save--v1"},null,8,se),(0,i.Lk)("img",{onClick:function(e){return l.cancelEdit(t)},class:"muted-button",width:"18",height:"18",src:"https://img.icons8.com/tiny-color/16/cancel.png",alt:"cancel"},null,8,ue)])):((0,i.uX)(),(0,i.CE)("td",de,[(0,i.Lk)("img",{class:"edit",width:"20",height:"20",src:"https://img.icons8.com/color/48/edit--v1.png",alt:"edit--v1",onClick:function(e){return l.editMode(t)}},null,8,ce),(0,i.Lk)("img",{class:"delete",onClick:function(n){return e.$emit("delete:employee",t.id)},width:"20",height:"20",src:"https://img.icons8.com/color/48/delete-forever.png",alt:"delete-forever"},null,8,pe)]))])})),128))])]))])}const he={name:"employee-details",props:{employees:Array},data:function(){return{editing:null}},methods:{editMode:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}},ve=(0,a.A)(he,[["render",me],["__scopeId","data-v-c869187a"]]),fe=ve,ye={name:"ListingView",components:{EmployeeDetails:fe,EmployeeForm:B},data:function(){return{employees:[]}},methods:{addEmployee:function(e){var t=this;return(0,T.A)((0,V.A)().mark((function n(){var r,i;return(0,V.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=n.sent,n.next=6,r.json();case 6:i=n.sent,t.employees=[].concat((0,P.A)(t.employees),[i]),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.error("Error occured while adding employee: "+n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getEmployees:function(){var e=this;return(0,T.A)((0,V.A)().mark((function t(){var n,r;return(0,V.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.employees=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error("Error occured while retrieving employees: "+t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},editEmployee:function(e,t){var n=this;return(0,T.A)((0,V.A)().mark((function r(){var i,o;return(0,V.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return i=r.sent,r.next=6,i.json();case 6:o=r.sent,n.employees=n.employees.map((function(t){return t.id===e?o:t})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error("Error while editing: ",+r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteEmployee:function(e){var t=this;return(0,T.A)((0,V.A)().mark((function n(){return(0,V.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"DELETE"});case 3:t.employees=t.employees.filter((function(t){return t.id!==e})),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error("Error while deleting: ",+n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},mounted:function(){this.getEmployees()}},ge=(0,a.A)(ye,[["render",X]]),ke=ge;var be=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e(594).then(n.bind(n,603))}},{path:"/listing",name:"ListingView",component:ke}],Ee=(0,d.aE)({history:(0,d.LA)("/"),routes:be});const we=Ee;(0,r.Ef)(u).use(we).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,o)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,i,o]=e[d],l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,i,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/about.f5c8035e.js"})(),(()=>{n.miniCssF=e=>{}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="project1:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{var e={524:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),l=new Error,s=r=>{if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[a,l,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkproject1"]=self["webpackChunkproject1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[504],(()=>n(1568)));r=n.O(r)})();
//# sourceMappingURL=app.ce38b1e6.js.map