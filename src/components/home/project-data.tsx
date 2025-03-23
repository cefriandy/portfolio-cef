import epkhImage from '../../assets/epkh.png';
import ceriaImage from '../../assets/ceria.png';
import pruforceWebImage from '../../assets/pruforce-web.png';
import pruforceMobileImage from '../../assets/pruforce-mobile.png';

const projects = [
    {
        title: 'e-PKH & e-SDM',
        description: "e-PKH: A digital app by the Ministry of Social Affairs of Indonesia for the Program Keluarga Harapan (PKH). It helps manage and distribute financial aid to low-income families efficiently. e-SDM: A human resource management system used by government bodies to handle civil servant data, performance evaluations, and HR tasks, improving efficiency and transparency.",
        category: 'Web Development',
        imageUrl: [epkhImage, 'anotherImage1.png', 'anotherImage2.png']
    },
    {
        title: 'Ceria BRI',
        description: "Ceria BRI is a digital lending application developed by Bank Rakyat Indonesia (BRI). It's designed to provide quick, easy, and secure installment loans for online shopping. Users can apply for credit directly through the app and use it for purchases on platforms like Tokopedia and other partner merchants. The app allows BRI customers to simulate credit costs, view terms and conditions, and find the nearest BRI branch for assistance. It's a convenient tool for managing finances and making purchases more affordable through installment plans.",
        category: 'Web Development',
        imageUrl: [ceriaImage, 'anotherImage3.png']
    },
    {
        title: 'PRUForce Web',
        description: "PRUforce Web is an online portal developed by PT Prudential Life Assurance. Similar to PRUforce Mobile, it's designed for Prudential consultants and agents to manage their business activities. The portal provides access to various tools and resources, including real-time production reports, customer information, and contract management. It also offers features for locating the nearest Prudential offices",
        category: 'Web Development',
        imageUrl: [pruforceWebImage, 'anotherImage4.png']
    },
    {
        title: 'PRUForce Mobile',
        description: "PRUforce Mobile is an application developed by PT Prudential Life Assurance. It's designed specifically for Prudential consultants and agents to manage their business activities efficiently. The app provides access to real-time production reports, customer information, contracts, and business situations. It also includes features like locating the nearest hospital and submitting proposals",
        category: 'Mobile Development',
        imageUrl: [pruforceMobileImage, 'anotherImage5.png']
    },
];

export default projects;