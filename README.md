This project is for the development of a version of noone's Fatty Text Adventure Game. This is designed for VS Code with the T3LT and twee3-sugarcube2 extensions.   

# Game Startup 
The game is the html file within the Output folder. 
When the twee files are all compiled together, they are pushed into one html file so that they can run on any browser easily.  

# AI Chat and Ambient Text Generation
* When you open the game, create a character to access the "AI settings" button.
* In this menu, you can set the target URL, model and API key for whatever text generation service you want to use.
* The default settings are set up for using the gpt-3.5-turbo model from OpenAI. This is a cheap and effective model, and OpenAI gives you $5 of credit on any new accounts. I used about 150,000 tokens when testing this and it came out to $0.26, so $5 will get you a lot of requests here.
![image](https://github.com/FullnRound/ftag-public/assets/156125949/8c3787e0-bd05-4ed1-ab09-d08bc0157ed8)

* After setting up your connection, you can adjust the output settings of any requests with the "Settings" and "Additional Parameters" sections. (The default values should be fine if you don't want to bother messing with these.)
* The "Generate Ambient Text" setting will generate random scene text when resting in the town, this is the only place it is active at the moment.

* (Currently the only character that chat interaction is enabled for is Elara, who you find when you first enter the swamp. The swamp is very unfinished btw) 


# Compiling the Output/main.html File
* If you have added any new .tw files, Run the twList.js script to get an output list of all .tw files. This list will be placed into twFilesList.txt.  
* Copy the list onto the command below, replacing everything after ```tweego -o Output/main.html```  
* Run the Compile command from the top level folder of the project in the command line  
* Open Output/main.html in a browser to run the current project  

This command below will run a basic compile and output to main.html within the Output folder  

````tweego -o Output/main.html Modules\EnemyAi\enemyBeach.tw Modules\EnemyAi\enemyCentral.tw Modules\EnemyAi\enemyForest.tw Modules\EnemyAi\enemyGrasslands.tw Modules\EnemyAi\enemyHills.tw Modules\EnemyAi\enemyJungle.tw Modules\EnemyAi\enemyList.tw Modules\EnemyAi\enemyMountian.tw Modules\Mods\modsMain.tw Modules\Story\Beach\beachMain.tw Modules\Story\Beach\mageGuild.tw Modules\Story\CentralTown\centralTownMain.tw Modules\Story\CentralTown\hospital.tw Modules\Story\Farm\farmMain.tw Modules\Story\Forest\forestMain.tw Modules\Story\Forest\gingerbreadHouse.tw Modules\Story\Grasslands\grasslandsMain.tw Modules\Story\Hills\hillsMain.tw Modules\Story\IslandTown\islandTownMain.tw Modules\Story\Jungle\jungleMain.tw Modules\Story\Mountain\mountainMain.tw Modules\Story\Species.tw Modules\Story\Story.tw Modules\Story\WestTown\westTownMain.tw Modules\StoryData\StoryData.tw Modules\StoryData\StoryTitle.tw Modules\StoryJavaScript\StoryScript.tw Modules\StyleSheet\StoryStylesheet.tw Modules\Widgets\widgets.tw Modules\GPT\OpenAI.tw Modules\Story\Swamp\swampMain.tw````  



// Use the "--watch" option to start up a server that watches for file changes and then recompiles. That way, you can keep the game open and just refresh to get the new changes without manually compiling them.  

```tweego -o main.html (All .tw files here) --watch```  

# Rescources

Search for mistakes in the mass edit tag system  

\{"position"[^}]*\}.  

