const projects = [
    {
        title: "Dolly - Your Email Assistant",
        extra: "Chrome Ext",
        date: "12, Aug 2024",
        description: "Build directly into the Gmail composer, Dolly is a tool that enhances our Gmail experience with intelligent, real-time email suggestions. As we write, the tool adapts to our style, offering context-aware suggestions that evolve with our email. <b> — GOOGLE DEVELOPER(GEMINI) COMPETITION 2024' </b>",
        imageUrl: "images/Dolly.gif",
        devPostLink: "#",
        gitHubLink: "https://github.com/DeboJp/dolly_email_assistant"
    },{
        title: "DRUGS - Empowers Patients & Caregivers Alike",
        extra: "Next Web App",
        date: "24, May 2024",
        description: "Drugs is a medication search platform, providing a database of medicines and an easy way to search them up. Additionally, the tool provides diagnoses of conditions based on symptoms. When enough market data is collected, we can link these to provide real-time medication recommendations based on predicted disease probabilities. <b> — SUMMER BREAK 2024' </b>",
        imageUrl: "images/DRUGS.gif",
        devPostLink: "#",
        gitHubLink: "https://github.com/DeboJp/medicine-list"
    },{
        title: "TEKKO - AI Teeko Game Player",
        extra: "Terminal Interface",
        date: "23, April 2024",
        description: "A penalty-based search method in a Teeko game AI using the Minimax algorithm involves evaluating moves by applying penalties to less favorable positions, guiding the AI towards more advantageous strategies.",
        imageUrl: "images/TeekoGame.gif",
        devPostLink: "#",
        gitHubLink: "#"
    },{
        title: "8-Tile Puzzle Solver - A* Search Algorithm",
        extra: "Python",
        date: "16, April 2024",
        description: "A Python program that solves the 8-tile puzzle using the A* search algorithm, incorporating Manhattan distance as the heuristic to efficiently find the solution path.",
        imageUrl: "images/8Puzzle.png",
        devPostLink: "#",
        gitHubLink: "#"
    },{
        title: "LeNet-5 Implementation and Training on MiniPlaces Dataset",
        extra: "CNN",
        date: "4, April 2024",
        description: "A deep learning project involving the implementation of the LeNet-5 convolutional neural network for scene recognition using the MiniPlaces dataset. The project explores different training configurations and evaluates model performance using validation accuracy with PyTorch.",
        imageUrl: "images/LeNet.png",
        devPostLink: "#",
        gitHubLink: "#"
    },{
        title: "Basic Neural Network To Classify Images",
        extra: "PyTorch - MNIST",
        date: "30, March 2024",
        description: "A hands-on project setting up PyTorch in a virtual environment, building, training, and evaluating a basic neural network model on the Fashion-MNIST dataset. The project covers the implementation of key functions for data loading, model building, training, evaluation, and prediction.",
        imageUrl: "images/Mnist3.png",
        devPostLink: "#",
        gitHubLink: "#"
    },{
        title: "Linear Regression Analysis on Lake Mendota Ice Coverage",
        extra: "Data Analysis",
        date: "15, March 2024",
        description: "A data analysis project that involves curating historical data on Lake Mendota ice coverage, visualizing the data, and applying linear regression to predict trends. The project includes implementing a Python script to generate a cleaned dataset, produce a plot, compute regression coefficients, and make predictions about future ice coverage.",
        imageUrl: "images/LakeMendotaIceRegression.jpg",
        devPostLink: "",
        gitHubLink: ""
    },{
        title: "Personal Website - Portfolio",
        extra: "Web Dev",
        date: "7, March 2024",
        description: "A static personal portfolio website designed to showcase projects and professional experience. Built using HTML/CSS, and JavaScript, incorporating modern design principles, animations, and a mobile-first approach. The website aims to present a professional online presence and provide a comprehensive overview of work and achievements.",
        imageUrl: "images/PortfolioShowcase.png",
        devPostLink: "https://devpost.com/software/personal-portfolio-showcase",
        gitHubLink: "https://github.com/DeboJp/PersonalPortfolio"
    },{
        title: "EduHelp - Your Study Buddy",
        extra: "Html/Css Web App",
        date: "25, Feb 2024",
        description: "An app that summarizes texts and ideas based on your personality and/or preference, and converses with you to guide your understanding. <b> — MADDATA 2024' </b>",
        imageUrl: "images/EduHelp2.png",
        devPostLink: "https://devpost.com/software/eduhelp-catalyzing-education",
        gitHubLink: "https://github.com/DeboJp/EduHelp"
    },{
        title: "Hierarchical Clustering on Socioeconomic Data",
        extra: "Data Processing",
        date: "22, February 2024",
        description: "A data science project involving the implementation of hierarchical agglomerative clustering (HAC) to analyze and visualize socioeconomic similarities between countries. The project includes processing real-world data, calculating feature vectors, normalizing data, and generating a dendrogram to display the clustering results.",
        imageUrl: "images/HCluster.png",
        devPostLink: "",
        gitHubLink: ""
    },{
        title: "Principal Component Analysis - Image Processing and Dimensionality Reduction",
        extra: "PCA",
        date: "15, February 2024",
        description: "A computational project that leverages Principal Component Analysis (PCA) for facial image analysis. The project involves implementing PCA to reduce the dimensionality of facial images, projecting these images into a lower-dimensional subspace, and visualizing the reconstructed images to observe the effects of dimensionality reduction. The project enhances understanding of PCA through practical application in image data compression and reconstruction.",
        imageUrl: "images/PCAAnalysis.png",
        devPostLink: "",
        gitHubLink: ""
    },{
        title: "Probabilistic Language Identification - Text Analysis and Classification",
        extra: "Bayes Rule",
        date: "8, February 2024",
        description: "Applies probabilistic methods to identify the language of a given text as either English or Spanish. Implements a digital shredder to count character frequencies, using Bayes' theorem for language classification, and handling the computational challenges of underflow with logarithmic transformations. A practical application of Bayesian inference in text classification tasks.",
        imageUrl: "images/Language.png",
        devPostLink: "",
        gitHubLink: ""
    },{
        title: "A Buggy Birthday Cake",
        extra: "Python App",
        date: "18, Dec 2023",
        description: "A game (blowing out the cake) to play with your friends with intentional bugs at every stage. Advice: the candle never goes out ;) <b> — WINTER BREAK 2023' </b>",
        imageUrl: "images/Buggy.jpg",
        devPostLink: "#",
        gitHubLink: ""
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
    },{
        title: "Husky Maps - Data Structures and Algorithms in Practice",
        extra: "Web App",
        date: "April - June 2023",
        description: "Husky Maps is a web app developed as part of a course, focusing on data structures and algorithms. Implemented explores key concepts such as deques, search trees, priority queues, and graph algorithms, applying them to real-world problems like navigation and search within Seattle. Learned to implement and analyze these data structures, building a comprehensive portfolio throughout the course.",
        imageUrl: "images/HuskyMaps.png",
        devPostLink: "#",
        gitHubLink: "https://github.com/DeboJp/Maps_Engine_Seattle/tree/main"
    }
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
