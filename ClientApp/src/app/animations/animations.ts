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
  export let cart=trigger('cart', [
    transition(':enter', [
        query('.cart-item', [
          style({opacity: 0, transform: 'translateY(-10px)'}),
          stagger(200, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
      transition(':leave', [
        query('.cart-item', [
          style({opacity: 1, transform: 'translateY(10px)'}),
          stagger(200, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 0, transform: 'none' }))
          ])
        ])
      ])
  ]);
  export let fadeIn=trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out')
    ]),
  ]);
  export let fadeleft=trigger('fadeleft', [
    transition(':leave', [
      animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(-100px)' }))
    ])    
  ]);
  export let faderight=trigger('faderight',  [    
    transition(':enter', [
      animate('1000ms 500ms ease-out', style({ opacity: 1, transform: 'translateX(10px)' }))
    ]),

])

 