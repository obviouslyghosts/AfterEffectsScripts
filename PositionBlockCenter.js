t = thisComp.layer("TOP").sourceRectAtTime( thisComp.layer("TOP").marker.key( 1 ).time ).height;
m = thisComp.layer("MIDDLE").sourceRectAtTime( thisComp.layer("MIDDLE").marker.key( 1 ).time ).height;
b = thisComp.layer("BOTTOM").sourceRectAtTime( thisComp.layer("BOTTOM").marker.key( 1 ).time ).height;
p = thisComp.layer("Adjustment Layer 3").effect("PADDING")("Slider");

yd = (t+(m/2)+p) - (t+m+b+p+p)/2;
yd *= parseFloat(thisComp.layer("WIDTH").text.sourceText)/100;

y = height/2 + yd;

[transform.position[0], y];
