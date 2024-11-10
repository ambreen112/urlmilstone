// Function to generate a unique URL based on the user's name
function generateUniqueURL() {
    // Get the user's name from the input field
    var userName = document.getElementById('namefield').value;
    // Sanitize the user name (remove spaces, convert to lowercase)
    var sanitizedUserName = userName.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    // Create the unique URL
    var baseUrl = "https://yourdomain.com/user/"; // Replace with your actual domain
    var uniqueUrl = baseUrl + sanitizedUserName;
    // Display the generated unique URL
    var generatedUrlElement = document.getElementById('generated-url');
    if (generatedUrlElement) {
        generatedUrlElement.href = uniqueUrl;
        generatedUrlElement.innerText = uniqueUrl;
    }
}
// Function to add a new work experience field
function addNewWEField() {
    var container = document.getElementById('work-experience-fields');
    if (container) {
        var newField = document.createElement('textarea');
        newField.className = 'form-control WeField';
        newField.placeholder = 'Enter here';
        container.appendChild(newField);
    }
}
// Function to add a new academic qualification field
function addNewEQField() {
    var container = document.getElementById('academic-qualification-fields');
    if (container) {
        var newField = document.createElement('textarea');
        newField.className = 'form-control eqfield';
        newField.placeholder = 'Enter here';
        container.appendChild(newField);
    }
}
// Function to generate the CV
function generateCV() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Get the input field values
    var urlfield = ((_a = document.getElementById("urlfield")) === null || _a === void 0 ? void 0 : _a.value) || "";
    var namefield = ((_b = document.getElementById("namefield")) === null || _b === void 0 ? void 0 : _b.value) || "";
    var contact = ((_c = document.getElementById("contact")) === null || _c === void 0 ? void 0 : _c.value) || "";
    var email = ((_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.value) || "";
    var address = ((_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.value) || "";
    var fbfield = ((_f = document.getElementById("fbfield")) === null || _f === void 0 ? void 0 : _f.value) || "";
    var linkedin = ((_g = document.getElementById("linkedin")) === null || _g === void 0 ? void 0 : _g.value) || "";
    var insta = ((_h = document.getElementById("insta")) === null || _h === void 0 ? void 0 : _h.value) || "";
    var objective = ((_j = document.getElementById("objective")) === null || _j === void 0 ? void 0 : _j.value) || "";
    // Update CV template
    var url = document.getElementById("url");
    var nameT2 = document.getElementById("nameT2");
    var contactT = document.getElementById("contactT");
    var emailT = document.getElementById("emailT");
    var addressT = document.getElementById("addressT");
    var fbT = document.getElementById("fbT");
    var linkT = document.getElementById("linkT");
    var instaT = document.getElementById("instaT");
    var objectiveT = document.getElementById("objectiveT");
    var weT = document.getElementById("weT");
    var aqT = document.getElementById("aqT");
    // Check if elements are found before updating their content
    if (url)
        url.innerText = urlfield;
    if (nameT2)
        nameT2.innerText = namefield;
    if (contactT)
        contactT.innerText = contact;
    if (emailT)
        emailT.innerText = email;
    if (addressT)
        addressT.innerText = address;
    if (fbT)
        fbT.innerText = fbfield;
    if (linkT)
        linkT.innerText = linkedin;
    if (instaT)
        instaT.innerText = insta;
    if (objectiveT)
        objectiveT.innerText = objective;
    if (weT)
        weT.innerHTML = formatList(getTextareaValues('work-experience-fields'));
    if (aqT)
        aqT.innerHTML = formatList(getTextareaValues('academic-qualification-fields'));
}
// Helper function to get values from textareas within a specific container
function getTextareaValues(containerId) {
    var container = document.getElementById(containerId);
    if (container) {
        var textareas = container.querySelectorAll('textarea');
        return Array.from(textareas).map(function (textarea) { return textarea.value.trim(); }).filter(function (value) { return value !== ''; });
    }
    return [];
}
// Helper function to format textarea input as a list
function formatList(items) {
    return items.map(function (item) { return "<li>".concat(item, "</li>"); }).join('');
}
// Print CV function
function printCV() {
    window.print();
}
// Attach event listeners to buttons after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    var addWEButton = document.querySelector('button[onclick="addNewWEField()"]');
    var addEQButton = document.querySelector('button[onclick="addNewEQField()"]');
    var generateCVButton = document.querySelector('button[onclick="generateCV()"]');
    var printCVButton = document.querySelector('button[onclick="printCV()"]');
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
