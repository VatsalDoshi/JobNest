[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/0wrsx4Jb)
# JOBNEST
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

![WhatsApp Image 2023-09-05 at 10 02 27](https://github.com/VatsalDoshi/JobNest/assets/114709734/58f88974-d437-4b76-8232-8ce8fed63529)







---
### Teams Members
```
Sneha Giranje: NUID 002785370 giranje.s@northeastern.edu
Aditi Jajoo: NUID 002725479 jajoo.a@northeastern.edu
Kinjal Bhatia: NUID 002776038 bhatia.kin@northeastern.edu
Vatsal Doshi: NUID 002776613 doshi.va@northeastern.edu
```
---
### Topic Description:
#### JobNest

“Stay on top of your job search with JobNest: The ultimate Job Application Management Tool”. JobNest is a web application that helps job seekers find suitable job opportunities and to keep a track of it. Candidates will register and authenticate themselves. Job seekers will be able to create an account and log in to the application. They will be able to search for job opportunities based on their preferences from the job posted by the recruiter. Recruiters will be able to post job openings. The application will provide analytics and insights on jobs selected by the candidate with which they can track their status and improve their performance.
The application will be built using modern web development technologies such as React, Node.js, MongoDB, and Express.

---
### Steps to run the application:
- Go to backend folder and type "npm install dependencies"
- After installation is completed type "npm run start"
- Then open a new terminal and go to frontend-jobnest folder -> jobnest and "type npm install dependencies" then execute "npm install @babel/helper-skip-transparent-expression-wrappers".
- After this type "npm run start" to start the cliend side react application.


### Milestones and User Stories

##### 1. Landing Page (User login and registration): Here recruiters can login and students can login as well as register in jobNest.
  ###### User Stories:
- Students will be able to create an account 
- Students will be able to login in to the website to keep a track of their jobs.

##### 2. Job Posting: This is for student to post the job they applied.
###### User Stories:
- Students can add the job they applied using a form.
- Students can view all the applied jobs in the Jobs section.


##### 3. Job Tracking: This is for students to track their selected jobs in an efficient way.
###### User Stories:
- Students will be able to view all their job applications and track their status (interviewed, pending, declined) so that they can stay organized.
- Students will be able to update the status of their applications and add notes or comments to each application so that I can keep track of their progress and follow up when necessary.


##### 4. Analytics and Reporting: Here reports will be displayed in bar chart and area chart format to students.
###### User Stories:
- Students will be able to view analytics and reports on their job search activity so that they can identify areas for improvement and adjust their strategy accordingly.
- The user will be able to track their applications in various locations.


So, in total there are 4 milestones which are:
1. Landing Page (User login and registration).
2. Job Posting
3. Job tracking
4. Analytics and Reporting.

---
###  Assigning the user stories to the team members
```
Milestone 1:
Userstory 1: User Account Creation: Sneha Giranje
Userstory 2: Login: Aditi
Userstory 3: Recruiter Login: Kinjal
```

```
Milestone 2:
Userstory 1: Add Jobs: Kinjal
Userstory 2: Apply to jobs and track them: Vatsal
Userstory 3: Apply to Jobs via form: Aditi and Sneha
```

```
Milestone 3:
Userstory 1: View Jobs: Kinjal and Vatsal
Userstory 2: Update Job Status: Sneha and Aditi
```
```
Milestone 4:
Userstory 1: View Job Analytics: Kinjal and Vatsal
Userstory 2: Track applications in various locations: Sneha and Aditi
```

### Object Model
![](./Object_Model.png)

---
### Identifying the REST API resources

##### Login page using REST API, the following resources might be required: 

- User resource: Used to store the user's login credentials, such as username and password, other information about the user, such as their email address, full name, or profile picture. 
- Authentication resource: Used to authenticate the user's credentials when they attempt to log in. The authentication resource might include endpoints for validating the user's username and password, generating authentication tokens or session IDs, and verifying that the user is still logged in. 
- Session resource: It is used to manage the user's session after they have logged in. It might include endpoints for retrieving the user's session information, updating the session information, and logging the user out.
- Error resource: Used to handle errors that occur during the login process. It might include endpoints for returning error messages or error codes to the client, or for logging errors on the server.


##### For registration page using a REST API, the following resources would be required: 
- User Resource: This resource is used to create a new user account. It should have the necessary fields such as name, email, password, etc. and should allow for the creation of new users. 
- Authentication Resource: Used to authenticate a user during the registration process. It should allow for the validation of the user's credentials and provide an authentication token for subsequent requests. 
- Profile Resource: Used to update the user's profile information after registration. It should allow for the modification of the user's personal details, such as their name, address, and other contact information. 

##### To execute a feature where students can view, select, track and analyze their job opportunities using a REST API, the following resources may be required: 
- Application resource: Along with job and student resources, authentication and authorization resource, this resource will be used to track the student's job applications and the status of each application, such as pending, accepted, or rejected.
This resource will also contain the location of each job application, such as the job board, company website, or other sources.
- Analytics resource: This resource will be used to generate reports and analytics on the student's job search activity, such as the number of applications submitted, the number of interviews received, and the number of job offers received.





              
          
                
              

































