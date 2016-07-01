'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('generator-baus-component') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentname',
        message: 'What is the name of your component?',
        default: this.appname
      },
      {
          type: 'confirm',
          name: 'componentIsStatefull',
          message: 'should this extend the class component?',
          default: false
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.log('creating component...', props.componentname);
      this.props = props;
    }.bind(this));
  },


 
  scaffoldFolders: function(){
      console.log("SCAFFOLDING", this.props.componentname);
      this.mkdir(this.props.componentname);
  },

  copyMainFiles: function(){
   
      var context = { 
          name: this.props.componentname 
      };
   
      this.template("_style.css", this.props.componentname + "/style.scss", context);
      this.template("_index.js", this.props.componentname +"/index.js", context);    

      if (this.props.componentIsStatefull) {
        this.template("_statefullcomponent.js", this.props.componentname +"/" + this.props.componentname+ ".jsx", context);    
      } else {
        this.template("_statelesscomponent.js", this.props.componentname +"/" + this.props.componentname+ ".jsx", context);    
      }
  }
});
