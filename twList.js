const fs = require('fs');
const path = require('path');

// This finds all .tw files within the Modules folder
function findTwFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            findTwFiles(filePath, fileList);
        } else if (file.endsWith('.tw')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// This takes the list of files and outputs them to twFilesList.txt
const directoryPath = 'Modules/';
const twFiles = findTwFiles(directoryPath);
fs.writeFileSync('twFilesList.txt', twFiles.join(' '), 'utf8');
