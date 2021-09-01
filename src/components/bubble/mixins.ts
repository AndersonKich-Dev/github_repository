export function tooglePositionBubble( mode: string ){

    switch(mode){
        case 'cardItem':
            return `
                top: -2.6rem;
                left: 1.5rem;

                ::before {
                    top: 2.25rem;
                    left: 20%;
                }
            `;
        case 'clipboard':
            return `
                top: -2.875rem;
                right: 0;

                ::before {
                    top: 2.25rem;
                    left: 50%;
                }
            `;
        case 'contentMenuBtn':
            return `
                top: -2.7rem;
                left: 50%;
                transform: translate(-50%, 0%);

                ::before {
                    top: 115%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            
            `;
    }

    
}