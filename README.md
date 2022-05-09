# User Schema is created to define the user details
=> a user can have name,password,email,image as it's credentials

# Post Schema is created to define the user's post which is an image in this case
=> a post have reference to it's user, array of likes associate with that post done by multiple users,
   array of comments associate with that post done by multiple users

# Comment Schema is created to define the user's post which is an image in this case
=> a comment have reference to the user and that user's post, array of likes associate with that comments 
   done by multiple users

# Like Schema is created to define the user's post which is an image in this case
=> a like have reference to the owner of any post or comment and the post or comment itself.

