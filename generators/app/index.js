const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

module.exports = class extends Generator {
  initializing() {
    // 打印欢迎语
    this.log(
      yosay(`Welcome to the shining ${chalk.cyan('generator-epay-sparta')} generator!`)
    );
  }

  prompting() {
    // 让用户选择是否需要包含vuex
    const prompts = [
      // 平台
      {
        type: 'list',
        name: 'platform',
        message: 'Which platform would you like?',
        choices: [
          {
            name: 'PC',
            value: 'pc'
          },
          {
            name: 'Mobile',
            value: 'mobile'
          }
        ]
      },
      // 项目名
      {
        type: 'input',
        name: 'name',
        message: 'Name of project:',
        default: path.basename(process.cwd())
      },
      // 项目描述
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
        default: ''
      },
      // 加vuex
      {
        type: 'confirm',
        name: 'includeVuex',
        message: 'Would you like to include "vuex" in your project?',
        default: true
      },
      // 是否使用vue-router的history模式
      {
        type: 'confirm',
        name: 'useRouterHistory',
        message: 'Would you like to use "history" mode of vue-router?',
        default: false
      },
      // ============== mobile
      // 加wechat js-SDK
      {
        type: 'confirm',
        name: 'includeWechat',
        message: 'Would you like to include "wechat JS-SDK" in your project?',
        default: false,
        when: answers => {
          return answers.platform === 'mobile';
        }
      },
      {
        type: 'confirm',
        name: 'includeHybrid',
        message: 'Would you like to include "hybrid" in your project?',
        default: false,
        when: answers => {
          return answers.platform === 'mobile';
        }
      },
      // ============== pc
      // 加sparta-ui
      {
        type: 'confirm',
        name: 'includeSpartaUI',
        message: 'Would you like to include "sparta-ui" in your project?',
        default: false,
        when: answers => {
          return answers.platform === 'pc';
        }
      },
      // 支持的IE的版本
      {
        type: 'list',
        name: 'ieVersion',
        message: 'Which "version of IE" would you like to support?',
        choices: [
          {
            name: 'IE 9',
            value: '9'
          },
          {
            name: 'IE 10',
            value: '10'
          },
          {
            name: 'IE 11 or higher',
            value: '11'
          }
        ],
        default: '11',
        when: answers => {
          return answers.platform === 'pc';
        }
      },
      // ==============
      // 单元测试
      {
        type: 'confirm',
        name: 'includeUnitTest',
        message: 'Would you like to include "unit-test"?',
        default: false
      },
      // 端到端测试
      {
        type: 'confirm',
        name: 'includeE2eTest',
        message: 'Would you like to include "e2e-test"?',
        default: false
      },
      // 加hubble
      {
        type: 'confirm',
        name: 'includeHubble',
        message: 'Would you like to include "hubble of netease" in your project?',
        default: false
      }
    ];
    return this.prompt(prompts).then(answers => {
      this.platform = answers.platform;
      this.name = answers.name;
      this.description = answers.description;
      this.includeUnitTest = answers.includeUnitTest;
      this.includeE2eTest = answers.includeE2eTest;
      this.ieVersion = answers.ieVersion;
      this.includeVuex = answers.includeVuex;
      this.useRouterHistory = answers.useRouterHistory;
      this.includeSpartaUI = answers.includeSpartaUI;
      this.includeHubble = answers.includeHubble;
      this.log(chalk.green('platform: ', this.platform));
      this.log(chalk.green('name: ', this.name));
      this.log(chalk.green('description: ', this.description));
      this.log(chalk.green('includeUnitTest: ', this.includeUnitTest));
      this.log(chalk.green('includeE2eTest: ', this.includeE2eTest));
      this.log(chalk.green('includeVuex: ', this.includeVuex));
      this.log(chalk.green('useRouterHistory: ', this.useRouterHistory));
      this.log(chalk.green('includeHubble: ', this.includeHubble));
      // 如果选择PC平台，则有下列参数
      if (this.platform === 'pc') {
        this.log(chalk.green('ieVersion: ', this.ieVersion));
        this.log(chalk.green('includeSpartaUI: ', this.includeSpartaUI));
        // 处理ie version
        this.ieVersionSupport = '';
        switch (this.ieVersion) {
          case '9':
            this.ieVersionSupport = 'ie >= 9';
            break;
          case '10':
            this.ieVersionSupport = 'ie >= 10';
            break;
          default:
            this.ieVersionSupport = 'ie >= 11';
        }
      } else {
        this.log(chalk.green('includeHybrid: ', this.includeHybrid));
        this.log(chalk.green('includeWechat: ', this.includeWechat));
        this.includeHybrid = answers.includeHybrid;
        this.includeWechat = answers.includeWechat;
      }
    });
  }

  configuring() {
    // 因为husky原理是在安装的时候去.git文件夹中的hooks做修改
    // 所以在安装之前，需要确认git是否已经安装
    // 如果不存在git，则init一下
    // 否则直接安装
    if (!fs.existsSync('.git')) {
      spawn('git', ['init']);
    }
  }

  writing() {
    // 复制普通文件
    // https://github.com/sboudrias/mem-fs-editor
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {
        isPc: this.platform === 'pc',
        name: this.name,
        includeUnitTest: this.includeUnitTest,
        includeE2eTest: this.includeE2eTest,
        ieVersion: this.ieVersionSupport,
        includeSpartaUI: this.includeSpartaUI,
        includeVuex: this.includeVuex,
        useRouterHistory: this.useRouterHistory,
        includeHubble: this.includeHubble,
        includeHybrid: this.includeHybrid,
        includeWechat: this.includeWechat
      },
      {},
      {
        globOptions: {
          // https://github.com/isaacs/node-glob
          dot: true,
          ignore: ['**/@selections/**'],
          gitignore: false
        }
      }
    );

    // 处理package.json
    let pkgJson = {
      name: this.name,
      description: this.description,
      dependencies: {},
      devDependencies: {}
    };

    // 根据用户选择，决定是否安装vuex
    if (this.includeVuex) {
      // 处理package.json
      pkgJson.dependencies = Object.assign({}, pkgJson.dependencies, {
        vuex: '^3.1.2'
      });
      // 把store拿出来(src/store)
      this.fs.copy(
        this.templatePath('@selections/common/vuex/store'),
        this.destinationPath('src/store')
      );
    }

    // 决定是否安装sparta-ui
    if (this.includeSpartaUI) {
      // 将sparta-ui拷贝到src/plugins中
      this.fs.copy(
        this.templatePath('@selections/pc/plugins/sparta-ui'),
        this.destinationPath('src/plugins/sparta-ui')
      );
    }

    // 决定是否加入hubble埋点
    if (this.includeHubble) {
      // 将hubble拷贝到src/plugins中
      this.fs.copy(
        this.templatePath('@selections/common/plugins/hubble'),
        this.destinationPath('src/plugins/hubble')
      );
    }

    // 用户选择mobile做的通用文件拷贝
    if (this.platform === 'mobile') {
      // 将mobile通用的plugins资源拷贝到src/plugins中
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/device'),
        this.destinationPath('src/plugins/device')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/dialog'),
        this.destinationPath('src/plugins/dialog')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/fastclick'),
        this.destinationPath('src/plugins/fastclick')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/responsive'),
        this.destinationPath('src/plugins/responsive')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/toast'),
        this.destinationPath('src/plugins/toast')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/vue-lazyload'),
        this.destinationPath('src/plugins/vue-lazyload')
      );
      this.fs.copy(
        this.templatePath('@selections/mobile/package-lock.json'),
        this.destinationPath('package-lock.json')
      );
      // 处理package.json
      pkgJson.dependencies = Object.assign({}, pkgJson.dependencies, {
        fastclick: '^1.0.6',
        'vue-lazyload': '^1.2.6',
        'postcss-pxtorem': '^4.0.1'
      });
    } else {
      this.fs.copy(
        this.templatePath('@selections/pc/package-lock.json'),
        this.destinationPath('package-lock.json')
      );
    }

    // 决定是否加入微信SDK
    if (this.includeWechat) {
      // 将wechat拷贝到src/plugins中
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/wechat'),
        this.destinationPath('src/plugins/wechat')
      );
    }

    // 决定是否加入hybrid
    if (this.includeHybrid) {
      // 将hybrid拷贝到src/plugins中
      this.fs.copy(
        this.templatePath('@selections/mobile/plugins/hybrid'),
        this.destinationPath('src/plugins/hybrid')
      );
    }

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.npmInstall();
    this._installLatestNpm();
  }

  end() {
    this._copyFilesFromNpmPackage();
    this.log(chalk.green('Construction completed!'));
  }

  _installLatestNpm() {
    let savePkgs = ['@epay-sparta/cli-service'];
    let devPkgs = [];
    // 决定是否安装sparta-ui
    if (this.includeSpartaUI) {
      savePkgs.push('sparta-ui');
    }
    // 根据用户选择，决定是否安装 单元测试（unit test）
    if (this.includeUnitTest) {
      devPkgs.push(['@epay-sparta/cli-plugin-unit-test', 'karma-chrome-launcher']);
    }
    // 根据用户选择，决定是否安装 端到端测试（e2e test）
    if (this.includeE2eTest) {
      devPkgs.push(['@epay-sparta/cli-plugin-e2e-test']);
    }
    this.npmInstall(savePkgs, { save: true });
    this.npmInstall(devPkgs, { 'save-dev': true });
  }

  /**
   * 有些文件是从npm的包中考出来到目标工程的，所以需要等npm包全都安装完以后才复制
   * 又因为npm install用了两次，所以无法用install:end来做监听，只能写在end里了
   */
  _copyFilesFromNpmPackage() {
    // 根据用户选择，决定是否安装 单元测试（unit test）
    if (this.includeUnitTest) {
      // 把unit拿出来(test/unit)
      this.fs.copy(
        this.destinationPath(
          'node_modules/@epay-sparta/cli-plugin-unit-test/lib/template/test'
        ),
        this.destinationPath('test'),
        { globOptions: { dot: true } }
      );
    }
    // 根据用户选择，决定是否安装 端到端测试（e2e test）
    if (this.includeE2eTest) {
      // 把e2e拿出来(test/e2e)
      this.fs.copy(
        this.destinationPath(
          'node_modules/@epay-sparta/cli-plugin-e2e-test/lib/template/test'
        ),
        this.destinationPath('test'),
        { globOptions: { dot: true } }
      );
    }
  }
};
