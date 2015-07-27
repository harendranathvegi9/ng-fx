import {bounces} from './bounce/bounce';
import {fades} from './fade/fade';
import {zooms} from './zoom/zoom';

const elementModule = angular.module('ngFx.animations.element', []);

bounces.forEach(bounce => {
  elementModule.animation(bounce.classname, bounce.creator);
});

fades.forEach(fade => {
  elementModule.animation(fade.classname, fade.creator);
});

zooms.forEach(zoom => {
  elementModule.animation(zoom.classname, zoom.creator);
});

const element = elementModule.name;

export {element};
