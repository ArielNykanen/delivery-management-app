import { trigger, style, state, transition, animate } from '@angular/animations';
export let slideTime = 400;
export let slideInOut = trigger('slider', [
state('in', style({
position: 'absolute',
left: '0%',
opacity: '1'
})),
state('out', style({
position: 'absolute',
left: '-2400px',
opacity: '0'
})),
transition('in => out',
animate(slideTime)
),
transition('out => in',
animate(slideTime)
),
]);

export let fadeIn = trigger('fader', [
state('in', style({
position: 'absolute',
left: '42%',
top: '30%',
opacity: '1'
})),

state('out', style({
position: 'absolute',
left: '42%',
top: '30%',
opacity: '0'
})),
transition('in => out',
animate(300)
),

transition('out => in',
animate(500)
),
]);

export let slideDown = trigger('slideDownAlerts', [
state('in', style({
position: 'fixed',
left: '2%',
top:  '0%',
opacity: '0.9'
})),

state('out', style({
position: 'fixed',
left: '2%',
top: '-100%',
opacity: '0'
})),

transition('in => out',
animate(slideTime * 2)
),

transition('out => in',
animate(slideTime)
),
]);
