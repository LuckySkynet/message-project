import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const zoomIn = trigger('zoomIn', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    animate(500, keyframes([
      style({ opacity: 0, transform: 'scale(.3,.3)' }),
      style({ opacity: 0.5, transform: 'scale(.7,.7)' }),
      style({ opacity: 1, transform: 'scale(1,1)' })
    ]))
  ])
]);
