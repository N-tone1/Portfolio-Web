import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
    firstName: 'Anton',
    lastName:  'Kolnrekaj',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Web Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Zagreb',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages:  ['English', 'Croatian', 'Albanian'] // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/N-tone1',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/anton-k-2baa10210/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'anton.toni2019@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Hi, I'm Anton, Let’s Create Together.</>,
    subline: <>I'm a Full Stack Web Developer passionate about learning, tackling challenges, and building innovative solutions.<br/>Let’s create something amazing together! </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a junior web developer passionate about everything web-related and eager to solve problems using new technologies. While my career began in the bakery business, my love for programming never faded. I’ve been studying computer science on the side, and now I’m fully diving into web development with excitement to follow my true passion.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                "company": "Pekara Martin",
                "timeframe": "2024 (2 months)",
                "role": "Web Developer (Project for Bakery Website)",
                "achievements": [
                  <>Developed a website for Pekara Martin, including interactive features such as a product gallery, contact information, and an embedded map using Leaflet for location display.</>,
                  <>Worked on optimizing the website for mobile devices using responsive design techniques and CSS media queries to ensure it adapts to various screen sizes.</>
                ],
                images: [ ]
              },
              
            {
                company: 'Martin and Sons',
                timeframe: '2010 - 2024',
                role: 'System Setup & Maintenance,Technology Management, IT Support & Troubleshooting, Company Director, HR, Finance, Sales, Procurement, Administrative Tasks, Managerial Roles, Production',
                achievements: [
                <>Responsible for setting up and configuring the cash register program to ensure smooth and efficient daily transactions.</>,
                <>Installed and configured wireless internet to support seamless communication and connectivity throughout the bakery.</>,
                <>Adjusted printer preferences for accurate order processing, ensuring that receipts and invoices were printed correctly for customers and suppliers.</>,
                <>Provided on-site computer fixes, troubleshooting hardware and software issues to maintain business operations without disruptions.</>,  
                <>Managed various aspects of bakery production, ensuring smooth operations and high-quality products.</>,
                <>Held managerial responsibilities, overseeing daily operations, administrative tasks, and compliance with industry regulations.</>,
                <>Managed procurement, sales, and financial processes to enhance business efficiency.</>,
                <>Handled HR activities, including recruitment, employee management, and organizational development.</>,
                <>Served as the company director, providing leadership in strategic planning, financial management, and overall business direction.</>
                ],
                images: [  {                    
                    src: '/images/projects/project-01/recepti.png',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                }]
            },
            {
                company: 'Bakery Martin',
                timeframe: '2007 - 2010',
                role: 'Delivery Driver, Salesperson, Dough Master',
                achievements: [
                  <>Worked in various roles, including as a delivery driver, salesperson, and dough master.</>,
                  <>Responsible for timely delivery of products to customers and maintaining excellent customer service standards.</>,
                  <>Assisted in dough preparation and other key bakery processes to ensure product quality.</>
                ],
                images: [ ]
            }
            
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'VSITE',
                description: (
                    
                    <ul>
                        <>-The University of Applied Sciences for Modern Information Technologies</>
                      <li><strong>Studied software engineering.</strong></li>                                   
                    </ul>
                  ),
                  
            },

            {
                name: 'Udemy Academy',
                description:(
                    <ul>
                      <li><strong>50 Projects In 50 Days -HTML,CSS & JavaScript</strong></li>
                      <li><strong>The Complete 2024 Web Development Bootcamp</strong></li>
                      <li><strong>Currently enrolled in the course "React - The Complete Guide 2024 (incl. Next.js, Redux)."</strong></li>
                      
                    </ul>
                  ),
                  
                
            },
           
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Frontend Development',
                description: (
                    <ul>
                      <li><strong>HTML5</strong></li>
                      <li><strong>CSS3</strong></li>
                      <li><strong>JavaScript (ES6+)</strong></li>
                      <li><strong>Bootstrap</strong></li>
                      <li><strong>React.js (Basics)</strong></li>
                    </ul>
                  ),
                images: [
                    {
                        src: '/images/projects/project-01/Martin-Bakery-home.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/TicTacToe.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Backend Development',
                description: (
                    <ul>
                      <li><strong>Node.js and Express.js</strong></li>
                      <li><strong>RESTful API design</strong></li>
                      <li><strong>PostgreSQL (CRUD operations and integration with backend)</strong></li>
                      <li><strong>Git and GitHub</strong></li>
                      <li><strong>Debugging and troubleshooting</strong></li>
                      <li><strong>Deployment with platforms like Heroku</strong></li>
                    </ul>
                  ),
                images: [
                    {
                        src: '/images/projects/project-01/Book-collectionApp2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/JokeGeneratorApp2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };