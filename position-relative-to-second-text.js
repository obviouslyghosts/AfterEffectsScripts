// vertically moves text based on
// second referenced text box

// layer to reference
l = thisComp.layer( "Base" );

y = l.sourceRectAtTime( l.marker.key( 1 ).time ).height;

[ transform.position[0], thisComp.layer("Base").transform.position[1] - y - l.text.sourceText.style.fontSize / 2 ];
