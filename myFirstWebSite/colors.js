var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color= color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function SwitchHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Switch Off'){
    Body.setBackgroundColor('#353535');
    Body.setColor('white');
    self.value = 'Switch On';

    Links.setColor('cornflowerblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Switch Off';

    Links.setColor('slategray');
    }
  }
