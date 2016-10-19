var RequiredMsg = "The FIELDNAME field is required.",
    EmailMsg = "The FIELDNAME field must contain a valid email address.",
    NumericMsg = "The FIELDNAME must contain only numeric value.",
    FloatMsg = "The FIELDNAME must contain numeric value.",
    MinValueMsg = "The FIELDNAME should be exceed LENGTH characters in length.",
    MaxValueMsg = "The FIELDNAME can not exceed LENGTH characters in length.",
    ValidFileMsg = "The FIELDNAME only FILETYPE formats are allowed.",
    BetweenMsg = "The FIELDNAME should be between TO to FROM.",
    AlphaNumericMsg = "The FIELDNAME must contain numeric and alphabets.",
    ValidUrlMsg = "The FIELDNAME must contain valid url.";

!function(){var a={},b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i,d=(new RegExp(/range-[0-9]+-[0-9]+$/),new RegExp(/minlength-[0-9]+/)),e=new RegExp(/maxlength-[0-9]+/),f=new RegExp(/valid-filetype-[a-zA-Z,]+$/),g=/^[0-9]+$/,h=/^[0-9\.]+$/,j=/^between-[0-9]+-[0-9]+/,k=/^([0-9]|[a-z])+|([0-9a-z]+)$/i,l=new RegExp(/usename-#[a-z A-Z0-9]+#$/),m=new RegExp(/(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/),n="";this.Validate=function(a){var b={ErrorLevel:0,FormName:"",validateHidden:!0,RequiredMsg:RequiredMsg,EmailMsg:EmailMsg,NumericMsg:NumericMsg,FloatMsg:FloatMsg,MinValueMsg:MinValueMsg,MaxValueMsg:MaxValueMsg,ValidFileMsg:ValidFileMsg,BetweenMsg:BetweenMsg,AlphaNumericMsg:AlphaNumericMsg,ValidUrlMsg:ValidUrlMsg,callback:""},c=this;c.defaults=__extent(b,a),c.prepare(),c.addListener()},Validate.prototype.prepare=function(){var b=this;if(void 0===document.forms[b.defaults.FormName])return!1;for(elements=document.forms[b.defaults.FormName].elements,a[b.defaults.FormName]={field:[],hasError:{}},i=0;i<elements.length;i++)if(a[b.defaults.FormName].field.push({id:elements[i],rules:elements[i].className}),null==elements[i].nextElementSibling||!hasClass(elements[i].nextElementSibling.className,"error-msg")){var c=document.createElement("div");c.className="error-msg",elements[i].parentNode.appendChild(c)}},Validate.prototype.addListener=function(){var a=this;return void 0!==document.forms[a.defaults.FormName]&&void document.forms[a.defaults.FormName].addEventListener("submit",function(b){0==a.get_validate()?b.preventDefault():1==isObject(a.defaults.callback)&&(a.defaults.callback(),b.preventDefault())})},Validate.prototype.get_validate=function(){var b=this,c=!0,d=a[b.defaults.FormName];d.hasError={},reset(b);for(var e in d.field)0==required(d.field[e],b)&&(c=!1),0==numeric(d.field[e],b)&&(c=!1),0==valid_email(d.field[e],b)&&(c=!1),0==min_value(d.field[e],b)&&(c=!1),0==max_value(d.field[e],b)&&(c=!1),0==valid_file(d.field[e],b)&&(c=!1),0==between(d.field[e],b)&&(c=!1),0==albha_numeric(d.field[e],b)&&(c=!1),0==float_value(d.field[e],b)&&(c=!1),0==valid_url(d.field[e],b)&&(c=!1);return a[b.defaults.FormName]=d,c},this.autoload=function(){},this.isObject=function(a){return a instanceof Object},this.hasClass=function(a,b){return(" "+a+" ").indexOf(" "+b+" ")>-1},this.reset=function(a){try{for(var b=document.forms[a.defaults.FormName].getElementsByClassName("has-error"),c=document.forms[a.defaults.FormName].getElementsByClassName("error-msg"),d=b.length-1;d>=0;--d)void 0!=b[d].className&&(b[d].className=b[d].className.replace("has-error",""));for(var e in c)c[e].innerHTML=""}catch(a){console.log(a)}},this.addError=function(b,c,d){try{if(!a[c.FormName].hasError.hasOwnProperty(b.name)){if(0==isVisible(b)&&0==c.validateHidden)return;a[c.FormName].hasError[b.name]=!0,0==l.test(b.className)?d=d.replace("FIELDNAME",b.name).replace(/_/g," "):(temp=b.className.match(l)[0].replace("usename-#","").replace("#",""),d=d.replace("FIELDNAME",temp)),b.nextElementSibling.innerHTML=d;for(var e=0;e<c.ErrorLevel&&!hasClass(b.className,"rs-me-head");e++)null!=b.parentNode&&(b=b.parentNode);return hasClass(b.className,"has-error")||(b.className=b.className+" has-error"),!1}}catch(a){console.log(a)}},__extent=function(a,b){for(var c in b)a[c]=b[c];return a},check=function(b){hasClass(b.rules,"minlength")&&(a[defaults.FormName].hasError.hasOwnProperty(a[defaults.FormName].field[i].id.name)||0==g.test(value)&&addError(a[defaults.FormName].field[i].id,defaults))},required=function(a,b){var c=a.id.value.trim();if(hasClass(a.rules,"required")&&!c.length>0)return addError(a.id,b.defaults,b.defaults.RequiredMsg)},valid_email=function(a,c){var d=a.id.value.trim();if(hasClass(a.rules,"valid-email")&!hasClass(a.id.className,"has-error")&&0==b.test(d))return addError(a.id,c.defaults,c.defaults.EmailMsg)},numeric=function(a,b){hasClass(a.rules,"numeric")&!hasClass(a.id.className,"has-error")&&check_numeric(a,b)},check_numeric=function(a,b){var c=a.id.value.trim();if(0==g.test(c)&&c.length>0)return addError(a.id,b.defaults,b.defaults.NumericMsg)},float_value=function(a,b){if(hasClass(a.rules,"float")&!hasClass(a.id.className,"has-error")){var c=a.id.value.trim();if(0==h.test(c)&&c.length>0)return addError(a.id,b.defaults,b.defaults.FloatMsg)}},min_value=function(a,b){if(a.rules.match(d)&&!hasClass(a.id.className,"has-error")){var c=a.id.value.trim(),e=a.rules.match(d)[0];if(c.length<e.split("-")[1])return n=b.defaults.MinValueMsg.replace("LENGTH",e.split("-")[1]),addError(a.id,b.defaults,n)}},max_value=function(a,b){if(a.rules.match(e)&&!hasClass(a.id.className,"has-error")){var c=a.id.value.trim(),d=a.rules.match(e)[0];if(c.length>d.split("-")[1])return n=b.defaults.MaxValueMsg.replace("LENGTH",d.split("-")[1]),addError(a.id,b.defaults,n)}},valid_file=function(a,b){if(a.rules.match(f)&&!hasClass(a.id.className,"has-error")&&"file"==a.id.type&&""!=a.id.value.trim()){var c=a.id.value.trim().split(".");c=c[c.length-1];var d=a.rules.match(f)[0].split("-")[2];if(d.split(",").indexOf(c)==-1)return n=b.defaults.ValidFileMsg.replace("FILETYPE",d),addError(a.id,b.defaults,n)}},between=function(a,b){var c=a.id.value.trim();if(""!=c&&j.test(a.rules)){var d=a.rules.match(j)[0].replace("between-","").split("-");if(2==d.length&&(c.length<d[0]||c.length>d[1]))return n=b.defaults.BetweenMsg.replace("TO",d[0]).replace("FROM",d[1]),addError(a.id,b.defaults,n)}},albha_numeric=function(a,b){if(""!=a.id.value.trim()&&hasClass(a.rules,"alpha-numeric")&&0==k.test(a.id.value))return addError(a.id,b.defaults,b.defaults.AlphaNumericMsg)},valid_url=function(a,b){if(""!=a.id.value.trim()&&hasClass(a.rules,"valid_url")&!hasClass(a.id.className,"has-error")&&0==m.test(a.id.value))return addError(a.id,b.defaults,b.defaults.ValidUrlMsg)},isVisible=function(a){return 0!==a.clientWidth&&0!==a.clientHeight&&0!==a.style.opacity&&"hidden"!==a.style.visibility}}();