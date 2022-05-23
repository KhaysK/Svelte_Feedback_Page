import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Convallis a cras semper auctor neque vitae tempus quam.'
    },
    {
        id: 2,
        rating: 7,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Convallis a cras semper auctor neque vitae tempus quam.'
    },
    {
        id: 3,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Convallis a cras semper auctor neque vitae tempus quam.'
    },
])