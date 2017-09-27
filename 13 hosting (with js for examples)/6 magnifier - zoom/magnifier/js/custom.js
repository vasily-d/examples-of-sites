var evt = new Event(),
    m = new Magnifier(evt);

m.attach({
    thumb: '#thumb',
    largeWrapper: 'preview',
    zoom: 3,
    zoomable: true
});
