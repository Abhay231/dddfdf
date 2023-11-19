let apiUrl = 'https://api.recruitcrm.io/v1/jobs/search';
const apiToken = '7ph7atKWpBgK5rQQDbd1alptL2UiQ1vusYTB8hb8B6UP7bLKmb2qt3HRjScQa9nunJuI5cdhpqU0kyVrzHm5TF8xNjk3MDMyNDU2';

async function renderDetailedJob(jobId) {
    try {
        const detailedJob = await getDetailedJobInfo(jobId);
        console.log(detailedJob[0].name);
        // Populate job details
        document.getElementById('jobTitle').innerText = detailedJob[0].name;
        document.getElementById('jobCategory').innerText = detailedJob[0].job_category;
        document.getElementById('jobCountry').innerText = detailedJob[0].country;

        // Populate job description
        const jobDescriptionContainer = document.getElementById('job-description');
        jobDescriptionContainer.innerHTML = `
            <h2>Job Description:</h2>
            <p>${detailedJob[0].job_description_text}</p>
            
        `;

        // Populate application form
        // const applicationFormContainer = document.getElementById('applicationFormContainer');
        // applicationFormContainer.innerHTML = `
        //     <form id="jobApplicationForm" onsubmit="submitApplicationForm('${jobId}'); return false;">
        //         <div class="input">
        //             <input type="text" placeholder="First Name" id="firstName" required>
        //         </div>
        //         <div class="input">
        //             <input type="text" placeholder="Last Name" id="lastName" required>
        //         </div>
        //         <div class="input">
        //             <input type="email" placeholder="Email" id="email" required>
        //         </div>
        //         <div class="input">
        //             <input type="tel" placeholder="Phone Number" id="phoneNumber" required>
        //         </div>
        //         <div class="input">
        //             <input type="text" placeholder="City" id="city" required>
        //         </div>
        //         <div class="input">
        //             <label for="resume">Upload Resume</label>
        //             <input type="file" id="resume" required>
        //         </div>

        //         <button type="submit" class="btn">Apply Now</button>
        //     </form>
        // `;
    } catch (error) {
        console.error('Error fetching detailed job information:', error);
    }
}
const urlParams = new URLSearchParams(window.location.search);


const jobId = urlParams.get('job_slug');


console.log('Job ID:', jobId);
renderDetailedJob(jobId);




