<svg fill="none" viewBox="0 0 600 300" width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  <foreignObject x="0" y="0" width="600" height="300"> 
  <div xmlns="http://www.w3.org/1999/xhtml">
      <h1  align="center" >Automated Certificate Generation System</h1>
      <p align="center">certificate, make it easy.</p>
    </div>

---
<div>
  <h3>Table Of Contents</h3>
  <ol>
    <li>Project Overview</li>
    <li>Problem Statement</li>
    <li>Architecture Overview
      <ul>
        <li>Design Pattern</li>
        <li>Backend architecture</li>
        <li> Sequence Diagram </li>
      </ul>
    </li>
    <li>Project source code</li>
    <li>Tech Stack</li>
    <li>Guidelines</li>
    <li>Conclusion</li>
  </ol>
</div>

  ---
<div>
    <h3 font="bold">1. Project Overview</h3>
    <br>
    <p align="justify">
      This project aims to automate the generation of certificates for course completion or other achievements. It allows users to choose from predefined templates and either upload user details via an Excel file or manually input them. The system then generates certificates and automatically sends them to the respective user emails.
    </p>
</div>

---

<div>
  <h3>2. Problem Statement</h3>
  <p align="justify">
   In manual certificate generation processes, templates and signatures of authorized personnel are often susceptible to misuse. This project addresses that risk by ensuring that only authorized users have access to generate and manage certificates, thus maintaining data integrity and security.
  </p>
</div>
<div>
</div>

---

<div>
  <div>
    <h3>3. Architecture Overview</h3>
  </div>
  <div>
    <h4>🏗️ Design Pattern : MVC Architecture (Model View Controller)</h4>
     <ul>
      <li>View : User interacts with applications for generating the certificate</li>
      <li>Controller : Request from view will be redirected to business logic, manages the resources and provides response to view</li>
      <li>Model : Business Logic stands for performing all the operations on certificate, email, template & performing CRUD operations on it.</li>
    </ul>
    <div>
       <h4>🧩 Backend Architecture : Microservices</h4>
    </div>
  </div>

   | Title | Description |
   | ----  | ------------|    
   | Auth Services | Manages registeration, signin using OAuth google & aplication login / registeration services |
   | Certificate Services | CRUD operations on certificate (create \| read \| update \| delete) |
   | Mail Services | Sends the certificate via mails |
   | Template Services | Provides all the tamplates from database to user  |

<div>
  <h4>🧱 Sequence Diagram </h4>
</div>
<div>
  <img  src="https://github.com/Shwetha-75/image/blob/main/SequenceDiagramAutomatedCertifcateGenerationSystem.jpg?raw=true" alt=""/>
</div>
  
  ---
  <div>
    <h3>4. Project source code link 👇 </h3>
  </div>

  |Title | Code Link |
  | ---- | --------- |
  |View  | <a href="https://github.com/Shwetha-75/certify-view.git" target="_blank">View</a>
  |Certificate Services | <a href="https://github.com/Shwetha-75/CertificateApplication.git" target="_blank">Certificate Services</a> |

  ---

  <div>
    
  </div>
  <h3>5. Tech Stack</h3>
  
  |Phase | Tech |
  |------- |------|
  |Frontend| Reactjs |
  |Backend | Flask using python, OAuth Google SignIn | SignIn/SignUp |
  |Databse | supabase |
  |Testing | .rest, pytest, postman |
  |Deloyement | render, vercel|

  ---

  <div>
    <h3>6. Guidelines to deploy on local </h3>
  </div>
   <p>Clone the repositories</p>
   
   ~~~
    git clone https://github.com/Shwetha-75/certify-view.git
   ~~~
   ~~~
    git clone https://github.com/Shwetha-75/CertificateApplication.git
   ~~~

   <p>For view install lastest version & integrate it with vite (Optional : you can use any flavours of js and frameworks)</p>

   ~~~
     npm create vite@latest
   ~~~
   <p>Install node modules</p>

   ~~~
    npm i
   ~~~
   <p>For Backend services install the requirements.txt file, firstly set up the virtual env & activate it</p>

   ~~~
     pip install -r file_path(requirements.txt )
   ~~~

  ---
  
  <h3>Conclusion</h3>
  <div>
    <ul>
      <li>Contributors : Shwetha K (Design, Develeopment, Deployment)</li>
      <li>**Note : No fixed timeline, the project is under development.</li>
    </ul>
  </div>
 </div>
  </foreignObject>
</svg>
