# **๐งพ V_Database - README.md**    
 

 **Description**: _Simple way to make data available in your website/application for a single database._  
  
>---  
>### ๐ง **WARNING: APPLICATION STILL IN ๐งฑ [ALPHA] **  ๐ง  
>---   
## **๐ Install and Setting up**    

Currently only through the github repo can be installed...
    Run these commands in sequence to install:

          // Install the dependency
          npm i v_database --save
          // Start node
          node
          // Load it into the console
          const v_db = require('.');
          // Trigger the install
          await v_db.install();

    Soon... ๐    

---
## **โก How to actually use it ?**    

here is an example code that is being used to export this example readme file in the fist place.


          const v_database = require('v_database');

          v_database.type.new('books'); // returns true if it created new type or false if it already exists or fails
          v_database.type.new('links');

          v_database.item.new('books', {name: 'book title text' , description : 'demo' });
          v_database.item.new('links', {name: 'v-core9' , path : 'https://v-core9.com/' });

          v_database.item.new('books', { id: 'sample_id', name: 'book title text' , description : 'demo' }); //Adding ID will try to use it as an ID

          v_database.install() // trigger installation process
          v_database.data_size() // returns the size of the data
          v_database.purge_data() // removes all data from the database
        

---
## **๐ Project Folders Structure Info**    

Look into system folder for more info about project structure.

    These are some important folders that are used when generating this document:
      ๐ __tests__ /
      ๐ __tests__ / v_database /
      ๐ __tests__ / v_lidator /

      ๐ _tDdata_ /
      ๐ _tDdata_ / _test-data /

      ๐ $_HELP_$ /
      ๐ $_HELP_$ / readme /

      ๐ v_database /
      ๐ v_database / config /
      ๐ v_database / config / version /
      ๐ v_database / helpers /
      ๐ v_database / info /
      ๐ v_database / item /
      ๐ v_database / modules /
      ๐ v_database / type /

      ๐ v_lidator /
      ๐ v_lidator / src /
      ๐ v_lidator / src / helpers /
      ๐ v_lidator / src / templates /
      ๐ v_lidator / src / user /         

---
## **โ Tests and Coverage with Jest**    

![Test and Coverage with Jest](coverage.png)    

---
>### ๐ป **WARRNING: GENERATED FILE NOTICE**  ๐ป 
> โ Any Edits Done To Generated Files Will Be Overwritten Next Time These Files Get Re-Generated!  
>  
> _Made ๐ using [v_scrolls]("https://github.com/V-core9/v_scrolls")_      
> Last Updated:  2021/12/19 13:40:26 
