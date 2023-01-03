import {animate, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";

export const boxAnimation = trigger('box', [
  state('start', style({background: 'blue'})),
  state('end', style({background: 'red', transform: 'scale(2.2)'})),
  state('special', style({
    background: 'orange',
    transform: 'scale(0.5)', borderRadius: '50%'
  })),
  transition('start => end', animate(450)),
  transition('end => start', animate('800ms ease-in-out')),
  transition('special <=> *', [
    group([
      query('h4', animate(1500, style({fontSize: '.rem'}))),
      style({background: 'green'}),
      animate('1s', style({
        background: 'pink'
      })),
      animate(1750)
    ])
  ]),
  //void => *
  transition(':enter', [
    animate('4s', keyframes([ //divides time into equal parts
      style({background: 'red'}),
      style({background: 'black'}),
      style({background: 'orange'}),
      style({background: 'blue'})
    ]))
    // style({opacity:0}),
    // animate('850ms ease-out')
  ]),
  //* => void
  transition(':leave', [
    style({opacity: 1}),
    group([ //sequence (consistent)
      animate(750, style({
        opacity: 0,
        transform: 'scale(1.5)'
      })),
      animate(300, style({
        color: '#000',
        fontWeight: 'bold'
      }))
    ])
  ])
])
