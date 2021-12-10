module.exports = {
    icon: "⚡",
    title: "How to actually use it ?",
    content: `here is an example code that is being used to export this example readme file in the fist place. 
          
          
          const v_db = require('v_db');
          
          v_db.type.new('books'); // returns true if it created new type or false if it already exists or fails
          v_db.type.new('links');
          
          v_db.item.new('books', {name: 'book title text' , description : 'demo' }); 
          v_db.item.new('links', {name: 'v-core9' , path : 'https://v-core9.com/' });
          
          v_db.item.new('books', { id: 'sample_id', name: 'book title text' , description : 'demo' }); //Adding ID will try to use it as an ID
    
          v_db.install() // trigger installation process 
          v_db.data_size() // returns the size of the data 
          v_db.purge_data() // removes all data from the database
    `
  };