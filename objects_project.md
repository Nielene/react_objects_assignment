(references:
  notesJS+HTML/class01162019-ReactObjectsArrays
  notesJS+HTML/class01172019-react-todos-1
  forms3 instructions: https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/react/forms_3/forms_3.md
  )

# Expand Your Blog

Remember the blog project from our Props lesson? You might have noticed something missing- we can't create a new post! Let's fix that.

## Remembering Where We Left Off

Okay. So, our blog project left us with three components- `App`, which is our stateful component, `Feed`, which accepts posts as props and renders them, and `Post`, which accepts a single post.

We gave you an array of posts to serve as seed data- take a look at that array and see what key-value pairs each post has. It's pretty simple. We have an `id`, a `title`, and a `body`.

When we render our Feed component, we're rendering each of these five posts on the page.

## Making A Form

Create a new component- let's call it `PostForm`. This form is going to be a child of our Feed component, but it's going to get props from our App component, passed down two levels. It's going to show two text inputs (`title` and `body`) and a Submit button.

Our PostForm should accept four props. Two are data points (`postTitle` and `postBody`) that represent two new parts of state in the App component and control the two `text` inputs in our form. One (`handleTextChange`) is a function, defined in our App component, that allows our `text` inputs to update the top-level state. The last one (`handleSubmit`) is a function that uses our user's input to add a new post to our list of blog posts we're storing in App's state.

Let's make sure we prioritize two things:

- Let's validate our inputs by making sure the user input something into both text inputs. If there is no text in either input, display an error message to the user.
- Make our form accessible by wrapping it in a `form` tag and making the Submit button an `input` tag.

## Positioning/Styling Our Form

Once you've made your form, style it to your liking and position it above your list of Posts in your Feed. Make sure that the `body` text input is substantially larger than the `title` input!

When your user submits a new Post, it should immediately appear at the top of your list.
