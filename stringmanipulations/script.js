


 function utilityClass(string1,string2,string3)
 {
    this.str1=string1;
    this.str2=string2;
    this.str3=string3;
 }

utilityClass.prototype.strLength=function(){
    var strResult=0;
    
        while (this.str1[strResult]) {
            strResult = strResult + 1;
           
        }
        result.value = strResult;

}








utilityClass.prototype.strConcat=function() {

   // debugger;
    
    var strResult = this.str1 + this.str2;
    
    if ((typeof(this.str1) =='string') && (typeof(this.str2) == 'string')) {
        result.value = strResult;
   } else {
        alert("please enter string value!!!");
        string1.value = "";
        string1.value = "";

    }
  
}



utilityClass.prototype.strCharAt=function() {

   
    var value = parseInt(this.str2);
    if((value <0) || (value > this.str1.length))
    {
        throw("value not in range");
    }
    result.value=this.str1[value];

}

utilityClass.prototype.strLastIndexOf=function() {
    debugger;
    var strResult=0;
   var i=0,j=0;
    while(this.str1[i])
    {
        if(this.str1[i]==this.str2[j])
        {
            strResult=i;
        }
        i=i+1;
    }
    result.value=strResult;
}

utilityClass.prototype.strIndexOf=function() {

    
    var strResult=0;
    while (this.str1[strResult]) {
        if (this.str1[strResult] == this.str2) {
            break;
        }
        else {
            strResult += 1;
        }
    }
    result.value = strResult;
}

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
    result.value = strResult;
   
}

utilityClass.prototype.strReplace=function() {
 
    var index=0,i=0;
    var strResult=' ';
   debugger;
   var k=0;
   index=this.str1.indexOf(this.str2);
   result.value=index;
   if(index)
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
    result.value=strResult;
   }
   else{
    throw("string not found");
   }
 
    result.value = strResult;
}




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

function strManiconcat() {

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