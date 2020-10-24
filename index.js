'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
        name: chalk.white(`                                                                                                    
          ,dPYb,                 ,dPYb,                                  ,dPYb,     
          IP''Yb                 IP''Yb                                  IP''Yb     
          I8  8I                 I8  8I                             gg   I8  8I     
          I8  8'                 I8  8'                             ""   I8  8'     
  ,g,     I8 dPgg,     ,gggg,gg  I8 dPgg,      ,gggg,    ,gggg,gg   gg   I8 dP      
 ,8'8,    I8dP" "8I   dP"  "Y8I  I8dP" "8I    d8"  Yb   dP"  "Y8I   88   I8dP   88gg
,8'  Yb   I8P    I8  i8'    ,8I  I8P    I8   dP    dP  i8'    ,8I   88   I8P    8I  
,8'_   8) ,d8     I8,,d8,   ,d8b,,d8     I8,,dP  ,adP' ,d8,   ,d8b,_,88,_,d8b,  ,8I  
P' "YY8P8P88P     'Y8P"Y8888P"'Y888P     'Y88"   ""Y8d8P"Y8888P"'Y88P""Y88P'"Y88P"'  
                                         ,d8I'                              
                                       ,dP'8I                               
                                      ,8"  8I                               
                                      I8   8I                               
                                      '8, ,8I                               
                                       'Y8P"                                `),
  handle: chalk.white('sshahzaiib'),
  work: chalk.white('Senior Javascript Developer at Appcrates'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('sshahzaiib'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('sshahzaiib'),
  github: chalk.gray('https://github.com/') + chalk.green('sshahzaiib'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('shahzaiib'),
  web: chalk.cyan('https://shahzaib.netlify.app'),
  npx: chalk.red('npx') + ' ' + chalk.white('shahzaib  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

// console.log(chalk.green(boxen(output, options)))
fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