async function getDetailedJobInfo(jobId) {
    const apiUrl = `https://api.recruitcrm.io/v1/jobs/search?job_slug=${jobId}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + apiToken,
                'Content-Type': 'application/json'

            },

        });

        if (!response.ok) {
            throw new Error('Failed to fetch detailed job information');
        }

        const data = await response.json();
        console.log('Detailed Job Info:', data);

        return data.data;
    } catch (error) {
        console.error('Error fetching detailed job information:', error);
        throw error;
    }
}
function scrollToApplyForm() {

    var applyForm = document.getElementById('applicationFormContainer');


    applyForm.scrollIntoView({ behavior: 'smooth' });
}


function validateJobApplicationForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const city = document.getElementById('city').value.trim();
    const resumeInput = document.getElementById('resume').value.trim();
    const resumeFile = resumeInput.files[0];
    if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || city === '' || resume === '') {
        alert('All fields are required');
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Invalid phone number format');
        return false;
    }

    if (!resumeFile) {
        alert('Please upload your resume');
        return false;
    }


    return true;
}

// async function submitDetailedJobApplication(jobId) {
//     // Validate the form before submission
//     const isFormValid = validateJobApplicationForm();

//     if (isFormValid) {
//         try {
//             // Implement your application submission logic here
//             const formData = {
//                 firstName: document.getElementById('firstName').value,
//                 lastName: document.getElementById('lastName').value,
//                 email: document.getElementById('email').value,
//                 city: document.getElementById('city').value,
//                 phone: document.getElementById('phoneNumber').value,
//                 resume: document.getElementById('resume').files[0],
//                 jobId: jobId,
//             };



//             // try {
//             //     // Step 1: Create Candidate Profile
//             //     const candidateProfileId = await createCandidateProfile(formData);

//             //     // Step 2: Apply to the Selected Job
//             //     await applyToJob(jobId, candidateProfileId);

//             //     alert('Application submitted successfully!');
//             // } catch (error) {
//             //     console.error('Error submitting job application:', error);
//             // }    
//             const createCandidateResponse = await createCandidateProfile(candidateData);

//             // Check if the candidate was created successfully
//             if (createCandidateResponse && createCandidateResponse.id) {
//                 const candidateId = createCandidateResponse.id;

//                 // Step 2: Apply for the Job
//                 const applyJobResponse = await applyToJob(candidateId, jobId);

//                 if (applyJobResponse && applyJobResponse.success) {
//                     alert('Application submitted successfully!');
//                 } else {
//                     throw new Error('Failed to apply for the job');
//                 }
//             } else {
//                 throw new Error('Failed to create candidate profile');
//             }
//         }
//         catch (error) {
//                 console.error('Error submitting job application:', error);
//         }
//     }
// 
// const rlParams = new URLSearchParams(window.location.search);


// const jobI = urlParams.get('job_slug');


// console.log('Job ID:', jobI);
// submitDetailedJobApplication(jobI);
async function submitDetailedJobApplication(jobId) {
    // Validate the form before submission
    const isFormValid = validateJobApplicationForm();
    console.log(document.getElementById('firstName').value);
    if (isFormValid) {
        // Create FormData object
        const formData = new FormData(document.getElementById('abcdc'));
        // formData.append('firstName', document.getElementById('firstName').value);
        // formData.append('lastName', document.getElementById('lastName').value);
        // formData.append('email', document.getElementById('email').value);
        // formData.append('city', document.getElementById('city').value);
        // formData.append('phone', document.getElementById('phoneNumber').value);
        // formData.append('resume', document.getElementById('resume').files[0]);
        // formData.append('jobId', jobId);

        console.log(formData);
        // console.log(document.getElementById('abcdc'));v
        try {
            // Step 1: Create Candidate Profile
            const candidateProfileId = await createCandidateProfile(formData);

            // Step 2: Apply to the Selected Job
            const applyJobResponse = await applyToJob(jobId, candidateProfileId);

            if (applyJobResponse.ok) {
                // Assuming the response contains relevant information
                const responseData = await applyJobResponse.json();

                // Check if the response indicates success
                if (responseData.success) {
                    alert('Application submitted successfully!');
                } else {
                    console.error('Failed to apply for the job. Response:', responseData);
                    // Display an error message or handle the error appropriately
                }
            } else {
                // Handle non-successful response (e.g., display an error message)
                console.error('Failed to apply for the job. Response:', applyJobResponse);
            }
        } catch (error) {
            console.error('Error submitting job application:', error);
            // Handle the error (e.g., display an error message)
        }
    }
}

    async function createCandidateProfile(formData) {
        const createProfileEndpoint = 'https://api.recruitcrm.io/v1/candidates';

        try {
            const response = await fetch(createProfileEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + apiToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    city: formData.city,
                    phone: formData.phone,
                    resume: formData.resume,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create candidate profile');
            }

            const data = await response.json();
            console.log('Candidate Profile Created:', data);

            return data.id; // Replace with the actual key for the candidate profile ID
        } catch (error) {
            console.error('Error creating candidate profile:', error);
            throw error;
        }
    }
    async function applyToJob(jobId, candidateProfileId) {
        const applyToJobEndpoint = 'https://api.recruitcrm.io/v1/candidates/{candidateProfileId}/apply';
        // const updatedBy = 123;

        try {
            const response = await fetch(`${applyToJobEndpoint}?job_slug=${jobId}&updated_by=${updatedBy}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + apiToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // job_slug: jobId,
                    candidateProfileId: candidateProfileId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to apply to the selected job');
            }

            const data = await response.json();
            console.log('Applied to Job:', data);
        } catch (error) {
            console.error('Error applying to job:', error);
            throw error;
        }
    }
    function printdata(){
        const formData = new FormData(document.getElementById('abcdc'));
       

        console.log(formData);
    }
