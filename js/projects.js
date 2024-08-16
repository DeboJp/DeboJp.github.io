const projects = [
    {
        title: "Dolly - Your Email Assistant",
        extra: "Chrome Ext",
        date: "12, Aug 2024",
        description: "Build directly into the Gmail composer, Dolly is a tool that enhances our Gmail experience with intelligent, real-time email suggestions. As we write, the tool adapts to our style, offering context-aware suggestions that evolve with our email.",
        imageUrl: "images/Dolly.gif",
        devPostLink: "#",
        gitHubLink: "https://github.com/DeboJp/dolly_email_assistant"
    },{
        title: "DRUGS - Empowers Patients & Caregivers Alike",
        extra: "Next Web App",
        date: "24, May 2024",
        description: "Drugs is a medication search platform, providing a database of medicines and an easy way to search them up. Additionally, the tool provides diagnoses of conditions based on symptoms. When enough market data is collected, we can link these to provide real-time medication recommendations based on predicted disease probabilities.",
        imageUrl: "images/DRUGS.gif",
        devPostLink: "#",
        gitHubLink: "https://github.com/DeboJp/medicine-list"
    },{
        title: "EduHelp - Your Study Buddy",
        extra: "Html/Css Web App",
        date: "25, Feb 2024",
        description: "An app that summarizes texts and ideas based on your personality and/or preference, and converses with you to guide your understanding. <b> — MADDATA 2024' </b>",
        imageUrl: "images/EduHelp2.png",
        devPostLink: "https://devpost.com/software/eduhelp-catalyzing-education",
        gitHubLink: "https://github.com/DeboJp/Food-Program-UW"
    },{
        title: "A Buggy Birthday Cake",
        extra: "Python App",
        date: "18, Dec 2023",
        description: "A game (blowing out the cake) to play with your friends with intentional bugs at every stage. Advice: the candle never goes out ;) <b> — WINTER BREAK 2023' </b>",
        imageUrl: "images/Buggy.jpg",
        devPostLink: "#",
        gitHubLink: "ProjectsID"
    },{
        title: "HungryHuskies - Find Next Meal",
        extra: "Html/Css Web App",
        date: "14, Oct 2023",
        description: "Address Food waste: Connect students with places that have excess food and/or are willing to give food away for less.<b> — DUBHACKS 2023' </b>",
        imageUrl: "images/HungryHuskies3.png",
        devPostLink: "https://devpost.com/software/hh-tivr05'",
        gitHubLink: "https://github.com/DeboJp/Food-Program-UW"
    },{
        title: "Econsense - Stay Up-To-Date",
        extra: "Terminal ChatBot",
        date: "16, Sept 2023",
        description: "An AI chatbot app that mines data from community forums reflective of public and academia about different economic issues to give sentiment analysis, guidance, and trending topics on econ.<b> — HACKMIT 2023' </b>",
        imageUrl: "images/EconSense2.png",
        devPostLink: "https://devpost.com/software/econsense",
        gitHubLink: "#ProjectsID"
    },
    // Add more projects here as objects
];

function generateProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear any existing content

    projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-4">
                <div class="article animate-box" style="height: 550px;">
                    <a class="blog-img">
                        <img class="img-responsive" src="${project.imageUrl}" alt="${project.title}">
                        <div class="overlay"></div>
                        <div class="link">
                            <span class="read">${project.extra}</span>
                        </div>
                    </a>
                    <div class="desc" style="height: 200px;">
                        <span class="meta">${project.date}</span>
                        <h2><a>${project.title}</a></h2>
                        <p>${project.description} (<a href="${project.devPostLink}" style="color: black;">DevPost</a> or <a href="${project.gitHubLink}" style="color: black;">GitHub</a>)</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
}

// Call the function to generate projects
generateProjects();
