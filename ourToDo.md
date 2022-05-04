# File Structure and Props Todos

## Refactor component structure
  - [x] create 'components', 'pages' and 'layout' folders with index.js files - what is meant to go in pages?
  - [x] move FaveButton and its tests to own folder in 'components'

  - [ ] create a `News` component in 'pages' folder which has local state and renders:
  - [x] A `Greeting` component which has local state
  - [ ] A `ReaderCount` component which has local state -created
  - [ ] A `FeaturedArticle` component that receives `chosenArticle` as a prop -created
  - [ ] A `Headlines` component that receives `articles` and `handleArticleSelect` as props - created

- [ ] adjust App to render only `Header`, `News` and `Footer`

## Add new components
- [ ] create a basic `Header` layout component - created
- [ ] create a basic `Footer` layout component - created

## Update tests
**Header**: *New test*
- [ ] renders a nav tag

**Footer**: *New test*
- [ ] shows the copyright logo and futureproof name

**News**: *New test*
- [ ] loads with no featured article
- [ ] changes featured article when a article headline is clicked
  
**Greeting**: *Move existing tests*
- [ ] greets a user as 'friend' if no username given'
- [ ] does not change greeting whilst a user enters input
- [ ] greets a user by name if a username is given
- [ ] clears user input after submission

**ReaderCount**: *Move existing tests*
- [ ] increases reader count when "I've read!" button is clicked

**Headlines**: *Move and update existing tests*
- [ ] renders article headlines
- [ ] triggers `handleArticleSelect` prop when an article headline is clicked

**FeaturedArticle**: *New test*
- [ ] renders given article
