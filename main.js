const myForm = document.querySelector('#my_form');
const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const msg = document.querySelector('#msg');
const userList = document.querySelector('.userList');


myForm.addEventListener('submit', onSubmit);

	function onSubmit(e){
		e.preventDefault();
		
		if(inputName.value === '' || inputEmail.value === ''){
			msg.classList.add('error');
			msg.innerHTML = 'Please enter all fields';
			setTimeout(() =>msg.remove(), 3000);
		}else{
			const li = document.createElement('li');
			li.appendChild(document.createTextNode(`Name = ${inputName.value} : Email = ${inputEmail.value}`));
			userList.appendChild(li);

			//clear fields
			inputName.value= '';
			inputEmail.value =''
		}
	};
