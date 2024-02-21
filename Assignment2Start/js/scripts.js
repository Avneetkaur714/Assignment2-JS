// constants for query selector
const studentIdElement = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const imageSelectElement = document.getElementById('imageSelect');
const imagesElement = document.getElementById('images');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = customNumberInput.value;
    const studentId = "YourStudentId"; // Replace with your student ID
    studentIdElement.textContent = 'Student ID: ' + studentId;

    // Change background color based on user input
    document.body.style.backgroundColor = getColorFromInput(userInput);
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;
    const studentId = "YourStudentId"; // Replace with your student ID
    studentIdElement.textContent = 'Student ID: ' + studentId;

    // Change background color based on random input
    document.body.style.backgroundColor = getColorFromInput(randomInput);
}

// function to generate options for select list
function addList() {
    const imageArray = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with your image names

    // Clear previous options
    imageSelectElement.innerHTML = '<option value="">Please choose…</option>';

    for (let i = 0; i < imageArray.length; i++) {
        const option = document.createElement('option');
        option.value = imageArray[i];
        option.text = imageArray[i];
        imageSelectElement.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelectElement.value;
    // Replace the following line with the correct path to your image folder
    const imagePath = 'img/' + selectedImage; 
    imagesElement.src = imagePath;
}

// Helper function to get color based on input range
function getColorFromInput(input) {
    if (input < 0 || input > 100) {
        return 'red';
    } else if (input >= 0 && input <= 20) {
        return 'green';
    } else if (input > 20 && input <= 40) {
        return 'blue';
    } else if (input > 40 && input <= 60) {
        return 'orange';
    } else if (input > 60 && input <= 80) {
        return 'purple';
    } else {
        return 'yellow';
    }
}

// event listeners for on click event of buttons and select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
imageSelectElement.addEventListener('click', addList);
imageSelectElement.addEventListener('change', changeImage);
