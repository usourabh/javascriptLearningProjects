window.onload = showTime = () => {
  setInterval(timer, 1000);
};

timer = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let currentTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("time").innerHTML = currentTime;
};
