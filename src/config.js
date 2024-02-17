// config.js
module.exports = {
    github: {
        username: 'victorv', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'victorvedovato',
        twitter: '10imaging',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://vato.dev',
        email: ''
    },
    skills: [
        'Git/SVN/CVS',
        'C/C++',
        'Rust',
        'Java',
        'JavaScript/ECMAscript',
        'MySQL/SQL/noSQL',
        'React.js',
        'Node.js',
        'Jquery',
        'Android/Kotlin',
        'Linux/Kernel/Drivers',
        'ASM/WASM/X86/ARM/VLIW',
    ],
    experiences: [
        { 
            company: 'Venetian Ventures Ltd.',
            position: 'Founder',
            from: 'January 2023',
            to: 'Present'
        },
        { 
            company: 'Vital Vector Capital',
            position: 'CEO',
            from: 'January 2019',
            to: 'December 2022'
        },
        { 
            company: '10 Imaging Inc.',
            position: 'CEO',
            from: 'August 2013',
            to: 'January 2019'
        }
    ],
    education: [
        { 
            institution: 'University of California at San Diego (UCSD)',
            degree: 'Bachelor of Science in Biochemistry and Cell Biology',
            from: '1991',
            to: '1994'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        // source: 'dev.to', // medium | dev.to
        // username: 'victorv',
        // limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: 'G-DJTPTVSTT5' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}