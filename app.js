(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],m=0,p=[];m<c.length;m++)i=c[m],a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3f2b":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},8820:function(e,t,n){"use strict";var r=n("3f2b"),a=n.n(r);a.a},b6d1:function(e,t,n){"use strict";var r=n("da72"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mai-score-bookmarklet"}},[n("div",{staticClass:"mai-score-bookmarklet-window"},[n("button",{attrs:{id:"closeBtn"},on:{click:e.closeBookmarkletWindow}},[e._v("[×]閉じる")]),e.uid?n("AddScoreData",{attrs:{uid:e.uid},on:{loginCheck:e.loginCheck}}):n("LoginForm",{on:{loginCheck:e.loginCheck}})],1)])},s=[],i=(n("96cf"),n("3b8d")),c=n("d225"),o=n("b0b4"),u=n("308d"),l=n("6bb5"),m=n("4e2b"),p=n("9ab4"),d=n("60a3"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loginForm"}},[n("button",{on:{click:e.twitterLogin}},[e._v("Twitterログイン")]),n("br"),n("p",[e._v("※ポップアップがブロックされることがありますが、それを許可してください。")]),n("label",[e._v("メールアドレス"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"text",name:"mail",id:"mail"},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}})]),n("br"),n("label",[e._v("パスワード"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwd,expression:"passwd"}],attrs:{type:"password",name:"passwd",id:"passwd"},domProps:{value:e.passwd},on:{input:function(t){t.target.composing||(e.passwd=t.target.value)}}})]),n("br"),n("button",{on:{click:e.mailLogin}},[e._v("メールログイン")]),n("p",[e._v("※舞スコアに登録したメールアドレス・パスワードでログインしてください。")]),n("p",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))])])},f=[],g=n("59ca"),v=n.n(g);n("e71f"),n("ea7b"),n("588e");v.a.apps.length||v.a.initializeApp({apiKey:"AIzaSyCQiHzheUpyavPNfQm72B0LHBHDR8cBNnk",authDomain:"mai-score.firebaseapp.com",databaseURL:"https://mai-score.firebaseio.com",projectId:"mai-score",storageBucket:"mai-score.appspot.com",messagingSenderId:"256203593707"});var b=v.a,x=new b.auth.TwitterAuthProvider,_={twitterLogin:function(){return new Promise(function(e,t){b.auth().setPersistence(b.auth.Auth.Persistence.SESSION).then(function(){b.auth().signInWithPopup(x).then(function(t){return e(t)}).catch(function(e){return t(e)})})})},mailLogin:function(e,t){return new Promise(function(n,r){b.auth().setPersistence(b.auth.Auth.Persistence.SESSION).then(function(){b.auth().signInWithEmailAndPassword(e,t).then(function(e){return n(e)}).catch(function(e){return r(e)})})})},logout:function(){return new Promise(function(e,t){b.auth().signOut().then(function(){return e()}).catch(function(e){return t(e)})})},auth:function(){return new Promise(function(e){b.auth().onAuthStateChanged(function(t){return e(t)})})}},w=_,k=b.firestore(),y=(b.firestore.FieldValue,function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.errorMessage="",e.mail="",e.passwd="",e}return Object(m["a"])(t,e),Object(o["a"])(t,[{key:"twitterLogin",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.twitterLogin();case 3:if(t=e.sent,t&&t.user){e.next=6;break}throw new Error;case 6:return e.next=8,k.collection("users").doc(t.user.uid).get();case 8:if(n=e.sent,n.exists){e.next=14;break}return this.errorMessage="先にWebページにて新規登録してください。",e.next=13,w.logout();case 13:return e.abrupt("return");case 14:if(t.credential){e.next=16;break}throw new Error;case 16:return r=t.credential,e.next=19,k.collection("users").doc(n.id).collection("secure").doc(n.id).set({accessToken:r.accessToken,secret:r.secret},{merge:!0});case 19:this.$emit("loginCheck"),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),this.errorMessage="ログインに失敗しました。再度お試しください";case 25:case"end":return e.stop()}},e,this,[[0,22]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"mailLogin",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.mailLogin(this.mail,this.passwd);case 3:this.$emit("loginCheck"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.errorMessage="ログインに失敗しました。入力内容確認の上再度お試しください";case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()}]),t}(d["c"]));y=p["__decorate"]([d["a"]],y);var O=y,S=O,D=(n("b6d1"),n("2877")),j=Object(D["a"])(S,h,f,!1,null,"7704186a",null),R=j.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"addScoreData"}},[n("button",{attrs:{id:"logout"},on:{click:e.logout}},[e._v("ログアウト")]),n("div",{staticClass:"addScoreDataMain"},[n("p",[e._v("舞スコア データ取得ツール")]),n("button",{staticClass:"addDataBtn",class:{disableBtn:e.isDisable},attrs:{disabled:e.isDisable},on:{click:e.getData}},[e._v("舞スコアへデータ登録")]),e.message?n("p",{class:{error:e.error}},[e._v(e._s(e.message))]):e._e(),e.publicData&&e.twitterLogin&&!e.imageGenerationSuccessFlag?n("p",[e._v("スコア更新画像の生成に失敗しました")]):e._e(),"データ保存完了！"===e.message?n("div",{staticClass:"tweetLink"},[e.publicData?n("p",[n("a",{attrs:{href:e.tweetURL,target:"_blank"}},[e._v("スコア更新ツイート")])]):e._e(),e.publicData&&e.twitterLogin&&e.imageGenerationSuccessFlag?n("p",[n("TweetsWithImages",{on:{tweetStatusUpdate:e.tweetStatusUpdate}})],1):e._e()]):e._e(),e.tweetStatus?n("p",[e._v(e._s(e.tweetStatus))]):e._e()])])},C=[],T=(n("7514"),n("ac4d"),n("8a81"),n("a481"),n("c5f6"),n("28a5"),n("ac6a"),n("8615"),n("4917"),n("bc3a")),E=n.n(T),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.updateScoreTweet(t)}}},[e._v("画像付きスコア更新ツイート")])},I=[],L=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(o["a"])(t,[{key:"updateScoreTweet",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$emit("tweetStatusUpdate","ツイート中です..."),e.prev=1,e.next=4,b.auth().currentUser.getIdToken();case 4:return t=e.sent,e.next=7,E.a.get("https://us-central1-mai-score.cloudfunctions.net/tweet",{headers:{Authorization:"Bearer ".concat(t)}});case 7:this.$emit("tweetStatusUpdate","ツイート成功しました！"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.error(e.t0),this.$emit("tweetStatusUpdate","ツイート失敗しました...");case 14:case"end":return e.stop()}},e,this,[[1,10]])}));function t(){return e.apply(this,arguments)}return t}()}]),t}(d["c"]);L=p["__decorate"]([d["a"]],L);var M=L,P=M,F=Object(D["a"])(P,B,I,!1,null,null,null),A=F.exports,U=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.message="",e.error=!1,e.publicData=!1,e.tweetURL="",e.isDisable=!1,e.twitterLogin=!1,e.tweetStatus="",e.versionMusicList={},e.isDXScoreNotOnTheTweetImg=!1,e.imageGenerationSuccessFlag=!0,e.userData=null,e}return Object(m["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.collection("users").doc(this.uid).collection("secure").doc(this.uid).get();case 2:if(t=e.sent,t&&t.exists&&(n=t.data()),n){e.next=7;break}return this.twitterLogin=!1,e.abrupt("return");case 7:this.userData=n,this.twitterLogin=n.providerData.some(function(e){return"twitter.com"===e.providerId}),this.isDXScoreNotOnTheTweetImg=null!=n.isDXScoreNotOnTheTweetImg&&n.isDXScoreNotOnTheTweetImg;case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s,i,c,o,u,l,m=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error=!1,this.isDisable=!0,this.message="データ取得準備中...",e.prev=3,e.next=6,E.a.get("https://maimaidx-eng.com/maimai-mobile/home/");case 6:if(t=e.sent,n=t.data,!n.match(/ログインしてください/)){e.next=13;break}return this.message="maimaiでらっくすNETにログインしていません。ログインしてから再度お試しください。",this.error=!0,this.isDisable=!1,e.abrupt("return");case 13:e.next=22;break;case 15:return e.prev=15,e.t0=e["catch"](3),console.error(e.t0),this.message="不明なエラーです。再度お試しください。",this.error=!0,this.isDisable=!1,e.abrupt("return");case 22:return e.next=24,this.getFirstVersion();case 24:r=Date.now(),a=["Basic","Advanced","Expert","Master","ReMaster"],s=[],i=[],c=0;case 29:if(!(c<a.length)){e.next=54;break}return e.next=32,k.collection("users").doc(this.uid).collection("scores").doc(a[c]).get();case 32:return o=e.sent,u=void 0,o&&o.exists&&(u=o.data()),s[a[c]]={},u&&(null==this.userData.saveDataVersion||this.userData.saveDataVersion&&this.userData.saveDataVersion<1)?function(){for(var e=Object.values(u),t=function(t){if(null==e[t].version)return"break";var n=m.versionMusicList.filter(function(n){return n.title===e[t].title&&n.type===e[t].type&&e[t].version===n.version})[0];s[a[c]]["".concat(n.songID,"_").concat(n.type,"_").concat(a[c])]=e[t]},n=0;n<e.length;n++){var r=t(n);if("break"===r)break}}():u&&this.userData.saveDataVersion&&this.userData.saveDataVersion>=1&&(s[a[c]]=u),this.message="".concat(a[c],"データを読み込み中..."),e.prev=38,e.delegateYield(regeneratorRuntime.mark(function e(){var t,n,o,u,l,p,d,h,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=".concat(c));case 2:t=e.sent,n=t.data,o=new DOMParser,u=o.parseFromString(n,"text/html"),l=u.getElementsByClassName("main_wrapper")[0].children,p="",d=function(e){if(l[e].className.indexOf("screw_block")>=0)return p=l[e].innerText,"continue";if(-1===l[e].className.indexOf("w_450"))return"continue";for(var t=l[e].innerText.trim().split("\n").map(function(e){return e.trim()}).filter(function(e){return""!==e}),n=l[e].lastElementChild.src.indexOf("standard.png")>=0?"standard":"deluxe",o=l[e].getElementsByClassName("h_30 f_r"),u=null,d=null,h=null,f=0;f<o.length;f++)o[f].src.indexOf("_fc.png")>=0?d="FC":o[f].src.indexOf("_fcp.png")>=0?d="FC+":o[f].src.indexOf("_ap.png")>=0?d="AP":o[f].src.indexOf("_app.png")>=0?d="AP+":o[f].src.indexOf("_d.png")>=0?u="D":o[f].src.indexOf("_c.png")>=0?u="C":o[f].src.indexOf("_b.png")>=0?u="B":o[f].src.indexOf("_bb.png")>=0?u="BB":o[f].src.indexOf("_bbb.png")>=0?u="BBB":o[f].src.indexOf("_a.png")>=0?u="A":o[f].src.indexOf("_aa.png")>=0?u="AA":o[f].src.indexOf("_aaa.png")>=0?u="AAA":o[f].src.indexOf("_s.png")>=0?u="S":o[f].src.indexOf("_ss.png")>=0?u="SS":o[f].src.indexOf("_sss.png")>=0?u="SSS":o[f].src.indexOf("_sp.png")>=0?u="S+":o[f].src.indexOf("_ssp.png")>=0?u="SS+":o[f].src.indexOf("_sssp.png")>=0?u="SSS+":o[f].src.indexOf("_fs.png")>=0?h="FS":o[f].src.indexOf("_fsd.png")>=0?h="FDX":o[f].src.indexOf("_fsp.png")>=0?h="FS+":o[f].src.indexOf("_fsdp.png")>=0&&(h="FDX+");var g=m.versionMusicList.filter(function(e){return e.title===t[1]&&e.type===n&&e.genre===p}),v=g[0].version,b=g[0].songID,x=void 0,_=[],w=[];s[a[c]]&&s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])]?(_=s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])].achievements||[],w=s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])].dxScores||[],x=s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])].date||r):x=r;var k=!1,y=t[3]?Number(t[3].split("/")[0].trim().replace(",","")):null;t[2]&&(_.length>=1&&_[_.length-1].achievement!==Number(t[2].replace("%",""))||0===_.length&&t[2]||w.length>=1&&w[w.length-1].dxScore!==y||0===w.length&&y)&&(_.push({achievement:Number(t[2].replace("%","")),date:r}),w.push({dxScore:y,date:r}),x=r,k=!0);var O=t[2]?_:null,S=O?w:null;s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])]={songID:b,title:t[1],achievements:O,dxScores:S,type:n,genre:p,difficultyLevel:a[c],level:t[0].indexOf("+")>=0?Number(t[0].replace("+",""))+.5:Number(t[0].replace("+","")),rank:u,comboRank:d,sync:h,date:x,musicID:l[e].getElementsByTagName("input")[0].value,version:v},k&&i.push(s[a[c]]["".concat(b,"_").concat(n,"_").concat(a[c])])},h=0;case 10:if(!(h<l.length)){e.next=17;break}if(f=d(h),"continue"!==f){e.next=14;break}return e.abrupt("continue",14);case 14:h++,e.next=10;break;case 17:case"end":return e.stop()}},e)})(),"t1",40);case 40:e.next=51;break;case 42:if(e.prev=42,e.t2=e["catch"](38),console.error(e.t2.data),!(e.t2.response&&e.t2.response.data&&e.t2.response.data.match(/メンテナンス中/))){e.next=50;break}return this.message="maimaiでらっくすNETはメンテナンス中です。メンテナンス終了後に再度お試しください。",this.error=!0,this.isDisable=!1,e.abrupt("return");case 50:return e.abrupt("continue",51);case 51:c++,e.next=29;break;case 54:return e.next=56,this.getFetchUserData(r);case 56:return this.message="プレイ履歴取得中...",e.next=59,this.getRecordData();case 59:for(this.message="データ保存中...",e.prev=60,l=0;l<a.length;l++)k.collection("users").doc(this.uid).collection("scores").doc(a[l]).set(s[a[l]]).catch(function(e){console.error(e),m.message="データの保存に失敗しました",m.error=!0,m.isDisable=!1});return e.next=64,k.collection("users").doc(this.uid).collection("secure").doc(this.uid).update({_updateAt:r,saveDataVersion:1});case 64:if(!(i.length<=0)){e.next=67;break}return this.message="更新データはありませんでした",e.abrupt("return");case 67:return e.next=69,this.getTweetURL();case 69:return e.next=71,this.createScoreImg(i);case 71:this.message="データ保存完了！",e.next=80;break;case 74:e.prev=74,e.t3=e["catch"](60),console.error(e.t3),this.message="データの保存に失敗しました",this.error=!0,this.isDisable=!1;case 80:case"end":return e.stop()}},e,this,[[3,15],[38,42],[60,74]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"getFetchUserData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,i,c,o,u,l,m;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.message="ユーザデータを読み込み中...",e.prev=1,e.next=4,E.a.get("https://maimaidx-eng.com/maimai-mobile/playerData/");case 4:return n=e.sent,r=n.data,a=new DOMParser,s=a.parseFromString(r,"text/html"),r.match(/ログインしてください/)&&(this.message="maimaiでらっくすNETにログインしていません。ログインしてから再度お試しください。",this.error=!0,this.isDisable=!1),i=s.getElementsByClassName("rating_block f_11")[0].innerText,c=Number(s.getElementsByClassName("m_5 m_t_10 t_r f_12")[0].innerText.split("：")[1].split("回")[0]),o=s.getElementsByClassName("name_block f_l f_14")[0].innerText.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}),e.next=14,k.collection("users").doc(this.uid).collection("userData").doc(this.uid).get();case 14:return u=e.sent,u&&u.exists&&(l=u.data()),m=[],l&&(m=l.ratings||[]),(m.length>=1&&m[m.length-1].rating!==Number(i)||0===m.length)&&m.push({rating:Number(i),date:t}),e.next=21,k.collection("users").doc(this.uid).collection("userData").doc(this.uid).set({ratings:m,playCount:c,userName:o},{merge:!0});case 21:e.next=27;break;case 23:e.prev=23,e.t0=e["catch"](1),console.error(e.t0),e.t0.response&&e.t0.response.data&&e.t0.response.data.match(/メンテナンス中/)&&(this.message="maimaiでらっくすNETはメンテナンス中です。メンテナンス終了後に再度お試しください。",this.error=!0,this.isDisable=!1);case 27:case"end":return e.stop()}},e,this,[[1,23]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.logout();case 2:this.$emit("loginCheck");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getTweetURL",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.collection("users").doc(this.uid).get();case 2:t=e.sent,n=t.data(),this.publicData=n.public,this.tweetURL="https://twitter.com/intent/tweet?text=スコア更新しました！&hashtags=舞スコア&url=https://mai-score.com/user/".concat(n.displayName);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"createScoreImg",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,i,c,o,u,l,m,p,d,h,f,g,v,x,_;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(_=function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){a.drawImage(r,10,10+75*s,60,60),t()},r.onerror=function(e){return n(e)},r.crossOrigin="anonymous",r.src=e})},t.reverse(),this.isDXScoreNotOnTheTweetImg&&(t=this.excludeDXScoreOnlyUpdates(t)),!(t.length>=20)){e.next=7;break}t=t.slice(0,20),e.next=10;break;case 7:if(0!==t.length){e.next=10;break}return this.imageGenerationSuccessFlag=!1,e.abrupt("return");case 10:n=document.createElement("canvas"),r=75*t.length,n.width=700,n.height=r,n.style.width="700",n.style.height="".concat(r),a=n.getContext("2d"),a.fillStyle="white",a.fillRect(0,0,700,r),a.fillStyle="black",s=0,i=!0,c=!1,o=void 0,e.prev=24,u=t[Symbol.iterator]();case 26:if(i=(l=u.next()).done){e.next=62;break}return m=l.value,e.prev=28,e.next=31,b.storage().ref().child("musicIcon/".concat(encodeURIComponent(m.songID),".png")).getDownloadURL();case 31:return p=e.sent,e.next=34,_(p);case 34:e.next=47;break;case 36:if(e.prev=36,e.t0=e["catch"](28),"storage/object-not-found"!==e.t0.code){e.next=46;break}return e.next=41,this.saveMusicIcon(m.musicID,m.songID);case 41:return d=e.sent,e.next=44,_(d);case 44:e.next=47;break;case 46:console.error(e.t0);case 47:a.font="24px 'sans-serif'",h="deluxe"===m.type?"DX":"Std",a.fillText("[".concat(m.difficultyLevel.slice(0,3),"|").concat(h,"] ").concat(m.title),80,30*(2*s+1)+15*s),f=void 0,g=void 0,f=m.achievements.length>=2?"".concat(m.achievements.slice(-2)[0].achievement,"%→").concat(m.achievements.slice(-1)[0].achievement,"%  +").concat((m.achievements.slice(-1)[0].achievement-m.achievements.slice(-2)[0].achievement).toFixed(4),"%"):"0.0000%→".concat(m.achievements.slice(-1)[0].achievement,"%  +").concat(m.achievements[0].achievement.toFixed(4),"%"),g=m.dxScores.length>=2?"".concat(m.dxScores.slice(-2)[0].dxScore,"→").concat(m.dxScores.slice(-1)[0].dxScore,"  +").concat(m.dxScores.slice(-1)[0].dxScore-m.dxScores.slice(-2)[0].dxScore):"0→".concat(m.dxScores.slice(-1)[0].dxScore,"  +").concat(m.dxScores[0].dxScore),a.font="16px 'sans-serif'",a.fillText(f,80,30*(2*s+1)+20+15*s),a.fillText(g,80,30*(2*s+1)+40+15*s),a.fillText("".concat(m.rank,"  ").concat(m.comboRank||"","  ").concat(m.sync||""),270,30*(2*s+1)+40+15*s),s++;case 59:i=!0,e.next=26;break;case 62:e.next=68;break;case 64:e.prev=64,e.t1=e["catch"](24),c=!0,o=e.t1;case 68:e.prev=68,e.prev=69,i||null==u.return||u.return();case 71:if(e.prev=71,!c){e.next=74;break}throw o;case 74:return e.finish(71);case 75:return e.finish(68);case 76:return v=n.toDataURL("image/jpeg"),e.prev=77,x=b.storage().ref("userData/".concat(this.uid,"/")).child("updateScore.jpg"),e.next=81,x.putString(v,"data_url");case 81:e.sent,e.next=88;break;case 84:e.prev=84,e.t2=e["catch"](77),console.error(e.t2),this.imageGenerationSuccessFlag=!1;case 88:case"end":return e.stop()}},e,this,[[24,64,68,76],[28,36],[69,,71,75],[77,84]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"excludeDXScoreOnlyUpdates",value:function(e){for(var t=[],n=0;n<e.length;n++)(e[n].achievements.length<2||e[n].achievements.slice(-1)[0].achievement-e[n].achievements.slice(-2)[0].achievement)&&t.push(e[n]);return t}},{key:"saveMusicIcon",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="https://maimaidx-eng.com/maimai-mobile/img/Music/".concat(n,".png"),e.next=3,E.a.get(r,{responseType:"arraybuffer"});case 3:return a=e.sent,e.prev=4,s=b.storage().ref("musicIcon/").child("".concat(encodeURIComponent(n),".png")),e.next=8,s.put(a.data,{contentType:"image/png"});case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),console.error(e.t0);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,null,[[4,11]])}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"tweetStatusUpdate",value:function(e){this.tweetStatus=e}},{key:"getRecordData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s,i,c,o,u,l,m,p,d,h,f,g,v,b,x,_,w,y,O,S,D,j;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t={Basic:{},Advanced:{},Expert:{},Master:{},ReMaster:{}},e.t0=regeneratorRuntime.keys(t);case 2:if((e.t1=e.t0()).done){e.next=10;break}return n=e.t1.value,e.next=6,k.collection("chartData").doc(n).get();case 6:r=e.sent,r&&r.exists&&(t[n]=r.data()),e.next=2;break;case 10:return e.next=12,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/");case 12:a=e.sent,s=a.data,i=new DOMParser,c=i.parseFromString(s,"text/html"),o=c.getElementsByClassName("p_10 t_l f_0 v_b"),u=[],Array.prototype.forEach.call(o,function(e){var n=e.getElementsByClassName("music_img m_5 m_r_0 f_l")[0].src.split("/"),r=n[n.length-1].split(".")[0],a=e.getElementsByClassName("basic_block m_5 p_5 p_l_10 f_13 break")[0].innerText,s=e.getElementsByClassName("playlog_diff v_b")[0].src.split("_")[1].split(".")[0],i="remaster"===s?"ReMaster":s[0].toUpperCase()+s.slice(1),c=e.getElementsByTagName("input")[0].value,o=e.getElementsByClassName("playlog_music_kind_icon")[0].src.indexOf("standard.png")>=0?"standard":"deluxe",l={musicID:r,title:a,difficultyLevel:i,idx:c,type:o};null==t[i]["".concat(r,"_").concat(o)]&&u.push(l)}),l=[],m=u.filter(function(e){if(!(l.indexOf("".concat(e["musicID"]).concat(e["difficultyLevel"]).concat(e["type"]))>=0))return l.push("".concat(e["musicID"]).concat(e["difficultyLevel"]).concat(e["type"])),e}),p={Basic:{},Advanced:{},Expert:{},Master:{},ReMaster:{}},e.prev=22,d=function(e){return new Promise(function(t){return setTimeout(t,e)})},h=function(e){return e.reduce(function(e,t,n,r){return e+t})},f=0;case 26:if(!(f<m.length)){e.next=49;break}return g=m[f].idx,delete m[f].idx,e.next=31,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/playlogDetail/?idx=".concat(g));case 31:for(v=e.sent,b=v.data,x=new DOMParser,_=x.parseFromString(b,"text/html"),m[f].maxCombo=Number(_.getElementsByClassName("f_r f_14 white")[0].innerText.split("/")[1]),w=_.getElementsByClassName("playlog_notes_detail t_r f_l f_11 f_b")[0].innerText.trim().split(/\t+|\n/).filter(function(e){return""!==e}),y=[[],[],[],[],[]],O=0,S=0,D=0;D<w.length;D++)"　"===w[D]?(y[O]=[0],O++):(y[O].push(Number(w[D])),S++,S>=5&&(O++,S=0));if(m[f].notes={tap:h(y[0]),hold:h(y[1]),slide:h(y[2]),touch:h(y[3]),break:h(y[4])},p[m[f].difficultyLevel]["".concat(m[f].musicID,"_").concat(m[f].type)]=m[f],f%10!==0){e.next=46;break}return e.next=46,d(1e3);case 46:f++,e.next=26;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e["catch"](22),console.error(e.t2);case 54:for(j in p)k.collection("chartData").doc(j).set(p[j],{merge:!0}).catch(function(e){console.error(e)});case 55:case"end":return e.stop()}},e,null,[[22,51]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"getFirstVersion",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s,i,c,o,u,l,m;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,k.collection("musicData").doc("Master").get();case 3:return n=e.sent,n&&n.exists&&(r=n.data(),t=r.data||[]),a=new DOMParser,e.next=8,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/musicVersion/");case 8:s=e.sent,i=s.data,c=a.parseFromString(i,"text/html"),o=c.getElementsByClassName("w_300 m_10")[0].childElementCount,u=function(e){return new Promise(function(t){return setTimeout(t,e)})},l=regeneratorRuntime.mark(function e(n){var r,s,i,c,o,l,m,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/musicVersion/search/?version=".concat(n,"&diff=3"));case 2:r=e.sent,s=r.data,i=a.parseFromString(s,"text/html"),c=i.getElementsByClassName("screw_block m_15 f_15")[0].innerText.replace(" ","_"),o=i.getElementsByClassName("music_master_score_back pointer w_450 m_15 p_3 f_0"),l=regeneratorRuntime.mark(function e(n){var r,s,l,m,p,d,h,f,g,v;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=o[n].getElementsByClassName("music_name_block t_l f_13 break")[0].innerText,s=i.getElementsByClassName("music_kind_icon f_r")[0].src.indexOf("dx.png")>=0?"deluxe":"standard",null!=t.find(function(e){return e.title===r&&e.type===s&&e.version===c})){e.next=20;break}return l=o[n].getElementsByTagName("input")[0].value,e.next=6,E.a.get("https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx=".concat(encodeURIComponent(l)));case 6:if(m=e.sent,p=m.data,d=a.parseFromString(p,"text/html"),h=d.getElementsByClassName("w_180 m_5 f_l")[0].src.split("/"),f=h[h.length-1].split(".")[0],g=d.getElementsByClassName("m_10 m_t_5 t_r f_12 blue")[0].innerText.trim(),null==t.find(function(e){return e.songID===f&&e.type===s&&e.genre===g})){e.next=16;break}return e.next=15,u(500);case 15:return e.abrupt("return","continue");case 16:return v=d.getElementsByClassName("m_5 f_12 break")[0].innerText.trim(),t.push({title:r,version:c,genre:g,type:s,songID:f,artist:v}),e.next=20,u(500);case 20:case"end":return e.stop()}},e)}),m=0;case 9:if(!(m<o.length)){e.next=17;break}return e.delegateYield(l(m),"t0",11);case 11:if(p=e.t0,"continue"!==p){e.next=14;break}return e.abrupt("continue",14);case 14:m++,e.next=9;break;case 17:case"end":return e.stop()}},e)}),m=14;case 15:if(!(m<o)){e.next=20;break}return e.delegateYield(l(m),"t0",17);case 17:m++,e.next=15;break;case 20:this.versionMusicList=t,k.collection("musicData").doc("Master").set({data:t},{merge:!0}).catch(function(e){console.error(e)});case 22:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(d["c"]);p["__decorate"]([Object(d["b"])({default:""})],U.prototype,"uid",void 0),U=p["__decorate"]([Object(d["a"])({components:{TweetsWithImages:A}})],U);var V=U,$=V,X=(n("8820"),Object(D["a"])($,N,C,!1,null,"7cddcb51",null)),W=X.exports,G=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.uid=null,e}return Object(m["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loginCheck();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"loginCheck",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.auth();case 2:t=e.sent,this.uid=t?t.uid:null;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"closeBookmarkletWindow",value:function(){var e=document.getElementById("mai-score-bookmarklet"),t=e.parentNode;t.removeChild(e)}}]),t}(d["c"]);G=p["__decorate"]([Object(d["a"])({components:{LoginForm:R,AddScoreData:W}})],G);var z=G,H=z,Y=(n("5c0b"),Object(D["a"])(H,a,s,!1,null,null,null)),J=Y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(J)}}).$mount("#mai-score-bookmarklet")},da72:function(e,t,n){}});
//# sourceMappingURL=app.272cfcb3.js.map
