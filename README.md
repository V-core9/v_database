# **🧾 V_Scrolls - README.md**    
 

 **Description**: _Basically generates MD files...so a Markdown generator...pack data where ever you want and just use this to organize it how file will be printed._  
  
>---  
>### 🚧 **WARNING: APPLICATION STILL IN 🧱 [ALPHA] **  🚧  
>---   
## **💭 Short Description**    

Made to help out hunting ghost bugs in front and backend.
                  Currently in state of organization of files and building up the idea what else to include    

---
## **🚕 Install and Setting up**    

Currently only through the github repo can be installed...
    But soon we will have something like:
          
          npm install v_db --save
          
    Soon... 🚀    

---
## **⚡ How to actually use it ?**    

here is an example code that is being used to export this example readme file in the fist place. 
          
          
          const v_db = require('v_db');
          
          v_db.type.new('books'); // returns true if it created new type or false if it already exists or fails
          v_db.type.new('links');
          
          v_db.item.new('books', {name: 'book title text' , description : 'demo' }); 
          v_db.item.new('links', {name: 'v-core9' , path : 'https://v-core9.com/' });
          
          v_db.item.new('books', { id: 'sample_id', name: 'book title text' , description : 'demo' }); //Adding ID will try to use it as an ID
    
          v_db.install() // trigger installation process 
          v_db.data_size() // returns the size of the data 
          v_db.purge_data() // removes all data from the database
        

---
## **📁 Project Folders Structure Info**    

Look into system folder for more info about project structure. 
    
    These are some important folders that are used when generating this document:
      📁 __tests__ /
      📁 __tests__ / v_db /
      📁 __tests__ / v_lidator /

      📁 _tDdata_ / 
      📁 _tDdata_ / _test-data / 

      📁 $_HELP_$ / 
      📁 $_HELP_$ / readme / 

      📁 v_db / 
      📁 v_db / config / 
      📁 v_db / config / version / 
      📁 v_db / helpers / 
      📁 v_db / info / 
      📁 v_db / item / 
      📁 v_db / modules / 
      📁 v_db / type / 
      
      📁 v_lidator / 
      📁 v_lidator / src /     
      📁 v_lidator / src / helpers /
      📁 v_lidator / src / templates /
      📁 v_lidator / src / user /         

---
>### 🔻 **WARRNING: GENERATED FILE NOTICE**  🔻 
> ⛔ Any Edits Done To Generated Files Will Be Overwritten Next Time These Files Get Re-Generated!  
>  
> _Made 💖 using [v_scrolls]("https://github.com/V-core9/v_scrolls")_      
> Last Updated:  2021/12/10 17:06:33 
