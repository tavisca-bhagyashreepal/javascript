window.onload= function(){
    //debugger;
    //alert("onload");

    var idLength = document.getElementById("length");
    //Constructor

    function utilityClass(string1,string2,string3)
    {
    this.str1=string1;
    this.str2=string2;
    this.str3=string3;
    }

    //Length Function
    idLength.onclick=function() {

    var str1 = document.getElementById('strLength').value;

    if(typeof(str1)=='string' ){
    var str= new utilityClass(str1);
    str.strLength();
    }else
    {
    throw("enter string value");
    }
    };

    
    utilityClass.prototype.strLength=function(){
    var strResult=0;
    
        while (this.str1[strResult]) {
            strResult = strResult + 1;
           
        }
        resLength.value = strResult;

    }


    //Concatenation Function
    var idConcat = document.getElementById("concat");
    idConcat.onclick= function() {
    //alert("concat");
    var str1 = document.getElementById('strConcat1').value;
    var str2 = document.getElementById('strConcat2').value;
///0/document.getElementById('string3').disabled;
    if(typeof(str1)=='string' && typeof(str2)=='string'){
    var str= new utilityClass(str1,str2);
    str.strConcat();
    }else{throw("enter string value");}
    };

    
    utilityClass.prototype.strConcat=function() {

   // debugger;
    
    var strResult = this.str1 + this.str2;
    
    if ((typeof(this.str1) =='string') && (typeof(this.str2) == 'string')) {
        resConcat.value = strResult;
   } else {
        alert("please enter string value!!!");
        string1.value = "";
        string1.value = "";

    }
  
    }

    //SubString Function
    var idSubString = document.getElementById("subString");
    idSubString.onclick=function() {

    var str1 = document.getElementById('strSubString').value;
    var str2 = document.getElementById('strSIndex').value;
    var str3 = document.getElementById('strNoOfChars').value;

    if(typeof(str1)=='string'){
    var str= new utilityClass(str1,str2,str3);
    str.strSubString();
    }else{ throw("enter string value");}
    };

    
    utilityClass.prototype.strSubString=function() {


    var start = parseInt(this.str2);
    var len = parseInt(this.str3);
    if(start <0 || start>this.str1.length)
        throw ("value is not in range");

    if(len>(this.str1.length-start))
        throw ("value is not in range");

    var strResult=' ';
   
    while (this.str1[start] && (len>0)) {
        strResult=strResult.concat( this.str1.charAt(start)); 
        start = start+ 1;
        len =len- 1;
        
    }
    resSubString.value = strResult;
   
    }

    //CharacterAt Function
    var idCharAt = document.getElementById("charAt");
    idCharAt.onclick= function() {

    var str1 = document.getElementById('strCharAt').value;
    var str2 = document.getElementById('strPos').value;
    if(typeof(str1)=='string' )
    {
    var str= new utilityClass(str1,str2);
    str.strCharAt();
    }
    else{
    throw("enter string value");
    }
    };

    
    utilityClass.prototype.strCharAt=function() {

   
    var value = parseInt(this.str2);
    if((value <0) || (value > this.str1.length))
    {
        throw("value not in range");
    }
    resCharAt.value=this.str1[value];

    }

    //LastIndexOf Function
    var idLastIndexOf = document.getElementById("lastIndexOf");
    idLastIndexOf.onclick=function() {

    var str1 = document.getElementById('strLIndex').value;
    var str2 = document.getElementById('strLIndexOf').value;
//var str3 = document.getElementById('string3').value;
    if(typeof(str1)=='string' && typeof(str2)=='string')
    {
    var str= new utilityClass(str1,str2);
    str.strLastIndexOf();
    }else{ throw("enter string value");}
    };

    
    utilityClass.prototype.strLastIndexOf=function() {
    debugger;
    var strResult= -1;
    var i=0,j=0,flag=0;
    while(this.str1[i])
    {
        if(this.str1[i]==this.str2[j])
        { 
            strResult=i;
        }
        i=i+1;
    }
    resLIndexOf.value=strResult;



    }


     //IndexOf Function
    var idIndexOf = document.getElementById("indexOf");
    idIndexOf.onclick=function() {

    var str1 = document.getElementById('strIndx').value;
    var str2 = document.getElementById('strIndxOf').value;
//var str3 = document.getElementById('string3').value;
    if(typeof(str1)=='string' && typeof(str2)=='string')
    {
    var str= new utilityClass(str1,str2);
    str.strIndexOf();
    }else{ throw("enter string value");}
    };

   
    utilityClass.prototype.strIndexOf=function() {

    var flag=0;
    var strResult=0;
    while (this.str1[strResult]) {
        if (this.str1[strResult] == this.str2) {
            flag=1;
            break;
        }
        else {
            flag=0;
            strResult += 1;
        }
    }
    if(flag==0)
    resIndexOf.value = -1;
    else
    resIndexOf.value=strResult;
    }

    //Replace Function
    var idReplace = document.getElementById("replace");
    idReplace.onclick=function() {
    var str1 = document.getElementById('strReplace').value;
    var str2 = document.getElementById('strTReplace').value;
    var str3 = document.getElementById('strReplaceWith').value;
    if(typeof(str1)=='string' && typeof(str2)=='string' && typeof(str3)=='string')
    {
    var str= new utilityClass(str1,str2,str3);
    str.strReplace();
    }
    else{ throw ("enter string value");}
    };

    
    utilityClass.prototype.strReplace=function() {
 
    var i=0;
    var strResult=' ';
   //debugger;
    var str4;
    var k=0,len=0,index=0;
 /*   len=this.str1.length;
    var index= new Array();

    while(len){
    index[i]=this.str1.indexOf(this.str2);
    i=i+1;
    len=len-(index+this.str2.length);
    len1=len;
    while(len1)
    {


    }
    }*/
     index=this.str1.indexOf(this.str2);
    //resReplace.value=index;
    if(index>=0)
    {i=0;
    while(this.str1[i])
    {
        if(i==index){
            
            for(j=0;j<this.str3.length;j++)
            {
            strResult=strResult.concat(this.str3.charAt(j));
            
            }
            i=i+this.str2.length;

            }
        else{
            strResult=strResult.concat(this.str1.charAt(i));
            i=i+1;
        }
    }
    resReplace.value=strResult;
    }
    else{
    throw("string not found");
    }
 
    resReplace.value = strResult;
    }

}


















