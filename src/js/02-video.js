import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ duration, percent, seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
  }, 1000)
);

const actualTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(actualTime).then(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
