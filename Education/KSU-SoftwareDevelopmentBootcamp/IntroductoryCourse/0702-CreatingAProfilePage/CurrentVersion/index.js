let content = document.querySelector('.js-generated.content');

let dogName = document.createElement('h1');
dogName.append('Rizzo');
dogName.setAttribute('class', 'dog-name');
content.append(dogName);

let dogContent = document.createElement('div');
dogContent.setAttribute('class', 'dog-content');
content.append(dogContent);

let dogImage = document.createElement('img');
dogImage.setAttribute('class', 'dog-image');
dogImage.setAttribute('src', './assets/rizzo.jpg');
dogContent.append(dogImage);

let dogDetails = document.createElement('div');
dogDetails.setAttribute('class', 'dog-details');
dogContent.append(dogDetails);

let dogDescription = document.createElement('h3');
dogDescription.textContent = 'Description:';
dogDetails.append(dogDescription);

let dogParagraph = document.createElement('p');
dogParagraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.';
dogDetails.append(dogParagraph);

let dogFeedingTimes = document.createElement('h3');
dogFeedingTimes.textContent = 'Feeding Times:';
dogDetails.append(dogFeedingTimes);

let dogUnorderedList = document.createElement('ul');
dogDetails.append(dogUnorderedList);

let dogUL1 = document.createElement('li');
dogUL1.textContent = '9:00 am';
dogUnorderedList.append(dogUL1);

let dogUL2 = document.createElement('li');
dogUL2.textContent = '12:00 pm';
dogUnorderedList.append(dogUL2);

let dogUL3 = document.createElement('li');
dogUL3.textContent = '5:00 pm';
dogUnorderedList.append(dogUL3);