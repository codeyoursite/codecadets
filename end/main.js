const receive = new URLSearchParams(window.location.search);
const age = receive.get("age");//1
const level = receive.get("level");//2
radio = receive.get("radio");//3
const choice = receive.get("choice");//4
let points = 0;

let dict = {
    "Block Coding": {
        url: "https://code-cadets.getlearnworlds.com/course/space-invaders",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/4d2eb929c413e767e3a14e01a211d5a2.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 1",
        purl: "https://code-cadets.getlearnworlds.com/coursesa"
    },
    "Scratch": {
        url: "https://code-cadets.getlearnworlds.com/course/scratchbasics1",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/aeccbe7a98a3df008eb4624fcc32097c.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 2",
        purl: "https://code-cadets.getlearnworlds.com/coursesb"
    },
    "Minecraft": {
        url: "https://code-cadets.getlearnworlds.com/course/adventurer",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/8a8cab9c341b5e2594e746bb089881b5.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 1",
        purl: "https://code-cadets.getlearnworlds.com/coursesa"
    },
    "Makecode Arcade": {
        url: "https://code-cadets.getlearnworlds.com/course/arcade",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/2dc429e9154f51119eaae6f469124185.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 2",
        purl: "https://code-cadets.getlearnworlds.com/coursesb"
    },
    "JavaScript": {
        url: "https://code-cadets.getlearnworlds.com/course/gamerplatform",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/92a9dfdc6140e59c02d6ef4f77a11532.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 3",
        purl: "https://code-cadets.getlearnworlds.com/coursesc"
    },
    "HTML": {
        url: "https://code-cadets.getlearnworlds.com/course/website",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/a3cb90926e19afbcccb7e90f2d317570.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 2",
        purl: "https://code-cadets.getlearnworlds.com/coursesb"
    },
    "Python": {
        url: "https://code-cadets.getlearnworlds.com/course/pythonpickmix",
        img: "https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/45c9816f36663b4746af22c1e318fd12.png",
        path: "Software Developer 3",
        purl: "https://code-cadets.getlearnworlds.com/coursesc"
    },
    "Data Science": {
        url: "https://code-cadets.getlearnworlds.com/course/agentbriefing",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/e1ca2d31edac59cede18a980165336a3.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 3",
        purl: "https://code-cadets.getlearnworlds.com/coursesc"
    },
    "Advanced Web Development": {
        url: "https://code-cadets.getlearnworlds.com/course/gameproject",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/029dfbd802e55487542efedffdfb2987.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 3",
        purl: "https://code-cadets.getlearnworlds.com/coursesc"
    },
    "Godot Game Engine": {
        url: "https://code-cadets.getlearnworlds.com/course/godot1",
        img: "https://api.us-e2.learnworlds.com/imagefile/https://lwfiles.mycourse.app/64da7ae07ffc46ecefdad7ed-public/bb59bddc5921f0b50d8f85f6d2cff530.png?client_id=64da7ae07ffc46ecefdad7ed&width=400&height=0",
        path: "Software Developer 3",
        purl: "https://code-cadets.getlearnworlds.com/coursesc"
    }
};

// if you are young - point are 2, older gets 3
if (age <= 9) {
    points = 2;
} else {
    points = 3;
}

// level is the 2nd q
// if you are not good - only one more point
// if you are okay - two more points
//if you are prty good - three more points
//if you are OG like me - four more points
if (level === "1") {
    points++;
} else if (level === "2") {
    points += 2;
} else if (level === "3") {
    points += 3;
} else {
    points += 4;
}

const txt = document.getElementById("txt"); //Where info with links is placed
const img = document.getElementById("img");// Where the img is placed
const a = document.getElementById("link");// Where link is placed
let o = undefined; // first bit of info about subject is placed

