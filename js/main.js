const cardEl = document.querySelector('.card');

/* Nullish coalescing operator (??) */
const id = '#3429';
const titleId = id ?? '';

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = titleId;

/* Optional chaining operator (?.) */
const statusItems = {
	ethereumAmount: '0.041 ETH',
	remainingTime: '3 days left',
	createdDate: new Date()
};
let createdDate = statusItems?.createdDate;
console.log(createdDate);
