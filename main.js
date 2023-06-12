// This is a competition. In this competition, there are three winners. The first will get the gold medal, the second will get silver, and the third, bronze.(use filter method)

 let winners = ["Anna", "Beth", "Cara"]

// Output :"Gold winner: Anna, Silver Winner: Beth, Bronze Winner: Cara"


let result= winners.filter(function(e,index,a){
	if (index==0){
		document.write("Gold winner : "+e)
		document.write("<br>")
	}
	else if(index==1){
		document.write("Silver winner : "+e )
		document.write("<br>")
	 }
	 else if(index==2){
		document.write("Bronze winner : "+e )
		document.write("<br>")
	 }
})


