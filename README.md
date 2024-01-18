This project is for the development of a version of noone's Fatty Text Adventure Game. This is designed for VS Code with the T3LT and twee3-sugarcube2 extensions.   
The game is the html file within the Output folder. When the twee files are all compiled together, they are pushed into one html file so that they can run on any browser easily.  

# Startup 

* If you have added any new .tw files, Run the twList.js script to get an output list of all .tw files. This list will be placed into twFilesList.txt.  
* Copy the list onto the command below, replacing everything after ```tweego -o Output/main.html```  
* Run the Compile command from the top level folder of the project in the command line  
* Open Output/main.html in a browser to run the current project  

# Compile

This will run a basic compile and output to main.html within the Output folder  

````tweego -o Output/main.html Modules\EnemyAi\enemyBeach.tw Modules\EnemyAi\enemyCentral.tw Modules\EnemyAi\enemyForest.tw Modules\EnemyAi\enemyGrasslands.tw Modules\EnemyAi\enemyHills.tw Modules\EnemyAi\enemyJungle.tw Modules\EnemyAi\enemyList.tw Modules\EnemyAi\enemyMountian.tw Modules\Mods\modsMain.tw Modules\Story\Beach\beachMain.tw Modules\Story\Beach\mageGuild.tw Modules\Story\CentralTown\centralTownMain.tw Modules\Story\CentralTown\hospital.tw Modules\Story\Farm\farmMain.tw Modules\Story\Forest\forestMain.tw Modules\Story\Forest\gingerbreadHouse.tw Modules\Story\Grasslands\grasslandsMain.tw Modules\Story\Hills\hillsMain.tw Modules\Story\IslandTown\islandTownMain.tw Modules\Story\Jungle\jungleMain.tw Modules\Story\Mountain\mountainMain.tw Modules\Story\Species.tw Modules\Story\Story.tw Modules\Story\WestTown\westTownMain.tw Modules\StoryData\StoryData.tw Modules\StoryData\StoryTitle.tw Modules\StoryJavaScript\StoryScript.tw Modules\StyleSheet\StoryStylesheet.tw Modules\Widgets\widgets.tw Modules\GPT\OpenAI.tw Modules\Story\Swamp\swampMain.tw````  



// Use the "--watch" option to start up a server that watches for file changes and then recompiles. That way, you can keep the game open and just refresh to get the new changes without manually compiling them.  

```tweego -o main.html (All .tw files here) --watch```  

# Rescources

Search for mistakes in the mass edit tag system  

\{"position"[^}]*\}.  

