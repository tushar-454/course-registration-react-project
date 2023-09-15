# <u>This is a assignment project ...</u>

## **Name:** _Course Registration._

#### Here I am giving all the questions answers.

**Question - 01 :** Add at least 3 Project features
**<u>Answer:</u>** Here It's a course registration website. Here user can react with website. In the bellow, I am giving some features,

- If the user click select button then add course title set total credit and change credit remaning at a time.
- The website will track how much credit the user has spent
- The User can see how many credits remaining
- Users can't add the same course multiple time, if do this toast error will be show
- Users can't more than 20 Credit Courses, if do this toast error will be show

---

**Question - 02 :** Discuss how you managed the state in your assignment project.
**<u>Answer:</u>** First of all, I created a state for courses, total credit, total price and course title.

- Courses component I take a state and in this component I am using **useEffect()** for fetch data and set data in state.

- The Course title and credit have another component and the title and credit go to another component for showing.
  - So I created a state two component root directory.
  - For that, I can get state data and pass the handleState function in one component and also send the update state in another component.
  - So, when the user clicks a button and handleState call the setState() function calls with new data the state will be changed then the component re re-render with new data, and the data also be updated.
- Also in this project, I create another state for a total price
  - In this project, I managed the state the same as before. I create a state in the root directory and then the State function passes in handleState, here handleState takes some parameter value. So setTotalPrice state takes data from the parameter and updates the state. then I pass the update state in 2nd component to show up.

#### Yeah! Here I am managing my state in this project on way.
