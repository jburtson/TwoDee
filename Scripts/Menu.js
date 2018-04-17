
// True if the menu is open
   var MenuOpen : boolean = false;

   function Update() {
       // Check whether the menu button was released 
       if (Input.GetButtonUp("MenuOpen")) {
           MenuOpen = !MenuOpen;
       }
   } 
   
   // Called each time the Gui needs to be drawn
   function OnGUI () {
       if (!MenuOpen) {
           DrawHUD();
       } else {
           DrawMenu();
       }
   }

   function DrawHUD() {
       
       // Get the health from the player 
       var player = GameObject.Find("Player");
       var health = player.GetComponent(PlayerControl).health;
       
       // Position 
       var left = 10;
       var top = 10;
       var width = 100;
       var height = 25;
       
       // Make a background box 
       GUI.Box (Rect (left, top, width, height), "Health: " + parseInt(health));
   }
   
   // Draw the menu 
   function DrawMenu() {
       var centerX = Screen.width/2;
       var centerY = Screen.height/2;
       
       // location of the menu 
       var menuLeft = centerX - 50;
       var menuTop = centerY - 50;
       var menuWidth = 100;
       var menuHeight = 100;
       
       var buttonX = menuLeft + 10;
       var buttonWidth = 80;
       var buttonHeight = 20;
       var buttonDist = 25; // distance between each button 
       
       // Make a background box 
       GUI.Box (Rect (menuLeft, menuTop,menuWidth,menuHeight), "Menu");
       
       // Start / Resume 
       if (GUI.Button (Rect (buttonX,menuTop + 1 * buttonDist,buttonWidth,buttonHeight), "Resume")) {
           MenuOpen = false;
       }
       
       // Restart 
       if (GUI.Button (Rect (buttonX,menuTop + 2 * buttonDist,buttonWidth,buttonHeight), "Restart")) {
           Application.LoadLevel(Application.loadedLevel);
       }
       
       // Quit (Only works in the Build. Does not work in the eidtor!) 
       if (GUI.Button (Rect (buttonX,menuTop + 3 * buttonDist,buttonWidth,buttonHeight), "Quit")) {
           Application.Quit();
       }
   }
