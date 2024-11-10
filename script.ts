// Function to generate a unique URL based on the user's name
function generateUniqueURL(): void {
    // Get the user's name from the input field
    const userName = (document.getElementById('namefield') as HTMLInputElement).value;

    // Sanitize the user name (remove spaces, convert to lowercase)
    const sanitizedUserName = userName.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    // Create the unique URL
    const baseUrl = "https://yourdomain.com/user/"; // Replace with your actual domain
    const uniqueUrl = baseUrl + sanitizedUserName;

    // Display the generated unique URL
    const generatedUrlElement = document.getElementById('generated-url') as HTMLAnchorElement;
    if (generatedUrlElement) {
        generatedUrlElement.href = uniqueUrl;
        generatedUrlElement.innerText = uniqueUrl;
    }
}

// Function to add a new work experience field
function addNewWEField(): void {
    const container = document.getElementById('work-experience-fields') as HTMLDivElement;
    if (container) {
        const newField = document.createElement('textarea');
        newField.className = 'form-control WeField';
        newField.placeholder = 'Enter here';
        container.appendChild(newField);
    }
}

// Function to add a new academic qualification field
function addNewEQField(): void {
    const container = document.getElementById('academic-qualification-fields') as HTMLDivElement;
    if (container) {
        const newField = document.createElement('textarea');
        newField.className = 'form-control eqfield';
        newField.placeholder = 'Enter here';
        container.appendChild(newField);
    }
}

// Function to generate the CV
function generateCV(): void {
    // Get the input field values
    const urlfield = (document.getElementById("urlfield") as HTMLInputElement)?.value || "";
    const namefield = (document.getElementById("namefield") as HTMLInputElement)?.value || "";
    const contact = (document.getElementById("contact") as HTMLInputElement)?.value || "";
    const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
    const address = (document.getElementById("address") as HTMLTextAreaElement)?.value || "";
    const fbfield = (document.getElementById("fbfield") as HTMLInputElement)?.value || "";
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement)?.value || "";
    const insta = (document.getElementById("insta") as HTMLInputElement)?.value || "";
    const objective = (document.getElementById("objective") as HTMLTextAreaElement)?.value || "";

    // Update CV template
    const url = document.getElementById("url") as HTMLElement;
    const nameT2 = document.getElementById("nameT2") as HTMLElement;
    const contactT = document.getElementById("contactT") as HTMLElement;
    const emailT = document.getElementById("emailT") as HTMLElement;
    const addressT = document.getElementById("addressT") as HTMLElement;
    const fbT = document.getElementById("fbT") as HTMLElement;
    const linkT = document.getElementById("linkT") as HTMLElement;
    const instaT = document.getElementById("instaT") as HTMLElement;
    const objectiveT = document.getElementById("objectiveT") as HTMLElement;
    const weT = document.getElementById("weT") as HTMLElement;
    const aqT = document.getElementById("aqT") as HTMLElement;

    // Check if elements are found before updating their content
    if (url) url.innerText = urlfield;
    if (nameT2) nameT2.innerText = namefield;
    if (contactT) contactT.innerText = contact;
    if (emailT) emailT.innerText = email;
    if (addressT) addressT.innerText = address;
    if (fbT) fbT.innerText = fbfield;
    if (linkT) linkT.innerText = linkedin;
    if (instaT) instaT.innerText = insta;
    if (objectiveT) objectiveT.innerText = objective;
    if (weT) weT.innerHTML = formatList(getTextareaValues('work-experience-fields'));
    if (aqT) aqT.innerHTML = formatList(getTextareaValues('academic-qualification-fields'));
}

// Helper function to get values from textareas within a specific container
function getTextareaValues(containerId: string): string[] {
    const container = document.getElementById(containerId) as HTMLDivElement;
    if (container) {
        const textareas = container.querySelectorAll('textarea') as NodeListOf<HTMLTextAreaElement>;
        return Array.from(textareas).map(textarea => textarea.value.trim()).filter(value => value !== '');
    }
    return [];
}

// Helper function to format textarea input as a list
function formatList(items: string[]): string {
    return items.map(item => `<li>${item}</li>`).join('');
}

// Print CV function
function printCV(): void {
    window.print();
}

// Attach event listeners to buttons after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const addWEButton = document.querySelector('button[onclick="addNewWEField()"]') as HTMLButtonElement;
    const addEQButton = document.querySelector('button[onclick="addNewEQField()"]') as HTMLButtonElement;
    const generateCVButton = document.querySelector('button[onclick="generateCV()"]') as HTMLButtonElement;
    const printCVButton = document.querySelector('button[onclick="printCV()"]') as HTMLButtonElement;

    if (addWEButton) {
        addWEButton.addEventListener('click', addNewWEField);
    }

    if (addEQButton) {
        addEQButton.addEventListener('click', addNewEQField);
    }

    if (generateCVButton) {
        generateCVButton.addEventListener('click', generateCV);
    }

    if (printCVButton) {
        printCVButton.addEventListener('click', printCV);
    }
});

