# Project Submission By Bhargav Murarisetty

### Hackathon Announcement Date: 21-Feb-2020 
##### I tried to Learn JavaScript, NightWatchJS, Gain all knowledge i could in 4 days to Submit This Project.

##### My primary focus was on simplicity, Ease of use and Cover Todays Software Testing Needs. I tried to make it as generic and reusable as possible. In the worst case, you can use this as a learning guide for your projects.

### System and Software Requirements
1. Docker v17 and above.
2. Windows OS
3. Latest NodeJS Version
4. NightwatchJs V1.3.4

## What Makes this Framework Unique?
1. PAGE OBJECT MODEL 
2. DOCKER GRID Integrated for Parallel Execution in Different Browsers
3. CODE QUALITY Measurement with SonarQube Integration
4. Custom Commands For Ease of Use.
5. Azure DevOps Pipeline Connection

### What All Custom Commands are Created?
#### npm run 
    1. "test:vrt" : For Running Visual Regression Tests 
    2. "test:chrome" : For Running on Chrome Local Browser
    3. "zalenium:start" : Bring Zalenium UP on Port 4444
    4. "test:zalenium" : For Running on Docker Containers
    5. "zalenium:end" : Bring Zalenium DOWN
    6. "sonar:start" : Bring SONARQUBE UP
    7. "sonar:scan" : SCAN JAVASCRIPT Code for Quality Checks
    8. "sonar:end" : Bring SONARQUBE Down

### What Tests are Covered Under This Repo?

1. UI Test Cases
2. Visual Regression TestCase
3. Cucumber TestCase
4. Continuous Integration TestCase using AzureDevops CI
5. Parallel Executions in Docker Containers

### What All External Integrations are Covered?

1. ZAELENIUM GRID [Grid on Docker Containers]
2. SONARQUBE [Code Quality Checks]
3. DOCKERS [For Zalenium, and SonarQube]
4. Allure Reports
5. Azure Devops Pipelines

## What is  Visual Regression Testing (VRT)?
a.k.a Human Eye Testing, VRT is user-interface(UI) testing by capturing the screenshots of web pages/UI and compare them with the original images (either historical baseline screenshots or reference images from live website)

#### What Visual Regression Testing is covered
* upon running command [npm run test:vrt] tests downloads the logo of telus.com and compares with BaseLine Logo which is captured in previous runs. After that, It Compares Both the ScreenShot and Gives Us Result if it is the same as the baseline image or it is altered.