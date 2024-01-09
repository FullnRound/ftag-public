const fs = require('fs');
const path = require('path');

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

// Replace 'your_directory_path' with the path of your target directory
const directoryPath = 'Modules/';
const twFiles = findTwFiles(directoryPath);
fs.writeFileSync('twFilesList.txt', twFiles.join(' '), 'utf8');
