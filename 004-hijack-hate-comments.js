function dismissVovel(str) {
  return str.replace(/[aeiou]/gi, '');
}
 
// dismissVovel('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, porro?')

// dismissVovel('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat quod enim atque officiis molestias dicta, minima quae doloremque laudantium.')