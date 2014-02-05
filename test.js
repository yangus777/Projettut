/*$(function() {
			$("#slider").slider({
				value:0,
				min: 0,
				max: 500,
				step: 10,
				slide: function( event, ui ) {
					$("#amount").val( "" + ui.value );
				}
			});
			$("#amount").val("" + $("#slider").slider("value"));
		});
*/

	
$(function() {
			$("#buttonDuree").click(function() {
				var duree = Number(document.getElementById("duree").value);
				var cliffduree = Number(document.getElementById("cliffduree").value)
				var position = (cliffduree * 100)/(duree);
				/*$("#amount").val(Math.round(position));*/
				alert(duree);
				alert(cliffduree);
				alert(position);
			$("#diablo").css('left',position+'%');

			});

$(function(){
		if("#amount"<0){
		$("#ehumour").addClass("hide")
		}
		else{};

});
		});