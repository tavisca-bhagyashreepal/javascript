window.onload= function()
{
	var btnhotel = document.getElementById("hotel");
	btnhotel.onclick=display;
}

function display()
{
 		alert("In hotel");
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}


/*var parent = document.getElementById("div1");
while(parent.firstChild)
{
	parent.removeChild(parent.firstChild);
}*/
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var obj = JSON.parse(xmlhttp.responseText);
				//document.getElementById("").innerHTML=xmlhttp.responseText;
				var i=0;
					//document.getElementById("mytext1").innerHTML= obj.deals[0].hotelId + "<br>" +obj.deals[0].hotelName + "<br>" +obj.deals[0].allowedCheckInDays + "<br>";
					

					/*var div = document.createElement("div");
					div.id= "div1";
					div.className ='div-style';
					div.className = div.className + 'div-format'; 
					var divBody =document.getElementById("heading");
					divBody.appendChild(div);*/

				while(obj.deals[i]!='undefined')
				{
						alert("In while");
						var divtag=document.getElementById("para");

					/*var element =document.createElement("div");
					if(i%2==0){
						element.className = 'div-style-alternate';
					}
					else
						element.className = 'div-style';
					//div.className = div.className + 'div-format'; 
					div.classList.add('div-format');
					var divParent = document.getElementById('div1');
					divParent.appendChild(element);
					
					element.innerHTML+=template(i,hotelId,hotelName,title,description,imageUrl,divParent);
					/*element.innerHTML = "HotelId:" + " " + obj.deals[i].hotelId + "<br>"+ " " + "HotelName:" + " " + obj.deals[i].hotelName + "<br>" +
					 "Title:" + obj.deals[i].title +"<br>" + "Description:" + " "+ obj.deals[i].description+"<br>" + "Image:" + " "+obj.deals[i].imageUrl
					 
					 showImage(i,divParent,obj.deals[i].imageUrl,100,100,"image not found") + "<br>"+"<br>"; */
					var hotelId =obj.deals[i].hotelId;
					var hotelName= obj.deals[i].hotelName;
					var title= obj.deals[i].title;
					var description =obj.deals[i].description;
					var imageUrl = obj.deals[i].imageUrl;
					
					divtag.innerHTML=divtag.innerHTML+template(hotelId,hotelName,title,description,imageUrl);
					i=i+1;
					
				}
		}
		xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=cpqeivohl4c2jmfejew1ciic&&$filter=Type eq 'hotel'",true);
		xmlhttp.send();
	}
}

function template(hotelId,hotelName,title,description,imageUrl)
{	
	alert("In tem");
	var templateFormat = "<div class='deals'><h3 class='dealsTitle'>" + hotelName + "</h3><p class='info'>" + Description + "</p><img class='dealsImage' src=" + imgUrl +" alt=\"Image not Loaded\">a</div>";
	return templateFormat;
}



    

/*function showImage(j,divParent,src,width,height,alt) {
	var div =document.createElement("div");
	if(j%2==0){
	div.className = 'div-style-alternate';
	}
	else div.className = 'div-style';

	divParent.appendChild(div);
    var img = document.createElement("img");
    img.src = src;
    img.width=width;
    img.height=height;
    img.alt=alt;
    div.appendChild(img);
 	//document.getElementById("mytext1").appendChild(img);
    
   
}*/




//CAR
/*var btncar= document.getElementById("car");
btncar.onclick= function() {
var xmlhttp;
if (window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else
{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}*/

/*
var parent = document.getElementById("div1");
while(parent.firstChild)
{
	parent.removeChild(parent.firstChild);
}
*/


/*xmlhttp.onreadystatechange=function()
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
//document.getElementById("mytext2").innerHTML=xmlhttp.responseText;
var obj = JSON.parse(xmlhttp.responseText);
var i=0;
	//document.getElementById("mytext1").innerHTML= obj.deals[0].hotelId + "<br>" +obj.deals[0].hotelName + "<br>" +obj.deals[0].allowedCheckInDays + "<br>";
	var div = document.createElement("div");
	div.id= "div1";
	div.className ='div-style';
	div.className = div.className + 'div-format'; 
	var divBody =document.getElementById("heading");
	divBody.appendChild(div);

	while(obj.deals[i]!='undefined'){

	var element =document.createElement("div");
	if(i%2==0){
		element.className ='div-style-alternate';
	}
	else
		element.className = 'div-style';
	element.classList.add('div-format1');
	var divParent = document.getElementById("div1");
	divParent.appendChild(element);
	element.innerHTML = "RentalCompanyName:" + " " + obj.deals[i].rentalCompanyName+ "<br>"+ " " + "RentalCompanyCode:" + " " + obj.deals[i].rentalCompanyCode + "<br>" +
	 "Title:" + obj.deals[i].title +"<br>" + "Description:" + " "+ obj.deals[i].description+"<br>" + "ValidityPeriod start: Date:"  +obj.deals[i].validityPeriod["start"]["date"]+"<br>" + "Time:"+obj.deals[i].validityPeriod["start"]["time"]+"<br>" +"SystemDateTime:"+obj.deals[i].validityPeriod["start"]["systemDateTime"]+"<br>" +
	 "ValidityPeriod end: Date:"+obj.deals[i].validityPeriod["end"]["date"]+"<br>" + "Time:"+obj.deals[i].validityPeriod["end"]["time"]+"<br>" +"SystemDateTime:"+obj.deals[i].validityPeriod["end"]["systemDateTime"]+"<br>"+"<br>" ;
	i=i+1;
}
}
}

xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=cpqeivohl4c2jmfejew1ciic&&$filter=Type eq 'car'",true);

xmlhttp.send();
};

//REFRESH
var btnRefresh = document.getElementById("refresh");
btnRefresh.onclick= function (){
    window.location.reload();
} 
}
*/