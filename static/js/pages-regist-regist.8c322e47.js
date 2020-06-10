(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-regist-regist"],{"019c":function(e,n,t){t("c975"),t("a9e3"),t("4d63"),t("ac1f"),t("25f0"),t("1276"),e.exports={error:"",check:function(e,n){for(var t=0;t<n.length;t++){if(!n[t].checkType)return!0;if(!n[t].name)return!0;if(!n[t].errorMsg)return!0;if(!e[n[t].name])return this.error=n[t].errorMsg,!1;switch(n[t].checkType){case"string":var r=new RegExp("^.{"+n[t].checkRule+"}$");if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+n[t].checkRule+"}$");if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"between":if(!this.isNumber(e[n[t].name]))return this.error=n[t].errorMsg,!1;var i=n[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[n[t].name]>i[1]||e[n[t].name]<i[0])return this.error=n[t].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;i=n[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[n[t].name]>i[1]||e[n[t].name]<i[0])return this.error=n[t].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;i=n[t].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[n[t].name]>i[1]||e[n[t].name]<i[0])return this.error=n[t].errorMsg,!1;break;case"same":if(e[n[t].name]!=n[t].checkRule)return this.error=n[t].errorMsg,!1;break;case"notsame":if(e[n[t].name]==n[t].checkRule)return this.error=n[t].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"reg":r=new RegExp(n[t].checkRule);if(!r.test(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"in":if(-1==n[t].checkRule.indexOf(e[n[t].name]))return this.error=n[t].errorMsg,!1;break;case"notnull":if(null===e[n[t].name]||e[n[t].name].length<1)return this.error=n[t].errorMsg,!1;break}}return!0},isNumber:function(e){var n=/^-?[1-9][0-9]?.?[0-9]*$/;return n.test(e)}}},"33c0":function(e,n,t){"use strict";var r,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-form",{staticStyle:{"margin-top":"40px"},on:{submit:function(n){arguments[0]=n=e.$handleEvent(n),e.handleSubmit.apply(void 0,arguments)},reset:function(n){arguments[0]=n=e.$handleEvent(n)}}},[t("v-uni-view",{staticClass:"signup-info"},[t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"uni-input-wrapper"},[t("v-uni-text",{staticClass:"input-header"},[e._v("昵称")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"nickname",placeholder:"请输入昵称"}})],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"uni-input-wrapper"},[t("v-uni-text",{staticClass:"input-header"},[e._v("邮箱")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"email",placeholder:"请输入邮箱"}})],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"uni-input-wrapper"},[t("v-uni-text",{staticClass:"input-header"},[e._v("QQ号")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"QQ",type:"number",placeholder:"请输入QQ号"}})],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"uni-input-wrapper"},[t("v-uni-text",{staticClass:"input-header"},[e._v("密码")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"password",placeholder:"请输入密码",password:e.showPassword}}),e.showPassword?t("v-uni-text",{staticClass:"uni-icon",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changePassword.apply(void 0,arguments)}}},[e._v("")]):t("v-uni-text",{staticClass:"uni-icon",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changePassword.apply(void 0,arguments)}}},[e._v("")])],1)],1),t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-view",{staticClass:"uni-input-wrapper"},[t("v-uni-text",{staticClass:"input-header"},[e._v("确认密码")]),t("v-uni-input",{staticClass:"uni-input",attrs:{name:"password2",placeholder:"请确认密码",password:e.showPassword2}}),e.showPassword2?t("v-uni-text",{staticClass:"uni-icon",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changePassword2.apply(void 0,arguments)}}},[e._v("")]):t("v-uni-text",{staticClass:"uni-icon",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changePassword2.apply(void 0,arguments)}}},[e._v("")])],1)],1)],1),t("v-uni-view",{staticClass:"regist-btn"},[t("v-uni-button",{staticClass:"uni-btn default",staticStyle:{color:"#016EE0","border-color":"#016EE0"},attrs:{type:"primary",plain:"true","form-type":"submit"}},[e._v("注册")])],1)],1)],1)},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}))},"352a":function(e,n,t){"use strict";var r=t("cffc"),i=t.n(r);i.a},9539:function(e,n,t){"use strict";var r=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(t("4246"));var i=t("019c"),a={data:function(){return{loading:!1,showPassword:!0,showPassword2:!0}},methods:{handleSubmit:function(e){this.loading=!0;var n=[{name:"nickname",checkType:"notnull",checkRule:"4,16",errorMsg:"请填写昵称后再提交"},{name:"nickname",checkType:"string",checkRule:"4,16",errorMsg:"字符长度4-16"},{name:"email",checkType:"notnull",checkRule:"",errorMsg:"请填写邮箱后再提交"},{name:"email",checkType:"email",checkRule:"",errorMsg:"邮箱格式错误"},{name:"QQ",checkType:"notnull",checkRule:"",errorMsg:"请填写QQ后再提交"},{name:"password",checkType:"notnull",errorMsg:"请填写密码后再提交"},{name:"password2",checkType:"notnull",errorMsg:"请输入确认密码后再提交"}],t=e.detail.value,r=i.check(t,n),a=t.password===t.password2;r&&a?(this.queryReg(t),uni.showToast({title:"验证通过!",icon:"none"})):uni.showToast({title:i.error,icon:"none"})},queryReg:function(e){var n=this,t={QQ:"",email:"",userName:"",password:""};t.email=e.email,t.QQ=e.QQ,t.userName=e.nickname,t.password=e.password,uni.request({url:"http://wuancake.supersuperz.top/regist",method:"POST",data:t}).then((function(e){"500"===e[1].data.infoCode?uni.showToast({icon:"none",title:e[1].data.infoText}):(uni.showToast({title:"注册成功",icon:"success",mask:!0}),setTimeout((function(){uni.hideToast(),uni.reLaunch({url:"/pages/login/login"})}),1e3)),n.loading=!1})).catch((function(e){uni.showModal({content:e.errMsg,showCancel:!1}),n.loading=!1}))},checkNone:function(e){return e.nickname?e.email?e.QQ?e.password?!!e.password2||(uni.showToast({icon:"none",title:"请填写确认密码后再注册"}),!1):(uni.showToast({icon:"none",title:"请填写密码后再注册"}),!1):(uni.showToast({icon:"none",title:"请填写QQ号后再注册"}),!1):(uni.showToast({icon:"none",title:"请填写邮箱后再注册"}),!1):(uni.showToast({icon:"none",title:"请填写昵称后再注册"}),!1)},changePassword:function(){this.showPassword=!this.showPassword},changePassword2:function(){this.showPassword2=!this.showPassword2}}};n.default=a},b0f4:function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,".uni-input-wrapper[data-v-6dd549b4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\npadding:4px 13px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;background-color:#fff;height:56px;border-bottom-width:1px;border-bottom-color:#eee}.input-header[data-v-6dd549b4]{margin-left:15px;\r\n  /* margin-right: 70rpx; */width:80px;font-size:15px;margin-top:15px}.uni-input[data-v-6dd549b4]{font-size:15px;line-height:15px;\r\nmargin-top:4px;\r\nline-height:1.8;height:45px;line-height:14px;font-size:14px;padding:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#fff}.signup-info[data-v-6dd549b4]{margin-bottom:40px}.uni-input-ab[data-v-6dd549b4]{position:relative;padding:4px 4px;background-color:#fff;width:340px;\r\nmargin:8px auto;\r\nborder-radius:5px}\n.uni-input-ab > uni-input[data-v-6dd549b4]{position:absolute;left:40px;top:6px}\n.input-error[data-v-6dd549b4]{position:absolute;top:6px;right:20px;text-align:right;color:red}.uni-icon[data-v-6dd549b4]{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;width:24px;height:24px;line-height:24px;color:#eee;margin-right:%?16?%;margin-top:%?30?%}.after[data-v-6dd549b4]{margin-right:4px;padding:3px 0}.regist-btn[data-v-6dd549b4]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-btn[data-v-6dd549b4]{width:%?406?%;border-radius:0}\r\n\r\n\r\n\r\n",""]),e.exports=n},cb06:function(e,n,t){"use strict";t.r(n);var r=t("9539"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},cffc:function(e,n,t){var r=t("b0f4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("5a47ad8c",r,!0,{sourceMap:!1,shadowMode:!1})},eb6a:function(e,n,t){"use strict";t.r(n);var r=t("33c0"),i=t("cb06");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("352a");var s,o=t("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"6dd549b4",null,!1,r["a"],s);n["default"]=u.exports}}]);