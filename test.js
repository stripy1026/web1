function Nightlight( self )
{
  var target = document.querySelector('body').style
  var alist = document.querySelectorAll('a')
  if (self.value==='night')
  {
    target.backgroundColor='black';
    target.color='white';
    self.value = 'day';

    var i;
    for ( i = 0; i < alist.length; i++ )
    {
      alist[i].style.color = 'powderblue';
    }
  }
  else
  {
    target.backgroundColor='white';
    target.color='black';
    self.value = 'night';

    var i;
    for ( i = 0; i < alist.length; i++ )
    {
      alist[i].style.color = 'blue';
    }
  }
}
