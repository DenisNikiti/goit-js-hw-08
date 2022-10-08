const e=JSON.parse(localStorage.getItem("videoplayer-current-time"));e&&player.setCurrentTime(e.seconds).then((function(e){})).catch((function(e){e.name}));const t=throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3);player.on("timeupdate",t);
//# sourceMappingURL=02-video.02f3bd6e.js.map
