
## 1. Run the twList.js script to get an output list of all .tw files. This list will be placed into twFilesList.txt
## 2. Copy the list onto the command below, replacing everything after "tweego -o Output/main.html "
## 3. Run the command from the top level folder of the project



// Basic compile output to main.html
tweego -o Output/main.html Modules\EnemyAi\enemyBeach.tw Modules\EnemyAi\enemyCentral.tw Modules\EnemyAi\enemyForest.tw Modules\EnemyAi\enemyGrasslands.tw Modules\EnemyAi\enemyHills.tw Modules\EnemyAi\enemyJungle.tw Modules\EnemyAi\enemyList.tw Modules\EnemyAi\enemyMountian.tw Modules\Mods\modsMain.tw Modules\Story\Beach\beachMain.tw Modules\Story\Beach\mageGuild.tw Modules\Story\CentralTown\centralTownMain.tw Modules\Story\CentralTown\hospital.tw Modules\Story\Farm\farmMain.tw Modules\Story\Forest\forestMain.tw Modules\Story\Forest\gingerbreadHouse.tw Modules\Story\Grasslands\grasslandsMain.tw Modules\Story\Hills\hillsMain.tw Modules\Story\IslandTown\islandTownMain.tw Modules\Story\Jungle\jungleMain.tw Modules\Story\Mountain\mountainMain.tw Modules\Story\Species.tw Modules\Story\Story.tw Modules\Story\WestTown\westTownMain.tw Modules\StoryData\StoryData.tw Modules\StoryData\StoryTitle.tw Modules\StoryJavaScript\StoryScript.tw Modules\StyleSheet\StoryStylesheet.tw Modules\Widgets\widgets.tw Modules\GPT\OpenAI.tw Modules\Story\Swamp\swampMain.tw



// Will start up a server that watches for file changes and then recompiles.
tweego -o main.html twee_v3_FTAG.twee --watch



Search for mistakes in the mass edit tag system
\{"position"[^}]*\}.


Display icons from widgets
<<case "aeroPearl">>[img[icon/aeroPearl.png]]
<<case "armor">>[img[icon/itemArmorIcon.png]]
<<case "attack">>[img[icon/attackIcon.png]]
<<case "appearance">>[img[icon/appearanceIcon.png]]
<<case "beach">>[img[icon/beachIcon.png]]
<<case "building">>[img[icon/buildingIcon.png]]
<<case "button">>[img[icon/buttonIcon.png]]
<<case "church">>[img[icon/churchIcon.png]]
<<case "compass">>[img[icon/surroundingsIcon.png]]
<<case "darkMagic">>[img[icon/darkMagicIcon.png]]
<<case "denseTopaz">>[img[icon/denseTopaz.png]]
<<case "devour">>[img[icon/devourIcon.png]]
<<case "door">>[img[icon/leaveIcon.png]]
<<case "dollar">>[img[icon/dollar sign.png]]
<<case "down">>[img[icon/downIcon.png]]
<<case "drink">>[img[icon/itemDrinkIcon.png]]
<<case "fenceGate">>[img[icon/fenceGateIcon.png]]
<<case "fence">>[img[icon/fenceIcon.png]]
<<case "food">>[img[icon/itemFoodIcon.png]]
<<case "forest">>[img[icon/forestIcon.png]]
<<case "gate">>[img[icon/gateIcon.png]]
<<case "gold">>[img[icon/storeIcon.png]]
<<case "grasslands">>[img[icon/grasslandsIcon.png]]
<<case "greyMagic">>[img[icon/greyMagicIcon.png]]
<<case "healthPotion">>[img[icon/itemHealthPotionIcon.png]]
<<case "hills">>[img[icon/hillsIcon.png]]
<<case "hospital">>[img[icon/hospitalIcon.png]]
<<case "house">>[img[icon/houseIcon.png]]
<<case "inn">>[img[icon/innIcon.png]]
<<case "inventory">>[img[icon/inventoryIcon.png]]
<<case "jungle">>[img[icon/forestIcon.png]]
<<case "leave">>[img[icon/leaveIcon.png]]
<<case "left">>[img[icon/returnIcon.png]]
<<case "mage">>[img[icon/mageIcon.png]]
<<case "manaPotion">>[img[icon/itemManaPotionIcon.png]]
<<case "mountain">>[img[icon/mountainIcon.png]]
<<case "next">>[img[icon/nextIcon.png]]
<<case "no">>[img[icon/noIcon.png]]
<<case "ocean">>[img[icon/oceanIcon.png]]
<<case "other">>[img[icon/itemOtherIcon.png]]
<<case "pants">>[img[icon/pantsIcon.png]]
<<case "quest">>[img[icon/appearanceIcon.png]]
<<case "restaurant">>[img[icon/restaurantIcon.png]]
<<case "rest">>[img[icon/restIcon.png]]
<<case "return">>[img[icon/returnIcon.png]]
<<case "right">>[img[icon/nextIcon.png]]
<<case "road">>[img[icon/roadIcon.png]]
<<case "run">>[img[icon/runIcon.png]]
<<case "shirt">>[img[icon/itemTopIcon.png]]
<<case "spectrumGem">>[img[icon/spectrumGem.png]]
<<case "spells">>[img[icon/spellsIcon.png]]
<<case "store">>[img[icon/storeIcon.png]]
<<case "surrender">>[img[icon/surrenderIcon.png]]
<<case "tailor">>[img[icon/tailorIcon.png]]
<<case "talk">>[img[icon/appearanceIcon.png]]
<<case "time">>[img[icon/waitIcon.png]]
<<case "trainingGrounds">>[img[icon/trainingGroundsIcon.png]]
<<case "up">>[img[icon/upIcon.png]]
<<case "voidOnyx">>[img[icon/voidOnyx.png]]
<<case "wait">>[img[icon/waitIcon.png]]
<<case "wall">>[img[icon/wallIcon.png]]
<<case "weapon">>[img[icon/itemWeaponIcon.png]]
<<case "whiteMagic">>[img[icon/whiteMagicIcon.png]]
<<case "yes">>[img[icon/yesIcon.png]]



<<if _fatness <= 25>><<set $bodyFatTier = "malnourished">>
<<elseif _fatness <= 75>><<set $bodyFatTier = "healthy">>
<<elseif _fatness <= 150>><<set $bodyFatTier = "robust">>
<<elseif _fatness <= 250>><<set $bodyFatTier = "overweight">>
<<elseif _fatness <= 400>><<set $bodyFatTier = "chubby">>
<<elseif _fatness <= 600>><<set $bodyFatTier = "corpulent">>
<<elseif _fatness <= 900>><<set $bodyFatTier = "obese">>
<<elseif _fatness <= 1300>><<set $bodyFatTier = "morbidly obese">>
<<elseif _fatness <= 1800>><<set $bodyFatTier = "massive">>
<<elseif _fatness <= 2300>><<set $bodyFatTier = "spherical">>
<<elseif _fatness <= 3000>><<set $bodyFatTier = "mountainous">>
<<elseif _fatness > 3000>><<set $bodyFatTier = "colossal">>
<</if>>

<<set _strTier = ($str + $str + $agi + $end)/4>>
<<if _strTier <= 50>><<set $strengthTier = "regular">>
<<elseif _strTier <= 150>><<set $strengthTier = "athletic">>
<<elseif _strTier <= 250>><<set $strengthTier = "muscular">>
<<elseif _strTier > 250>><<set $strengthTier = "bodybuilder">>
<</if>>
