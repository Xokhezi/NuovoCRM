import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export let listAnim=trigger('listAnim', [
    transition(':enter', [
        query('.list-group-item', [
          style({opacity: 0, transform: 'translateY(-10px)'}),
          stagger(200, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
  ])
  export let fadeIn=trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out')
    ]),
  ])