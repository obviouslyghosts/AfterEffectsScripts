x=thisComp.layer("Hello there Poeple ").sourceRectAtTime().width+100;
y=144;

sPos = [0,y]
ePos = [x,y]

timeToStart = marker.key(1).time;
timeToEnd = marker.key(2).time;

ease(time, timeToStart, timeToEnd, sPos, ePos);




l=thisComp.layer("Famous Los");
x=l.sourceRectAtTime(l.marker.key(1).time).width+100;
y=144;



sPos = [324,1732];
ePos = [324,1652];

timeToStart = marker.key(2).time;
timeToEnd = marker.key(3).time;

if (thisComp.layer("SUBTITLECHECK").transform.opacity == 100) {
ease(time, timeToStart, timeToEnd, sPos, ePos);
} else {
  sPos;
}