audio = new Audio("../alarma/alar.mp3");
		function Empezar(){
			audio.pause();
			audio.currentTime=0;

			$('#Tiempo').timer('remove');
			$('#Tiempo').timer({
				countdown:true,
			duration:$('#h').val()+"h"+$('#m').val()+"m"+$('#s').val()+"s",
				callback:function(){
					audio.addEventListener('ended',function(){
						this.currentTime=0;
						this.play();
					},false);
					audio.play();
					$('#Tiempo').css('color', 'white');
					$('#numm').css('background-color', 'rgb(226, 5, 36)');
				},
				format:'%H:%M:%S'

			});

		}

		function Pausa(){
			$('#Tiempo').timer('pause');
		}
		function Renaudar(){
			$('#Tiempo').timer('resume');
		}
		function Pausa_Alarma(){
			audio.pause();
			$('#numm').css('background-color', 'white');
			$('#Tiempo').css('color', 'black');
			
		}

		$(document).keydown(function (tecla) {
			if (tecla.keyCode == 67) {
			
				audio.pause();
				audio.currentTime=0;

				$('#Tiempo').timer('remove');
				$('#Tiempo').timer({
					countdown:true,
				duration:$('#h').val()+"h"+$('#m').val()+"m"+$('#s').val()+"s",
					callback:function(){
						audio.addEventListener('ended',function(){
							this.currentTime=0;
							this.play();
						},false);
						audio.play();
						$('#Tiempo').css('color', 'white');
						$('#numm').css('background-color', 'rgb(226, 5, 36)');
					},
					format:'%H:%M:%S'

				});
			}

			
			
		});

		$(document).keydown(function (tecla) {
			
			if (tecla.keyCode == 32) {
			Pausa_Alarma();
			}
		});

		$(document).keydown(function (tecla) {
			
			if (tecla.keyCode == 80) {
			Pausa();
			}
		});
		
		$(document).keydown(function (tecla) {
			
			if (tecla.keyCode == 82) {
			Renaudar();
			}
		});