	let modal = document.getElementById("myModal");
	let btn = document.getElementById("myBtn");

	let span = document.getElementsByClassName("close")[0];

	function getSelectedPill(e) {
	  e.preventDefault();
	  const selectedPill = e.target.alt.split(" ")[0];
	  let message,submitMsg,submitColor;
	  if(selectedPill ==='red') {
	  	 message = "Taking the red pill will reveal Rafiq's real portfolio please consume to see more";
	  	 submitMsg = 'Consume Red Pill';
	  	 submitColor = '#f14e4e';
	  } else {
	  	 message = "Taking the blue pill will lead you away from this site and you will forget you were ever here";
	  	 submitMsg = "Consume Blue Pill";
	  	 submitColor = "#0096FF";
	  }
	  showModal(message,submitMsg,submitColor);
	}

	function showModal(message,submitMsg,submitColor){
		document.querySelector('#modal-text').innerHTML = message;
		document.querySelector('#modal-btn').innerHTML = submitMsg;
		document.querySelector('#modal-btn').style.backgroundColor = submitColor;
		modal.style.display = 'block';
		

		window.onclick = function(event) {
	 	 if (event.target == modal) {
	    		modal.style.display = "none";
	  		}
		};
		window.ontouchstart = function(event) {
	 	 if (event.target == modal) {
	    		modal.style.display = "none";
	  		}
		};
	}

	document.querySelector('#close-btn').addEventListener('touchStart', closeModal, false)
	document.querySelector('#close-btn').addEventListener('click', closeModal, false)
	document.querySelector('#modal-text').addEventListener('touchStart', closeModal, false)
	document.querySelector('#modal-text').addEventListener('click', closeModal, false)
	document.querySelector('#red-pill').addEventListener("touchStart", getSelectedPill, false);
	document.querySelector('#blue-pill').addEventListener("touchStart", getSelectedPill, false);
	document.querySelector('#red-pill').addEventListener("click", getSelectedPill, false);
	document.querySelector('#blue-pill').addEventListener("click", getSelectedPill, false);

	function closeModal() {
		console.log('closed')
		modal.style.display = "none";
	}