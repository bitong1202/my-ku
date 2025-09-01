const fs = require('fs');
const path = require('path');

// 创建 public/photos 目录
const photosDir = path.join(__dirname, 'public', 'photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
  console.log('Created public/photos directory');
}

// 复制图片文件
const sourceDir = path.join(__dirname, 'photos');
const files = ['xishuihu.jpg', '26f367e89ea76a6a6eed82c0fd3f9a8.jpg'];

files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(photosDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to public/photos/`);
  } else {
    console.log(`Warning: ${file} not found in photos directory`);
  }
});

console.log('Setup completed!');
