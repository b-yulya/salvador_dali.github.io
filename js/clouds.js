var b = document.getElementById('must1');
var c = document.getElementById('must2');
var d = document.getElementById('must3');
var a = document.getElementById('must4');

b.onmousedown = function(e) //отследить нажатие
{
  b.style.position = 'absolute';//размещение на том же месте, но в абсолютных координатах
  moveAt(e);//сдвиг
  document.body.appendChild(b);//конец дочерних элементов
  b.style.zIndex = 1000;//над другими элементами

  function moveAt(e) {
    b.style.left = e.pageX - b.offsetWidth / 2 + 'px';
    b.style.top = e.pageY - b.offsetHeight / 2 + 'px';
  }
  //Когда человек нажимает на картинку mousedown – курсор сдвинут относительно левого-верхнего угла картинки
  //на расстояние, которое мы обозначим X/Y.
//перемещать по экрану
  document.onmousemove = function(e) {//перемещение мыши
    moveAt(e);
  }

//отследить окончание переноса
  b.onmouseup = function() {//кнопка мыши отпущена
    document.onmousemove = false;
    b.onmouseup = false;
  }

  b.ondragstart = function() {// попытка перетаскивания
  return false;
}

}

c.onmousedown = function(e) //отследить нажатие
{
  c.style.position = 'absolute';//размещение на том же месте, но в абсолютных координатах
  moveAt(e);//сдвиг
  document.body.appendChild(c);//конец дочерних элементов
  c.style.zIndex = 1000;//над другими элементами

  function moveAt(e) {
    c.style.left = e.pageX - c.offsetWidth / 2 + 'px';
    c.style.top = e.pageY - c.offsetHeight / 2 + 'px';
  }
  //Когда человек нажимает на картинку mousedown – курсор сдвинут относительно левого-верхнего угла картинки
  //на расстояние, которое мы обозначим X/Y.
//перемещать по экрану
  document.onmousemove = function(e) {//перемещение мыши
    moveAt(e);
  }

//отследить окончание переноса
  c.onmouseup = function() {//кнопка мыши отпущена
    document.onmousemove = false;
    c.onmouseup = false;
  }

  c.ondragstart = function() {// попытка перетаскивания
  return false;
}

}

d.onmousedown = function(e) //отследить нажатие
{
  d.style.position = 'absolute';//размещение на том же месте, но в абсолютных координатах
  moveAt(e);//сдвиг
  document.body.appendChild(d);//конец дочерних элементов
  d.style.zIndex = 1000;//над другими элементами

  function moveAt(e) {
    d.style.left = e.pageX - d.offsetWidth / 2 + 'px';
    d.style.top = e.pageY - d.offsetHeight / 2 + 'px';
  }
  //Когда человек нажимает на картинку mousedown – курсор сдвинут относительно левого-верхнего угла картинки
  //на расстояние, которое мы обозначим X/Y.
//перемещать по экрану
  document.onmousemove = function(e) {//перемещение мыши
    moveAt(e);
  }

//отследить окончание переноса
  d.onmouseup = function() {//кнопка мыши отпущена
    document.onmousemove = false;
    d.onmouseup = false;
  }

  d.ondragstart = function() {// попытка перетаскивания
  return false;
}

}

a.onmousedown = function(e) //отследить нажатие
{
  a.style.position = 'absolute';//размещение на том же месте, но в абсолютных координатах
  moveAt(e);//сдвиг
  document.body.appendChild(a);//конец дочерних элементов
  a.style.zIndex = 1000;//над другими элементами

  function moveAt(e) {
    a.style.left = e.pageX - a.offsetWidth / 2 + 'px';
    a.style.top = e.pageY - a.offsetHeight / 2 + 'px';
  }
  //Когда человек нажимает на картинку mousedown – курсор сдвинут относительно левого-верхнего угла картинки
  //на расстояние, которое мы обозначим X/Y.
//перемещать по экрану
  document.onmousemove = function(e) {//перемещение мыши
    moveAt(e);
  }

//отследить окончание переноса
  a.onmouseup = function() {//кнопка мыши отпущена
    document.onmousemove = false;
    a.onmouseup = false;
  }

  a.ondragstart = function() {// попытка перетаскивания
  return false;
}

}