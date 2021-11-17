const v_lidator = {
  email: require('../input_templates/_email'),
  username: require('../input_templates/_username'),
  name: require('../input_templates/_name'),
  password: require('../input_templates/_password'),
};

console.log(v_lidator.email('slavko.vuletic92@gmail.comslavko.vuletic92@gmail.com') === false);
console.log(v_lidator.email('slavko.vuletic92@gmail.com') === true);
console.log(v_lidator.email('@slavko@gmail.web') === false);
console.log(v_lidator.email('slavko@.dev') === false);
console.log(v_lidator.email('slavko@slavko@slavko.slavko') === false);
console.log(v_lidator.email('11@v-core9.com') === true);
console.log(v_lidator.email('22gmail!!ui.dev') === false);
console.log(v_lidator.email('22gmail@ui.dev') === true);



console.log(v_lidator.username('.Asdf_123') === false);
console.log(v_lidator.username('_Asdf_123') === false);
console.log(v_lidator.username('Asdf _123') === false);
console.log(v_lidator.username('Asdf@123') === false);
console.log(v_lidator.username('Asdf_123') === true);
console.log(v_lidator.username('Asdf.123') === true);

console.log(v_lidator.name('.Asdf_123') === false);
console.log(v_lidator.name('_Asdf_123') === false);
console.log(v_lidator.name('Asdf _123') === true);
console.log(v_lidator.name('Asdf@123') === false);
console.log(v_lidator.name('Asdf_123') === true);
console.log(v_lidator.name('Asdf.123') === true);


console.log(v_lidator.password('.Asdf_123') === true);
console.log(v_lidator.password('_Asdf_123') === true);
console.log(v_lidator.password('Asdf _123') === false);
console.log(v_lidator.password('Asdf@123') === true);
console.log(v_lidator.password('Asdf_123...!@#$%^') === true);
console.log(v_lidator.password('Asdf.123') === true);
