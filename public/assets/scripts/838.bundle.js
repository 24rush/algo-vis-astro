(()=>{"use strict";var __webpack_modules__={2307:(e,t,o)=>{o.d(t,{$i:()=>n,Fb:()=>a,JH:()=>d,KU:()=>s,ZZ:()=>r,qd:()=>c});var s,r,a,i=o(9022);!function(e){e[e.DIRECTED=0]="DIRECTED",e[e.UNDIRECTED=1]="UNDIRECTED",e[e.BST=2]="BST",e[e.BT=3]="BT"}(s||(s={})),function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT"}(r||(r={})),function(e){e[e.Access=0]="Access",e[e.Mark=1]="Mark"}(a||(a={}));class n{constructor(e){this.type="NodeBase",this.label="",this.id="",this.value=void 0,this.value=e,this.label=e.toString(),this.id=e.toString()}toNodeBase(){let e=new n(this.value);return e.id=this.id,e.label=this.label,e}}class d extends n{constructor(){super(...arguments),this.graph=void 0}setParentGraph(e){this.graph=e}}class c extends i.Bj{constructor(e=s.UNDIRECTED){super(),this.type=e,this.__isGraphType__=!0,this.id=0,this.id=c.id_counter++}generate(e){throw"Not implemented"}generate_with(e){throw"Not implemented"}copyFrom(e){return this.__isGraphType__=!0,this.id=e.id,this.type=e.type,this.name=e.name,this}toObservableGraph(){return(new c).copyFrom(this)}empty(){throw"Not implemented"}isEmpty(){throw"Not implemented"}find(e){throw"Not implemented"}accessValue(e,t){throw"Not implemented"}getType(){return this.type}getValue(){return this}setValue(e){for(let t of this.observers)t.onSetEvent(this,void 0,e)}onAccessNode(e,t){for(let o of this.observers)o.onAccessNode(this,e,t)}onNodeAdded(e,t){if(e)for(let o of this.observers)o.onAddNode(this,e,e.parent,t)}onEdgeAdded(e,t){if(e&&t)for(let o of this.observers)o.onAddEdge(this,e,t)}onNodeRemoved(e){if(e)for(let t of this.observers)t.onRemoveNode(this,e)}onEdgeRemoved(e,t){if(e&&t)for(let o of this.observers)o.onRemoveEdge(this,e,t)}}c.id_counter=0},1741:(e,t,o)=>{o.d(t,{Ul:()=>a,kJ:()=>n,wD:()=>d,xC:()=>c});var s=o(2307);class r{constructor(e){return this.target=e,new Proxy(e,{set:(e,t,o,r)=>(t in e?e[t]=o:e=o,"left"===t?e.updateObject(s.ZZ.LEFT,o):"right"===t&&e.updateObject(s.ZZ.RIGHT,o),!0),get:(e,t,o)=>("value"===t&&e.onGetValue(),t in e?e[t]:e)})}}class a extends s.JH{constructor(e){return super(e),this.left=void 0,this.right=void 0,this.parent=void 0,this.multiplicity=0,this.level=0,this.dirrScore=0,this.offsetX=0,this.parentSide=void 0,new r(this)}createChild(e,t){let o=null!=t?new a(t):void 0;return o.level=this.level+1,this.setChild(e,o),o}setChild(e,t){e===s.ZZ.LEFT?this.left=t:this.right=t,this.updateObject(e,t)}updateObject(e,t){if(t){if(this.graph.getType()==s.KU.BST&&(e==s.ZZ.LEFT&&t.value>this.value||e==s.ZZ.RIGHT&&t.value<this.value))throw`Cannot add node as it doesn't follow convention: left < parent < right (${t.value} ${this.value})`;if(t.parent=this,t.parentSide=e,t.setParentGraph(this.graph),!this.graph)throw"Node not allocated to any tree: "+t.value;this.graph.onNodeAdded(t,e),this.graph.onEdgeAdded(this,t)}}onGetValue(){}isRoot(){return null==this.parent}isLeftChild(){return this.parentSide==s.ZZ.LEFT}isRightChild(){return this.parentSide==s.ZZ.RIGHT}isOnlyChild(){return!this.parent||!(this.parent.left&&this.parent.right)}}class i extends s.JH{constructor(e){super(e),this.adjacents=new Set,this.adjacents_nodes=new Map}addAdjacent(e){this.adjacents.add(e.value),this.adjacents_nodes.has(e.value)||this.adjacents_nodes.set(e.value,e)}removeAdjacent(e){return this.adjacents_nodes.has(e.value)&&this.adjacents_nodes.delete(e.value),this.adjacents.delete(e.value)}isAdjacent(e){return this.adjacents.has(e)}getAdjacents(){return Array.from(this.adjacents_nodes.values())}}class n extends s.qd{constructor(e=s.KU.UNDIRECTED){super(e),this.nodes=new Map}empty(){this.nodes.clear()}isEmpty(){return 0==this.nodes.size}find(e){return this.nodes.get(e)}accessValue(e,t){let o=this.find(e);o&&this.onAccessNode(o,t)}hasDirectedEdges(){return this.type==s.KU.DIRECTED}generate(e){for(let t=0;t<e;t++){this.addVertex(t+1);for(let o=this.type==s.KU.UNDIRECTED?t:0;o<e;o++)t!=o&&0!=(2,Math.floor(2*Math.random()))&&this.addEdge(t+1,o+1)}}generate_with(e){let t=Array.from(new Set(e));for(let e=0;e<t.length;e++){this.addVertex(t[e]);for(let o=0;o<t.length;o++)e!=o&&(this.addVertex(t[o]),0!=Math.floor(2*Math.random())&&this.addEdge(t[e],t[o]))}}fromAdjacencyMatrix(e){for(let t=0;t<e.length;t++)for(let o=this.type==s.KU.UNDIRECTED?t:0;o<e[t].length;o++)0!=e[t][o]&&this.addEdge(t+1,o+1)}fromAdjacencyList(e){for(let[t,o]of Object.entries(e))for(let e of o)this.addEdge("number"==typeof e?Number.parseInt(t):t,e)}addVertex(e){if(this.nodes.has(e))return this.nodes.get(e);const t=new i(e);return this.nodes.set(e,t),t.setParentGraph(this),this.onNodeAdded(t),t}removeVertex(e){const t=this.nodes.get(e);t&&(Array.from(this.nodes.values()).forEach((e=>e.removeAdjacent(t))),this.nodes.delete(e),this.onNodeRemoved(t))}addEdge(e,t){if(null==e||null==t)throw"You must specify both source and destination";const o=this.addVertex(e),r=this.addVertex(t);let a=r.isAdjacent(o.value)||o.isAdjacent(r.value);return o.addAdjacent(r),this.type===s.KU.UNDIRECTED&&r.addAdjacent(o),a||this.onEdgeAdded(o,r),[o,r]}removeEdge(e,t){const o=this.nodes.get(e),r=this.nodes.get(t);o&&r&&(o.removeAdjacent(r),this.type===s.KU.UNDIRECTED&&r.removeAdjacent(o),this.onEdgeRemoved(o,r))}}class d extends s.qd{constructor(e=s.KU.BT){super(e),this.root=void 0}generate(e){let t=new Set;for(;t.size!=e;)t.add((o=e,Math.ceil(Math.random()*o)));var o;this.generate_with(Array.from(t.values()))}generate_with(e){let t=e.length?this.createRoot(e[0]):void 0;if(1==e.length)return;let o=t=>{if(e.length&&t)switch(4,Math.floor(4*Math.random())){case 0:t.left?o(t.left):o(this.add(e.shift(),t.value,s.ZZ.LEFT));break;case 1:t.right?o(t.right):o(this.add(e.shift(),t.value,s.ZZ.RIGHT));break;case 2:t.left||o(this.add(e.shift(),t.value,s.ZZ.LEFT)),t.right||o(this.add(e.shift(),t.value,s.ZZ.RIGHT));break;case 3:return}};for(e.shift();e.length;)o(t)}empty(){this.root=void 0}isEmpty(){return null==this.root}find(e){return this.findExhaustive(e)}accessValue(e,t){let o=this.find(e);o&&this.onAccessNode(o,t)}createRoot(e){return this.root||(this.root=new a(e),this.root.setParentGraph(this),this.onNodeAdded(this.root)),this.root}getRoot(){return this.root}add(e,t,o){if(!e)return;let s=e instanceof a?e.value:e;if(this.root&&(null==t||null==o))throw"Adding in binary trees requires specifying the parent and the side to add to";if(!this.root)return this.root=this.createRoot(s),this.root;let r=this.findExhaustive(s,this.root);if(!r)return this.findExhaustive(t,this.root).createChild(o,s);r.multiplicity=(r.multiplicity||1)+1}remove(e){let t=this.findExhaustive(e,this.root);this.removeNodeWithParent(t,t?t.parent:void 0)}findNodeWithId(e){return this.findExhaustiveUtil(this.root,(t=>t.id===e))}findExhaustive(e,t=this.root){return this.findExhaustiveUtil(t,(t=>t.value===e))}findExhaustiveUtil(e,t){if(!e)return;if(t(e))return e;let o;return e.left&&(o=this.findExhaustiveUtil(e.left,t)),e.right&&!o&&(o=this.findExhaustiveUtil(e.right,t)),o}getLeftmost(e=this.root){return e&&e.left?this.getLeftmost(e.left):e}removeNodeWithParent(e,t){if(!e)return;if(e.multiplicity>1)return void(e.multiplicity-=1);this.onNodeRemoved(e);let o=e.left;e.right&&(this.getLeftmost(e.right).setChild(s.ZZ.LEFT,e.left),o=e.right),e===this.root?(this.root=o,this.root&&(this.root.parent=null)):t.setChild(e.isLeftChild()?s.ZZ.LEFT:s.ZZ.RIGHT,o)}}class c extends d{constructor(){super(s.KU.BST)}generate(e){let t=new Set;for(;t.size!=e;)t.add((o=e,Math.ceil(Math.random()*o)));var o;this.generate_with(Array.from(t.values()))}generate_with(e){for(let t of e)this.find(t)||this.add(t)}createNode(e){return this.root?new a(e):(this.root=new a(e),this.root.setParentGraph(this),this.onNodeAdded(this.root),this.root)}createRoot(e){throw"Cannot explicitly createRoot in a binary search tree. Use createNode or add method instead."}add(e){let t=e instanceof a?e.value:e;if(!this.root)return this.root=this.createNode(t),this.root;let[o,r]=this.findNodeAndFutureParent(t,this.root);o?o.multiplicity=(o.multiplicity||1)+1:r.createChild(t<r.value?s.ZZ.LEFT:s.ZZ.RIGHT,t)}remove(e){let[t,o]=this.findNodeAndFutureParent(e,this.root);this.removeNodeWithParent(t,o)}find(e){return this.findNodeAndFutureParent(e,this.root)[0]}accessValue(e,t){let o=this.find(e);o&&this.onAccessNode(o,t)}findNodeAndFutureParent(e,t,o=null){return t&&t.value!==e?e<t.value?this.findNodeAndFutureParent(e,t.left,t):this.findNodeAndFutureParent(e,t.right,t):[t,o]}}},9022:(e,t,o)=>{o.d(t,{Bj:()=>s});class s{constructor(){this.observers=[]}registerObserver(e){this.observers.find((t=>t==e))||this.observers.push(e)}unregisterObserver(e){this.observers=this.observers.filter((t=>t!=e))}getName(){return this.name.toString()}}var r;!function(e){e[e[void 0]=0]="undefined",e[e.Primitive=1]="Primitive",e[e.Array=2]="Array",e[e.Object=3]="Object",e[e.Set=4]="Set",e[e.Reference=5]="Reference",e[e.Graph=6]="Graph",e[e.Tree=7]="Tree"}(r||(r={}))}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](o,o.exports,__webpack_require__),o.exports}__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{var _av_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1741),_av_types_interfaces__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2307),UserInteractionType,CodeExecutorMessages,CodeExecutorSlots,CodeExecutorCommands;!function(e){e[e.Alert=0]="Alert",e[e.Confirm=1]="Confirm",e[e.Prompt=2]="Prompt"}(UserInteractionType||(UserInteractionType={})),function(e){e[e.NoOp=0]="NoOp",e[e.Wait=1]="Wait",e[e.Wakeup=2]="Wakeup",e[e.Stop=3]="Stop",e[e.UserInteractionResponse=4]="UserInteractionResponse"}(CodeExecutorMessages||(CodeExecutorMessages={})),function(e){e[e.Main=0]="Main",e[e.Aux=1]="Aux",e[e.MessageSize=2]="MessageSize"}(CodeExecutorSlots||(CodeExecutorSlots={})),function(e){e[e.sharedMem=0]="sharedMem",e[e.setSourceCode=1]="setSourceCode",e[e.execute=2]="execute",e[e.executionFinished=3]="executionFinished",e[e.isWaiting=4]="isWaiting",e[e.userInteractionRequest=5]="userInteractionRequest",e[e.userInteractionResponse=6]="userInteractionResponse",e[e.setVar=7]="setVar",e[e.markcl=8]="markcl",e[e.forcemarkcl=9]="forcemarkcl",e[e.startScope=10]="startScope",e[e.endScope=11]="endScope",e[e.pushParams=12]="pushParams",e[e.popParams=13]="popParams",e[e.onAddNode=14]="onAddNode",e[e.onAddEdge=15]="onAddEdge",e[e.onRemoveEdge=16]="onRemoveEdge",e[e.onRemoveNode=17]="onRemoveNode",e[e.onAccessNode=18]="onAccessNode",e[e.onExceptionRaised=19]="onExceptionRaised",e[e.onConsoleLog=20]="onConsoleLog"}(CodeExecutorCommands||(CodeExecutorCommands={}));let codeExec=()=>(self.this||(self.this=new CodeExecutor),self.this);self.onmessage=e=>{void 0!==e.data.cmd&&((e,t)=>{try{e.ports[0].postMessage({cmd:e.data.cmd,result:t()})}catch(t){console.log(t),e.ports[0].postMessage({error:t})}})(e,(()=>{let t=codeExec();switch(e.data.cmd){case CodeExecutorCommands.sharedMem:null==t.advanceFlag&&(t.advanceFlag=new Int32Array(e.data.params));break;case CodeExecutorCommands.setSourceCode:t.setSourceCode(e.data.params[0]);break;case CodeExecutorCommands.execute:t.execute();break;default:throw"Cant handle "+e.data.cmd}}))};class CodeExecutor{constructor(){this.lastLineNo=-1,this.advanceFlag=void 0}onSetEvent(e,t,o){throw new Error("Method not implemented.")}onAccessNode(e,t,o){self.postMessage({cmd:CodeExecutorCommands.onAccessNode,params:[e.toObservableGraph(),t.toNodeBase(),o]})}onAddNode(e,t,o,s){self.postMessage({cmd:CodeExecutorCommands.onAddNode,params:[e.toObservableGraph(),t.toNodeBase(),null==o?void 0:o.toNodeBase(),s]})}onRemoveNode(e,t){self.postMessage({cmd:CodeExecutorCommands.onRemoveNode,params:[e.toObservableGraph(),t.toNodeBase()]})}onAddEdge(e,t,o){self.postMessage({cmd:CodeExecutorCommands.onAddEdge,params:[e.toObservableGraph(),t.toNodeBase(),o.toNodeBase()]})}onRemoveEdge(e,t,o){self.postMessage({cmd:CodeExecutorCommands.onRemoveEdge,params:[e.toObservableGraph(),t.toNodeBase(),o.toNodeBase()]})}onExceptionRaised(e,t){self.postMessage({cmd:CodeExecutorCommands.onExceptionRaised,params:Array.from(arguments)})}onConsoleLog(e){self.postMessage({cmd:CodeExecutorCommands.onConsoleLog,params:Array.from(arguments)})}setSourceCode(e){this.lastLineNo=-1,this.code=e}execute(){let prevFcn=this.hookConsoleLog(void 0);try{var Types={Graph:_av_types__WEBPACK_IMPORTED_MODULE_0__.kJ,GraphType:_av_types_interfaces__WEBPACK_IMPORTED_MODULE_1__.KU,GraphNode:_av_types_interfaces__WEBPACK_IMPORTED_MODULE_1__.$i,BinaryTreeNode:_av_types__WEBPACK_IMPORTED_MODULE_0__.Ul,BinaryTree:_av_types__WEBPACK_IMPORTED_MODULE_0__.wD,BinarySearchTree:_av_types__WEBPACK_IMPORTED_MODULE_0__.xC,ParentSide:_av_types_interfaces__WEBPACK_IMPORTED_MODULE_1__.ZZ,AccessType:_av_types_interfaces__WEBPACK_IMPORTED_MODULE_1__.Fb},Funcs=this;eval(this.code),this.hookConsoleLog(prevFcn,!1),this.onExecutionFinished()}catch(e){if(this.hookConsoleLog(prevFcn,!1),console.log(e),"__STOP__"!=e){let t="object"==typeof e&&"message"in e?e.message:e;this.onExceptionRaised(!0,t)}return!1}}onExecutionFinished(){self.postMessage({cmd:CodeExecutorCommands.executionFinished})}forcemarkcl(e){let t=codeExec();if(t.lastLineNo!=e){if(!t.advanceFlag)throw"AdvanceFlag not received";for(self.postMessage({cmd:CodeExecutorCommands.forcemarkcl,params:Array.from(arguments)});;)if("not-equal"!=Atomics.wait(t.advanceFlag,CodeExecutorSlots.Main,CodeExecutorMessages.Wait)){if(Atomics.load(t.advanceFlag,CodeExecutorSlots.Aux)==CodeExecutorMessages.Stop)throw"__STOP__";break}return t.lastLineNo=e,!0}}markcl(e){let t=codeExec();if(!t.advanceFlag)throw"AdvanceFlag not received";for(self.postMessage({cmd:CodeExecutorCommands.markcl,params:Array.from(arguments)});;)if("not-equal"!=Atomics.wait(t.advanceFlag,CodeExecutorSlots.Main,CodeExecutorMessages.Wait)){if(Atomics.load(t.advanceFlag,CodeExecutorSlots.Aux)==CodeExecutorMessages.Stop)throw"__STOP__";break}t.lastLineNo=e}startScope(e){self.postMessage({cmd:CodeExecutorCommands.startScope,params:Array.from(arguments)})}endScope(e){self.postMessage({cmd:CodeExecutorCommands.endScope,params:Array.from(arguments)})}pushParams(e){self.postMessage({cmd:CodeExecutorCommands.pushParams,params:Array.from(arguments)})}popParams(e){self.postMessage({cmd:CodeExecutorCommands.popParams,params:Array.from(arguments)})}deepCopy(e){const t={};if(e instanceof _av_types__WEBPACK_IMPORTED_MODULE_0__.Ul)return e.toNodeBase();if("object"!=typeof e||void 0===typeof e||null===e||"function"==typeof e)return e;const o=Object.keys(e);for(let s in o)t[o[s]]=this.deepCopy(e[o[s]]);return t}setVar(e,t,o){if(t&&"object"==typeof t&&"__isGraphType__"in t){let s=codeExec();t.registerObserver(s),self.postMessage({cmd:CodeExecutorCommands.setVar,params:[e,t.toObservableGraph(),o]})}else{let s=codeExec();self.postMessage({cmd:CodeExecutorCommands.setVar,params:[e,s.deepCopy(t),o]})}}funcWrap(e){return arguments[0].f()}promptWrap(e,t){return codeExec().userInteractionRequest(UserInteractionType.Prompt,e,t)}alertWrap(){codeExec().userInteractionRequest(UserInteractionType.Alert,[...arguments].join(" "))}confirmWrap(){return codeExec().userInteractionRequest(UserInteractionType.Confirm,[...arguments].join(" "))}hookConsoleLog(e,t=!0){return t?(null==e&&(e=console.log),console.log=(...t)=>{this.onConsoleLog([...t].join(" ")),e.apply(console,t)}):console.log=e,e}userInteractionRequest(e,t,o){let s=codeExec();if(!s.advanceFlag)throw"AdvanceFlag not received";for(self.postMessage({cmd:CodeExecutorCommands.userInteractionRequest,params:Array.from(arguments)});;)if("not-equal"!=Atomics.wait(s.advanceFlag,CodeExecutorSlots.Main,CodeExecutorMessages.Wait)&&Atomics.load(s.advanceFlag,CodeExecutorSlots.Aux)==CodeExecutorMessages.UserInteractionResponse)switch(Atomics.load(s.advanceFlag,CodeExecutorSlots.MessageSize)){case UserInteractionType.Alert:return;case UserInteractionType.Confirm:return 1==Atomics.load(s.advanceFlag,CodeExecutorSlots.MessageSize+1);case UserInteractionType.Prompt:{let e=Atomics.load(s.advanceFlag,CodeExecutorSlots.MessageSize+1),t=-1==e?null:"";if(e>0){t="";for(let o=0;o<e;o++)t+=String.fromCharCode(Atomics.load(s.advanceFlag,CodeExecutorSlots.MessageSize+o+2))}return t}}}}})()})();