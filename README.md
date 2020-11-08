# Proyecto-Final-TestCafe 🚀
This is the final project to graduate from the testcafe course taught by QAmind-lab
You can find a series of exercises that simulates automated tests for an Ecommer
## Prerequisites 📋
### Install Visual Studio Code
for the Windows operating systems version, there is an executable that you only have to download on the main page of Vs
```
https://code.visualstudio.com/
```
### To install it on mac there is also an executable version
```
https://code.visualstudio.com/docs/?dv=osx
```
#### RHEL, Fedora, and CentOS based distributions
We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:
```
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```
```
sudo sh -c 'echo -e "[code] \ nname = Visual Studio Code \ nbaseurl = https: //packages.microsoft.com/yumrepos/vscode \ nenabled = 1 \ ngpgcheck = 1 \ ngpgkey = https: //packages.microsoft.com/keys/microsoft.asc "> /etc/yum.repos .d / vscode.repo '
```
Then update the package cache and install the package using dnf (Fedora 22 and above):
```
sudo dnf check-update
sudo dnf install code
```
Or on older versions using yum:
```
yum check-update
sudo yum install code
```
Due to the manual signing process and the system we use to publish, the yum repo may lag behind and not get the latest version of VS Code immediately.

#### Install node js on windows
for windows you just have to go to the page node js and click on the windows button to download the executable installer for your operating system
```
https://nodejs.org/es/download/
```
#### Install node js on Mac

We open our terminal and write:
```
brew install node
```
To ensure that have installed correctly we will write in the terminal:
```
node -v or npm -v
```
#### To install it in fedora 
```
sudo dnf install nodejs npm (I because I use fedora, you should look for the option for your operating system)
```
# Project installation 🔧
Download the project in a zip or you can is to clone it in the following way

HTTP 
```
https://github.com/fernandofedora/Proyecto_Final_TestCafe.git
```
SSH
```
git@github.com:fernandofedora/Proyecto_Final_TestCafe.git
```
# Running the tests ⚙️
Once the project is downloaded or cloned, you can open it with your favorite text editor , in this case we recommend that you use visual studio code.
Go into the root directory from your terminal and run the following code to run a test.
```
testcafe chrome home.js
```
# Built with 🛠️
* [JavaScript](https://www.javascript.com/)- Programming language used
* [Tescafe](https://devexpress.github.io/testcafe/)- The web framework used
## Versionin 📌
Version 1.0.2

## Authors ✒️
* **Fernando Espinoza** - *Initial Work* - [fnoel](https://github.com/fernandofedora)

## Important Note
the test to create a new account fails if run on two browsers simultaneously, the browsers take the same value from the randomly generated email, which generates an error because both browser process the same information and the same email to create a two they count differently.

if the test runs in the two browsers one after the other, then you will have no problem.
 
## License 📄
Copyright (c) 2018-2020 Fernando Espinoza Lopez.
Testcaf Course Practicese  Accounting is free libre open source software (FLOSS), licensed under the GNU General Public License version 3 (GPLv3), see the COPYING file or a copy at: https://www.gnu.org/licenses/gpl.txt

