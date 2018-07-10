$("document").ready(() => {
	$(".loader").hide();
	$(".title").hide();
$(".titleyear").hide();
$(".i2").hide();
$(".parent1").hide();
 /*Search button click*/
				
//On clicking on title only textfield with "Enter the title of movie" will be shown with search button 
	$(".t1").click(() => 
	{
		$(".title").show();

			$(".titleyear").hide();

$(".i2").hide();
})
	//On clicking on title only textfield with "Enter the title and year of movie" will be shown with search button 
		$(".t2").click(() =>
	{
		$(".titleyear").show();
	
		$(".title").hide();
$(".i2").hide();
})
//On clicking on title only textfield with "Enter the id of movie" will be shown with search button 
				$(".t3").click(() =>
	{
		
		$(".i2").show();
		$(".title").hide();
	$(".titleyear").hide();


})
				
			
	$("#search2").click(() => {
	
		if($('#search1').val() == ''){
      		alert('Enter the title of movie ');//if text field is empty on clicking search button	

   		}else{
   		
   			let t1 = document.getElementById("search1").value;
   			console.log(t1);
			getData(t1, 0);
   		}
	});
$("#search5").click(() => {
	
		if($('#search3').val() == '' && $('#search4').val()!==''){
      		alert('Enter the title of movie ');//if text field  of title is empty on clicking search button	
      		}
 if($('#search3').val() !== '' && $('#search4').val()==''){
      		alert('Enter  year of movie ');//if text field  of year  is empty on clicking search button

}
 if($('#search3').val() == '' && $('#search4').val()==''){
      		alert('Enter  year and title of movie ');//if text field  of year  is empty on clicking search button

}
else{
   		
   			let t1 = document.getElementById("search3").value;
   			let year = document.getElementById("search4").value;
   	          getData(t1, year); //function is called
   		}
	});

	$("#search7").click(() => {
	
		if($('#search6').val() == ''){
      		alert('Enter the id of movie');//if text field is empty on clicking search button	

   		}else{
   		
   			let i1 = document.getElementById("search6").value;
   			
			getData(i1, 1);
   		}
	});
	});	
let getData =(x,num)=>{
		var link = "";
		if(x!==undefined && num == 1) { // id is entered
    link+=`https://www.omdbapi.com/?i=${x}&apikey=7d41fd3b`;
	}
	
		  else if ((x!==undefined && num!==0)||(x!==undefined && num!==1)) { //title and year are entered 
      link+=`https://www.omdbapi.com/?t=${x}&y=${num}&apikey=7d41fd3b`;
	}
		

	$.ajax({
		type:"GET",
		url:link,
		success: (response) => {

			
					if(response.Response !== "False"){
				// Displays Second Page & hides Main Page
			$(".bg").hide();
			$(".parent1").show();
			$(".na").click(()=>
{
$(".bg").show();
			$(".parent1").hide();
})

if(response.Title !== null && response.Title !== undefined){
					$(".title1").text(response.Title);
				} else{
					console.log("No title found");
				}
				if(response.Year !== null && response.Year !== undefined){
					$(".year").text("(")
					$(".year").append(response.Year);
					$(".year").append(")")
				} else{
					console.log("No year found");
				}
				if(response.Poster !== null && response.Poster !== undefined){
					$(".poster").attr("src",response.Poster);
				} else{
					console.log("No poster found");
				}
				if(response.Type !== null && response.Type !== undefined){
					$(".type").text(response.Type);
				} else{
					console.log("No type found");
				}
				if(response.Plot !== null && response.Plot !== undefined){
                    $(".plot").text();
					$(".plot").append(response.Plot);
					
				} else{
					console.log("No Plot found");
				}
				if(response.Rated !== null && response.Rated !== undefined){
					
					$(".rate").text(response.Rated);
					
				} else{
					console.log("No ratings  found");
				}
					if(response.Runtime !== null && response.Runtime !== undefined){
					$(".runtime").text("|")
					$(".runtime").append(response.Runtime);
					$(".runtime").append("|")
				} else{
					console.log("No ratings  found");
				}
if(response.Genre !== null && response.Genre !== undefined){
				$(".genre").text("|")
					$(".genre").append(response.Genre);
					$(".genre").append("|");
				
				} else{
					console.log("No genre found");
				}
				if(response.Released !== null && response.Released !== undefined){
				
					$(".release").text(response.Released);
				
				} else{
					console.log("No release date found");
				}
					if(response.Country !== null && response.Country !== undefined){
				
					$(".country").text("|");
					$(".country").append(response.Country);
					$(".country").append("|");
				
				} else{
					console.log("No release date found");
				}
		
if(response.imdbRating!==null && response.imdbRating!= undefined){
	$(".ImdbRating").text("imdbRating:-");
	$(".ImdbRating").append(response.imdbRating);
}
else{
	console.log("not found");
}
if(response.Metascore!==null && response.Metascore!= undefined){
	$(".metascore").text("Metascore:-");
	$(".metascore").append(response.Metascore);
}
else{
	console.log("not found");
}
if(response.Metascore!==null && response.Metascore!= undefined){
	$(".ImdbVotes").text("imdbVotes:-");
	$(".ImdbVotes").append(response.imdbVotes);
}
else{
	console.log("ImbdVotesnot found");
}
if(response.Ratings!==null && response.Ratings!= undefined){
	$(".ratings").text("Ratings:-");
	for(var i = 0; i < response.Ratings.length; i++)
	{
	$(".ratings").append(response.Ratings[i].Source);
		$(".ratings").append(" : ");
	$(".ratings").append(response.Ratings[i].Value);
  $(".ratings").append(" , ")
}
}
else{
	console.log("Ratings not found");
}
if(response.Director!==null && response.Director!= undefined){
	$(".director").text("Director:-");
	$(".director").append(response.Director);
}
else{
	console.log("ImbdVotesnot found");
}
if(response.Writer!==null && response.Writer!= undefined){
	$(".writer").text("Writer:-");
	$(".writer").append(response.Writer);
}
else{
	console.log(" Writer not found");
}
if(response.Actor!==null && response.Actor!= undefined){
	$(".actor").text("Actor:-");
	$(".actor").append(response.Actor);
}
else{
	console.log(" Actor not found");
}
if(response.DVD!==null && response.DVD!= undefined){
	$(".dvd").text("DVD:-");
	$(".dvd").append(response.DVD);
}
else{
	console.log(" DVD not found");
}
if(response.BoxOffice!==null && response.BoxOffice!= undefined){
	$(".boxoffice").text("BoxOffice:-");
	$(".boxoffice").append(response.BoxOffice);
}
else{
	console.log(" BoxOffice not found");
}if(response.Awards!==null && response.Awards!= undefined){
	$(".awards").text("Awards:-");
	$(".awards").append(response.Awards);
}
else{
	console.log(" Writer not found");
}
if(response.Production!==null && response.Production!= undefined){
	$(".production").text("Production:-");
	$(".production").append(response.Production);
}
else{
	console.log(" Production not found");
}
if(response.Production!==null && response.Production!= undefined){
	$(".website").text("Website:-");
	$(".website").append(response.Website);
}
else{
	console.log(" Website not found");
}



}}
});
}



