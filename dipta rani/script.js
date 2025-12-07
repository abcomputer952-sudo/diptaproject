// const btn = document.getElementById("btn");

// btn.addEventListener("click", function (event) {
//     event.preventDefault();

//     console.log("This is JS");

//     const user = document.getElementById("username").value.trim();
//     const pass = document.getElementById("password").value.trim();
//     const cp = document.getElementById("confirmpassword").value.trim();
//     const num = document.getElementById("number").value.trim();

//     const userError = document.getElementById("user-error");
//     const passError = document.getElementById("pass-error");
//     const conError = document.getElementById("con-error");
//     const numrError = document.getElementById("num-error");

//     // clear previous errors
//     userError.innerHTML = "";
//     passError.innerHTML = "";
//     conError.innerHTML = "";
//     numrError.innerHTML = "";

//     // start assuming form is valid
//     let isValid = true;

//     // Username validation
//     if (user === "") {
//         userError.innerHTML = "Username cannot be empty";
//         isValid = false;
//     } else if (user.length < 3) {
//         userError.innerHTML = "Username cannot be less than 3 characters";
//         isValid = false;
//     }

//     // Password validation
//     if (pass === "") {
//         passError.innerHTML = "Password cannot be empty";
//         isValid = false;
//     } else if (pass.length < 3) {
//         passError.innerHTML = "Password cannot be less than 3 characters";
//         isValid = false;
//     }

//     // Confirm password validation
//     if (cp === "") {
//         conError.innerHTML = "Confirm password cannot be empty";
//         isValid = false;
//     } else if (cp !== pass) {
//         conError.innerHTML = "Passwords do not match";
//         isValid = false;
//     }

//     // Number validation
//     if (num === "") {
//         numrError.innerHTML = "Number cannot be empty";
//         isValid = false;
//     } else if (num.length < 3) {
//         numrError.innerHTML = "Number cannot be less than 3 digits";
//         isValid = false;
//     }

//     // ✅ Check overall validity
//     if (isValid) {
//         console.log("Form is valid. Submitting...");
//         // You can submit or reset form here
//         alert("Form submitted successfully!");
//     } else {
//         console.log("Form contains errors.");
//     }
// });



