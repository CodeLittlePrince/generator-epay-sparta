const path = require('path')
const fs = require('fs')

run()

function run() {
  replaceToOnlineEnv()
  replaceToUrlCheck()
  increaseVersion()
}

/**
 * 将环境强制切换至线上-prod
 */
function replaceToOnlineEnv() {
  replaceFileContent(
    'src/config/env.js',
    /(ENV\s?=\s?)'(.+)?'/g,
    '$1\'prod\'',
  )
}

/**
 * 将urlCheck强制切换为true
 */
function replaceToUrlCheck() {
  replaceFileContent(
    'project.config.json',
    /("urlCheck"\s?:\s?)(.+)?,/g,
    '$1true,',
  )
}

/**
 * 将环境强制切换至线上-prod
 */
function increaseVersion() {
  const filePath = 'src/config/version.js'
  const fileContent = readFileSync(filePath)
  const date = new Date()
  // 年最后两位 + 月 + 日 + 时 + 分 + 秒
  const time = `${(`${date.getFullYear()}`).slice(-2)}${to2Digits(date.getMonth() + 1)}${to2Digits(date.getDate())}${to2Digits(date.getHours())}${to2Digits(date.getMinutes())}${to2Digits(date.getHours())}`
  const newFileContent = fileContent.replace(/(\d\.\d.)\d/g, (match, $1) => $1 + (time))
  writeFileSync(filePath, newFileContent)
}

/**
 * 替换文件内容
 */
function replaceFileContent(filePath, regexp, newSubstr) {
  const fileContent = readFileSync(filePath)
  const newFileContent = fileContent.replace(regexp, newSubstr)
  writeFileSync(filePath, newFileContent)
}

function readFileSync(filePath) {
  return fs.readFileSync(path.resolve(filePath), 'utf-8')
}

function writeFileSync(filePath, newFileContent) {
  fs.writeFileSync(path.resolve(filePath), newFileContent, 'utf-8')
}

function to2Digits(num) {
  for (let len = (`${num}`).length; len < 2; len = num.length) {
    num = `0${num}`;
  }
  return num;
}
