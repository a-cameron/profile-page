let heading = document.querySelector('h1');

let profilePicture;

heading.addEventListener('mouseover', function() {
   
  profilePicture = document.createElement('img');
      
      profilePicture.setAttribute('src', 'images/me-small.jpg')
      profilePicture.setAttribute('alt', 'Image');
      
      profilePicture.classList.add('profile');
      
      heading.appendChild( profilePicture );
      
      console.log(profilePicture);
  
});

heading.addEventListener('mouseout', function() {
  
  profilePicture.remove();
  
})