if (points == 3) {
    change("Block Coding"); // if they are the lowest on all of them, they do block coding
} else if (points == 4) {
    if (age > 10) {
        console.log("Minecraft");
        change("Minecraft") // if they are old but dont know how to code, minecraft suits them
    } else {
        change("Scratch");// if they are young, they do scratch
    }
} else if (points == 5) {
    if (level !== "1" && level !== "2") { // if they are great at coding
        if (choice === "5") { // they have chose html and not js (they have already done it)
            change("JavaScript");
        } else {
            change("HTML");
        }
    } else {
        if (choice !== 3) { // if they didn't choose HTML
            change("Python");
        } else {
            change("HTML");
        }
    }
} else if (points == 6) {
    if (level !== "1" && level !== "2") { // if they are a good coder
        if (radio === "2") { // if they have already did Python
            change("JavaScript");
        } else {
            change("Python");
        }
    } else { // if they are not a good coder
        if (radio !== "3") { // if they didn't already do HTML
            change("HTML");
        } else {
            change("Python");
        }
    }
} else { // if they are a very very good coder and scored ridicoulously highly
    if (radio === "5" || radio === "3") { // if they chose HTML or Javascript
        change("Data Science");
    } else { // if they have already done something else that wasn't HTML or JavaScript
        if (choice === "4") { // if they wanted to do Data Science
            change("Data Science");
        } else if (choice === "3" || choice === "5") { // if they chose HTML or JavaScript in the choice (I want to do this...)
            change("Advanced Web Development");
        } else { // if they did something else entirely
            change("Godot Game Engine")
        }
    }
}

function change(act) {
    o = `The AI has chosen ${act} for you.`;
    let url = dict[act].url;
    txt.innerHTML = o + "<br>" + `Click <a href="${url}">here</a> for a link to the site or select any activity in <a href="${dict[act].purl}">${dict[act].path}</a>`;
    img.src = dict[act].img;
    a.href = dict[act].url;
}


// const receive = new URLSearchParams(window.location.search); //1
// const age = receive.get("age");//2
// const level = receive.get("level");//3
// let radio = undefined;
// if (level !== "1") {
//     radio = receive.get("radio");
// }//4
// const choice = receive.get("choice");//5
// let points = 0;



// // Main function to handle the logic
// function handleChoice(level, radio, choice) {
//     const txt = document.getElementById("txt");
//     const img = document.getElementById("img");
//     const a = document.getElementById("link");

//     // Helper function to update the text content
//     function updateText(message, link1, link2) {
//         txt.innerHTML = `${message}<br>Click <a href="${link1}">here</a> for Advanced Web Development and <a href="${link2}">here</a> for Data Science in <a href="https://code-cadets.getlearnworlds.com/coursesc">Software Developer C</a>.`;
//     }

//     // Helper function to change the course
//     function change(course) {
//         if (!dict[course]) {
//             console.error(`Course "${course}" not found in dictionary.`);
//             return;
//         }
//         const { url, img: imgSrc, path, purl } = dict[course];
//         txt.innerHTML = `The AI has chosen ${course} for you.<br>Click <a href="${url}">here</a> for a link to the site or select any activity in <a href="${purl}">${path}</a>.`;
//         img.src = imgSrc;
//         a.href = url;
//     }

//     // Main logic
//     if (level !== "1") {
//         if (radio === "5" || radio === "3") {
//             change("Data Science");
//         } else if (choice === "4") {
//             change("Data Science");
//         } else if (choice === "3" || choice === "5") {
//             change("Advanced Web Development");
//         } else {
//             updateText(
//                 "The AI has chosen Advanced Web Development and Data Science for you.",
//                 "https://code-cadets.getlearnworlds.com/course/agentbriefing",
//                 "https://code-cadets.getlearnworlds.com/course/space-invaders"
//             );
//         }
//     } else {
//         if (choice === "4") {
//             change("Data Science");
//         } else if (choice === "3" || choice === "5") {
//             change("Advanced Web Development");
//         } else {
//             updateText(
//                 "The AI has chosen Advanced Web Development and Data Science for you.",
//                 "https://code-cadets.getlearnworlds.com/course/agentbriefing",
//                 "https://code-cadets.getlearnworlds.com/course/space-invaders"
//             );
//         }
//     }
// }

// // Call the function
// handleChoice(level, radio, choice);

// // NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! I hate ai.