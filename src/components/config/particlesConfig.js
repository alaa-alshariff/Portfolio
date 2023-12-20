const particlesConfig = {

    fullScreen: { enable: false },
    background: {
        color: {
            value: '',
        },
    },
    fpsLimit: 120,
    interactivity: {
        detectsOn: ".hero",
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 2
            },
            repulse: {
                distance: 70,
                duration: 0.4,
            }
        }
    },
//     color:#804dee;
// color: #854ce6;
    particles: {
        color: {
            value: '#854ce6'

        },

        links: {
            color: '804dee',

            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 100
        },
        opacity: {
            value: 0.6,
        },
        shape: {
            type: 'circle'

        },
        size: {
            value: { min: 1, max: 5 },

        },
    },
    detectRetina: true,
}

export default particlesConfig