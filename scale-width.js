w = thisComp.layer("Adjustment Layer 3").effect("MAX FONT SIZE")("Slider");
widest = w;

t = thisComp.layer("TOP").sourceRectAtTime( thisComp.layer("TOP").marker.key( 1 ).time ).width;
m = thisComp.layer("MIDDLE").sourceRectAtTime( thisComp.layer("MIDDLE").marker.key( 1 ).time ).width;
b = thisComp.layer("BOTTOM").sourceRectAtTime( thisComp.layer("BOTTOM").marker.key( 1 ).time ).width;

widest = (t > widest) ? t: widest;
widest = (m > widest) ? m: widest;
widest = (b > widest) ? b: widest;


if ( widest > w )
{
	(w/widest) * 100;
} else {
	100;
}



//

w = thisComp.layer("CONTROLLS").effect("WIDTH")("Slider");
widest = thisLayer.sourceRectAtTime().width;


if ( widest > w )
{
	v = (w/widest) * 100;
} else {
	v = 100;
}

[v,v];


// based on height
h = thisComp.layer("CONTROLS").effect("WIDTH")("Slider");
tallest = thisLayer.sourceRectAtTime().height;


if ( tallest > h )
{
	v = ( h / tallest ) * 100;
} else {
	v = 100;
}

[v,v];