/*
function strManiLen() {

var str1 = document.getElementById('string1').value;

if(typeof(str1)=='string' ){
    var str= new utilityClass(str1);
    str.strLength();
}else
{
    throw("enter string value");
}
}

/*function strManiconcat() {
alert("concat");
var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
///0/document.getElementById('string3').disabled;
if(typeof(str1)=='string' && typeof(str2)=='string'){
var str= new utilityClass(str1,str2);
str.strConcat();
}else{throw("enter string value");}
}

function strManicharAt() {

var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
if(typeof(str1)=='string' )
{
var str= new utilityClass(str1,str2);
str.strCharAt();
}
else{
    throw("enter string value");
}
}

function strManisubString() {

var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
var str3 = document.getElementById('string3').value;

if(typeof(str1)=='string'){
var str= new utilityClass(str1,str2,str3);
str.strSubString();
}else{ throw("enter string value");}
}

function strManiIndexOf() {

var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
//var str3 = document.getElementById('string3').value;
if(typeof(str1)=='string' && typeof(str2)=='string')
{
var str= new utilityClass(str1,str2);
str.strIndexOf();
}else{ throw("enter string value");}
}

function strManiLastIndexOf() {

var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
//var str3 = document.getElementById('string3').value;
if(typeof(str1)=='string' && typeof(str2)=='string')
{
var str= new utilityClass(str1,str2);
str.strLastIndexOf();
}else{ throw("enter string value");}
}

function strManiReplace() {


var str1 = document.getElementById('string1').value;
var str2 = document.getElementById('string2').value;
var str3 = document.getElementById('string3').value;

if(typeof(str1)=='string' && typeof(str2)=='string' && typeof(str3)=='string')
{
var str= new utilityClass(str1,str2,str3);
str.strReplace();
}
else{ throw ("enter string value");}
}

}*/