g=10,o=0,cont=0,intervalo=240,setup=o=>{createCanvas(W=windowWidth,H=windowHeight),noStroke()},draw=t=>{for(cont%intervalo==0&&(h=random(1,455)),o+=.05,i=0;i<W;i+=g)for(j=0;j<H;j+=g)d=dist(W/2,H/2,i+g/2,j+g/2),a=map(d,0,W/2,0,PI),s=abs(sin(cos(a)*h+o/d+o/.25)),fill(.5<s?0:W),rect(i,j,g);cont++}
