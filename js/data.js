const data = [
    { slno: 1, title: 'AWS - Intro', category:'AWS', date: '29 July, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/aws-introduction'},
    { slno: 2, title: 'AWS - Cloud Concept', category:'AWS', date: '29 July, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/cloud-concepts'},
    { slno: 3, title: 'Typesript - Intro', category:'Typescript', date: '30 July, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/typescript-introduction'},
    { slno: 4, title: 'Data Structure with Js - Intro', category:'DSA', date: '31 July, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/data-structures-with-javascript---big-o'},
    { slno: 5, title: 'Sun Tzu’s The Art of War - Chapter 1', category:'The Art of War', date: '31 July, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/sun-tzus-the-art-of-war'},
    { slno: 6, title: 'Reddit Clone - 1', category:'Next Js', date: '1 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/reddit-clone-1'},
    { slno: 7, title: 'AWS - EC2 Instance 3', category:'AWS', date: '1 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/aws-ec-2-article-3'},
    { slno: 8, title: 'The Art of War - Chapter 2', category:'The Art of War', date: '2 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/sun-tzus-the-art-of-war-2'},
    { slno: 9, title: 'The Joy Of React - 1', category:'The Joy Of React', date: '2 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/the-joy-of-react---josh-w-comeau-1'},
    { slno: 10, title: 'Java Introduction', category:'Java', date: '3 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---introduction-1'},
    { slno: 11, title: 'Data Structure - O(n2)', category:'DSA', date: '4 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/dsa-lesson-2'},
    { slno: 12, title: 'Java - Lesson 2', category:'Java', date: '5 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---printing-and-comments-lesson-2'},
    { slno: 13, title: 'Java - Method Changed', category:'Java', date: '6 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-learning-method-changed'},
    { slno: 14, title: 'Java - Introduction Lesson - 3', category:'Java', date: '7 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-intro-brief---lesson-3'},
    { slno: 15, title: 'Java - Variable Lesson - 4', category:'Java', date: '8 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-variables-lesson-4'},
    { slno: 16, title: 'Java Data Type | Lesson  5', category:'Java', date: '9 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-data-type-lesson-5'},
    { slno: 17, title: 'Java - Type Casting | Lesson  6', category:'Java', date: '10 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-type-casting-lesson-6'},
    { slno: 18, title: 'Java - Operators (Unary) | Lesson 7', category:'Java', date: '11 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---operators-unary-lesson-7'},
    { slno: 19, title: 'Java - Operators Part - 2 | Lesson 8', category:'Java', date: '11 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---operators-part---2-lesson-8'},
    { slno: 20, title: 'Java - Operators Part - 3 Bitwise Operator | Lesson 9', category:'Java', date: '13 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---operator-part--3---bitwise-operator-lesson-9'},
    { slno: 21, title: 'Java - Java - Keywords | Lesson 10', category:'Java', date: '20 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java---keywords-lesson-10'},
    { slno: 22, title: 'Java Control Statements | Control Flow in Java | Lesson 11', category:'Java', date: '20 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-control-statements-control-flow-in-java-lesson-11'},
    { slno: 23, title: 'Java - Mistake and Revise | Lesson 12', category:'Java', date: '20 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-lesson-12-mistake-and-revise'},
    { slno: 24, title: 'Java - Literals | Lesson 13', category:'Java', date: '20 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-lesson-13-literals'},
    { slno: 25, title: 'Java - Switch Statement | Lesson 14', category:'Java', date: '24 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-lesson-14-switch-statement'},
    { slno: 26, title: 'Java - Loops | Lesson 15', category:'Java', date: '24 August, 2024', blogLink: 'https://starc-blogs-eac032.webflow.io/posts/java-lesson-15-loops'},
    { slno: 27, title: 'Git - Introduction | Lesson 1', category:'Git', date: '24 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/git---introduction-lesson---1'},
    { slno: 28, title: 'Git - Commits & Help | Lesson 2', category:'Git', date: '24 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/git---commits-lesson---2'},
    { slno: 29, title: 'Git - Branch | Lesson 3', category:'Git', date: '24 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/git---branch-lesson-3'},
    { slno: 30, title: 'Git - Branch Merge Lesson 4', category:'Git', date: '24 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/git---branch-merge-merge-conflict-and-delete-lesson---4'},
    { slno: 31, title: 'GitHub - Pull | Lesson -5', category:'Github', date: '24 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/github---pull-lesson--5'},
    { slno: 32, title: 'GitHub - Push & Branch | Lesson - 6', category:'Github', date: '25 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/github---push-branch-lesson---6'},
    { slno: 33, title: 'Pull Branch from GitHub | Lesson 7', category:'Github', date: '25 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/pull-branch-from-github-lesson-7'},
    { slno: 34, title: 'Push Branch to GitHub | Lesson 8', category:'Github', date: '25 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/push-branch-to-github-lesson-8'},
    { slno: 35, title: 'Java | Break | Lesson 16', category:'Java', date: '27 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-break-lesson-16'},
    { slno: 36, title: 'Java | Continue | Lesson 17', category:'Java', date: '27 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java---continue-lesson-17'},
    { slno: 37, title: 'Java OOPs Concepts | Lesson 18 | Chapter - 2', category:'Java', date: '29 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-oops-concepts-lesson-18-chapter---2'},
    { slno: 38, title: 'Java Naming Convention | Lesson 19', category:'Java', date: '31 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-naming-convention-lesson-19'},
    { slno: 39, title: 'Java Objects and Classes | Lesson 20', category:'Java', date: '31 August, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-objects-and-classes-lesson-20'},
    { slno: 40, title: '*Why we need learn different ways to Initialize object', category:'Java', date: '1 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/why-we-need-learn-different-ways-to-initialize-object-lesson-21'},
    { slno: 41, title: 'Java Constructors | Lesson 22', category:'Java', date: '1 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-constructors-lesson-22'},
    { slno: 42, title: 'Java Copy Constructor | Lesson 23', category:'Java', date: '3 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-copy-constructor-lesson-23'},
    { slno: 43, title: 'Java Method | Lesson 24', category:'Java', date: '7 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-method-lesson-24'},
    { slno: 44, title: 'Java Static keyword | Lesson 25', category:'Java', date: '7 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-static-keyword-lesson-25'},
    { slno: 45, title: 'Java this keyword | Lesson 26', category:'Java', date: '8 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-this-keyword-lesson-26'},
    { slno: 46, title: 'Java Inheritance | Lesson 27', category:'Java', date: '9 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-inheritance-lesson-27'},
    { slno: 47, title: 'Java Aggregation | Lesson 28', category:'Java', date: '9 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-aggregation-lesson-28'},
    { slno: 48, title: 'Best GitHub practice when working on a Codebase', category:'Git', date: '10 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/best-github-practice-when-working-on-a-codebase'},
    { slno: 49, title: 'Java Copy Constructor | Lesson 23', category:'Java', date: '12 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-copy-constructor-lesson-23'},
    { slno: 50, title: 'Java Method Overriding | Lesson 30', category:'Java', date: '17 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-method-overriding-lesson-30'},
    { slno: 51, title: 'Java Super Keyword | Lesson 31', category:'Java', date: '17 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-super-keyword-lesson-31'},
    { slno: 52, title: 'Java Instance initializer block | Lesson 32', category:'Java', date: '25 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-instance-initializer-block-lesson-32'},
    { slno: 53, title: 'Draw Lines | Lesson 1 | Chapter 1', category:'Drawing', date: '25 September, 2024', blogLink: 'https://starc-archive.webflow.io/posts/draw-lines-lesson-1-chapter-1'},
    { slno: 54, title: 'Reddit Clone | Part - 2 | Database Setup', category:'Reddit Clone', date: '7 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/reddit-clone-part---2-database-setup'}, 
    { slno: 55, title: 'Java Final Keyword | Lesson 33', category:'Java', date: '21 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-final-keyword-lesson-33'},
    { slno: 56, title: 'Java Polymorphism | Lesson 34', category:'Java', date: '21 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-polymorphism-lesson-34'},
    { slno: 57, title: 'Java Static Binding and Dynamic Binding | Lesson 35', category:'Java', date: '21 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-static-binding-and-dynamic-binding-lesson-35'},
    { slno: 58, title: 'Java instanceof | Lesson 36', category:'Java', date: '21 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-instanceof-lesson-36'},
    { slno: 59, title: 'Java Abstract class | Lesson 37', category:'Java', date: '23 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-abstract-class-lesson-37'},
    { slno: 60, title: 'Java Interface | Lesson 38', category:'Java', date: '23 october, 2024', blogLink: 'https://starc-archive.webflow.io/posts/java-interface-lesson-38'},
    { slno: 61, title: 'Basic Math for Checking Prime', category:'Math', date: '7 November, 2024', blogLink: 'https://starc-archive.netlify.app/post/RdOakFHFSqxP11HJAbHR'},
    { slno: 62, title: 'Data Structure | Linked List | Lesson 2', category:'DSA', date: '9 November, 2024', blogLink: 'https://starc-archive-fc09ee.webflow.io/posts/data-structure-ll-intro'},
    { slno: 63, title: 'Data Structure | Problem-Solving Pattern | Lesson 3', category:'DSA', date: '12 November, 2024', blogLink: 'https://starc-archive.webflow.io/posts/problem-solving-pattern-frequency-counter-pattern'},
    { slno: 64, title: 'Multiple Pointers Pattern | DSA Problem Solving Pattern Lesson 4', category:'DSA', date: '23 November, 2024', blogLink: 'https://starc-archive-fc09ee.webflow.io/posts/multiple-pointers-pattern-dsa-problem-solving-pattern'},
    { slno: 65, title: 'Sliding Window Pattern | DSA Lesson 5', category:'DSA', date: '23 November, 2024', blogLink: 'https://starc-archive-fc09ee.webflow.io/posts/sliding-window-pattern-dsa---problem-solving-pattern'},
];
