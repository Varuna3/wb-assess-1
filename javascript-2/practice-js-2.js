/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = 'Git is software that lets us interact with cloud repositories hosted by github. It allows us to pull down repositories from the cloud, push changes we make to repositories to the cloud, and is a very commonly used application to do group programming.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = 'GitHub is a service hosted by Microsoft that stores git repositories, and enables us to interface with those repositories using Git commands.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description: 'creates a .git folder with configuration files for git, turning the directory into a git repository.',
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: 'Downloads a repository from github, enabling us to make changes to the repository locally, save our changes, and eventually push them back to the cloud repository.',
    code: 'git clone git@github.com:exampleUser/exampleRepo'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: 'Shows us which files have changes made to them, which files are ready to be committed, and how many commits ahead/behind we are from the cloud repo.',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: 'Starts tracking the files listed after the command, and prepares the files to be committed.',
    code: 'git add -A'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: 'Commits all of the changes to the git repository, so that when you push your repo back to the cloud, your changes go up there.',
    code: 'git commit -m "(insert message here)"'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

const addRemote = {
    description: 'Tells git which cloud repository you want your local repo to track. You have to set an origin, or a remote, so git knows where to push and pull changes from.',
    code: 'git remote add origin git@github.com:exampleUser/exampleRepo.git'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: 'Pushes all of your committed changes from your local repo to the cloud repo.',
    code: 'git push -u origin main'
}
