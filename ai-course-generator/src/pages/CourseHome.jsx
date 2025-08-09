import Chapter from "../components/coursehome/Chapter";
const courseID = 0; 
// TODO: need to change this later to be dynamic

function CourseHome() {
    const dummyData = [{
        "courseTitle": "Introduction to Python Programming",
        "difficulty": "Beginner",
        "description": "This course provides a comprehensive introduction to Python, a versatile and beginner-friendly programming language. Learners will start with the fundamental concepts of programming, including data types, variables, and control flow. The course will then progress to more advanced topics such as functions, data structures, and object-oriented programming. The goal is to equip students with a solid foundation to write clear, efficient, and well-structured Python code for a wide range of applications.",
        "chapters": [
            {
            "chapterNumber": 1,
            "chapterTitle": "Python Fundamentals: Syntax and Data Types",
            "subtopics": [
                {
                "subtopicTitle": "Introduction to Python and Its Syntax",
                "explanation": "Python is a high-level, interpreted programming language known for its readability and simplicity. Its syntax is designed to be clear and intuitive, using English keywords and fewer punctuation marks than many other languages. This makes it an excellent choice for beginners. One of the most distinctive features of Python is its use of indentation to define code blocks, such as loops, functions, and conditional statements, instead of braces or other symbols. This forces a clean and consistent coding style. A basic Python program, often called 'Hello, World!', is a single line of code: `print('Hello, World!')`. Unlike languages like C++ or Java, you don't need a main function or class definition for this simple program. Python code is executed by an interpreter, which reads and executes the code line by line. This process allows for quick testing and debugging. Python supports various programming paradigms, including procedural, object-oriented, and functional programming. It has a vast standard library that provides modules and functions for a wide range of tasks, from web development to data analysis. The language is also cross-platform, meaning the same code can run on different operating systems like Windows, macOS, and Linux without modification. This combination of simplicity, versatility, and a strong community makes Python one of the most popular programming languages in the world, used by companies like Google, Netflix, and NASA.",
                "examples": [
                    "A simple print statement: `print('Welcome to Python!')`",
                    "An if-else statement with indentation: `if x > 5: \n    print('x is greater than 5') \nelse: \n    print('x is not greater than 5')`"
                ]
                },
                {
                "subtopicTitle": "Variables and Basic Data Types",
                "explanation": "In Python, a **variable** is a named storage location that holds a value. Variables are created the moment you first assign a value to them. Python is dynamically typed, meaning you don't need to declare the variable type explicitly. The interpreter infers the type from the value assigned. For example, `age = 30` creates an integer variable, and `name = 'Alice'` creates a string variable. Python has several built-in **data types** to store different kinds of data. **Numbers** include `int` (integers, e.g., 5), `float` (floating-point numbers, e.g., 5.0), and `complex` numbers. **Strings** (`str`) are sequences of characters enclosed in single or double quotes, e.g., `'hello'` or `\"Python\"`. Strings are immutable, meaning their content cannot be changed after creation. You can perform various operations on strings, such as concatenation (`'Hello' + ' ' + 'World'`) and slicing. **Booleans** (`bool`) represent one of two values: `True` or `False`, and are used for logical operations. You can also have special values like `None`, which represents the absence of a value. Understanding these basic data types is fundamental to writing any program, as they are the building blocks of all data manipulation. Python's dynamic typing and straightforward variable assignment make it very easy to get started, but it also requires a developer to be mindful of the data types they are working with to avoid errors.",
                "examples": [
                    "Creating an integer variable: `x = 10`",
                    "Creating a string variable: `greeting = 'Hello'`",
                    "Checking the type of a variable: `type(x)` would return `<class 'int'>`"
                ]
                },
                {
                "subtopicTitle": "Working with Operators and Expressions",
                "explanation": "Operators are special symbols that perform operations on values and variables. Python provides a rich set of operators, which are categorized into different types. **Arithmetic operators** are used for mathematical calculations: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `//` (floor division), `%` (modulo), and `**` (exponentiation). For example, `10 + 5` results in `15`, and `10 / 3` results in `3.333...`, while `10 // 3` results in `3`. **Comparison operators** are used to compare two values and return a Boolean result (`True` or `False`): `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to). For instance, `5 > 3` evaluates to `True`. **Logical operators** (`and`, `or`, `not`) are used to combine conditional statements. `(x > 5) and (y < 10)` is a single expression that is `True` only if both conditions are met. **Assignment operators** (`=`, `+=`, `-=`, etc.) are used to assign values to variables. `x += 5` is a shorthand for `x = x + 5`. An **expression** is a combination of values, variables, operators, and function calls that the Python interpreter evaluates to a single value. Understanding operator precedence (the order in which operations are performed) is crucial for writing correct expressions. For example, in `2 + 3 * 4`, the multiplication is performed before the addition, resulting in `14`. Parentheses `()` can be used to override this order. Mastering operators and expressions is a fundamental skill for building any program, as they are the tools used to perform calculations and make decisions within the code.",
                "examples": [
                    "Using arithmetic operators: `result = 25 * 4 / 2` (result is 50.0)",
                    "Using comparison and logical operators: `is_adult = (age >= 18) and (has_id == True)`"
                ]
                }
            ],
            "chapterSummary": "Chapter 1 introduced the foundational concepts of Python programming. We began with an overview of Python's simple, indentation-based syntax and its role as a beginner-friendly, interpreted language. We then explored the essential concepts of variables and basic data types, including numbers, strings, and booleans, which are the building blocks for all data in Python. Finally, we covered the various types of operators and expressions used for performing calculations and making logical comparisons, a key step in controlling program behavior.",
            "quiz": [
                {
                "question": "Which of the following is a key feature of Python's syntax?",
                "options": [
                    "Use of semicolons to end statements",
                    "Strict requirement for braces to define code blocks",
                    "Use of indentation to define code blocks",
                    "Mandatory declaration of variable types"
                ],
                "type": "mcq",
                "answer": "Use of indentation to define code blocks"
                },
                {
                "question": "What is the data type for the value 'Hello, World!'?",
                "type": "one-word",
                "answer": "String"
                },
                {
                "question": "In Python, what is the value `True`'s data type?",
                "type": "one-word",
                "answer": "Boolean"
                },
                {
                "question": "Which operator is used for exponentiation?",
                "options": [
                    "/",
                    "%",
                    "**",
                    "//"
                ],
                "type": "mcq",
                "answer": "**"
                },
                {
                "question": "What is the result of the expression `10 // 3`?",
                "type": "one-word",
                "answer": "3"
                },
                {
                "question": "What is the primary purpose of a variable in programming?",
                "type": "one-word",
                "answer": "Storage"
                },
                {
                "question": "Which operator means 'not equal to'?",
                "options": [
                    "==",
                    "=",
                    "!= ",
                    "<>"
                ],
                "type": "mcq",
                "answer": "!="
                },
                {
                "question": "An expression combines values, variables, and what else?",
                "type": "one-word",
                "answer": "Operators"
                },
                {
                "question": "What does Python use to define code blocks?",
                "type": "one-word",
                "answer": "Indentation"
                },
                {
                "question": "Which of these is not a number data type in Python?",
                "options": [
                    "int",
                    "float",
                    "double",
                    "complex"
                ],
                "type": "mcq",
                "answer": "double"
                }
            ]
            },
            {
            "chapterNumber": 2,
            "chapterTitle": "Control Flow and Data Structures",
            "subtopics": [
                {
                "subtopicTitle": "Conditional Statements: `if`, `elif`, `else`",
                "explanation": "In programming, **control flow** refers to the order in which statements are executed. One of the most fundamental ways to control program flow is through **conditional statements**, which allow a program to make decisions and execute different code blocks based on whether a condition is true or false. In Python, the primary conditional statement is the `if` statement. The basic syntax is `if condition: code_block`. If the condition evaluates to `True`, the indented code block is executed. If it's `False`, the code block is skipped. You can extend this logic with the `else` statement, which provides an alternative code block to be executed when the `if` condition is `False`. The syntax becomes `if condition: code_block_if_true else: code_block_if_false`. For situations with multiple possible conditions, Python offers the `elif` (short for 'else if') statement. This allows you to check a series of conditions in order. The first `elif` condition that evaluates to `True` will have its corresponding code block executed, and the rest will be skipped. You can have any number of `elif` clauses. The full structure looks like this: `if condition1: ... elif condition2: ... else: ...`. It is important to remember that only one of these blocks will ever be executed. The `if` statement is a cornerstone of programming logic, enabling programs to react dynamically to different inputs and states. The indentation-based structure ensures that the code's logic is visually clear and easy to follow. Mastery of conditional statements is essential for building any program that requires decision-making capabilities, from simple user input validation to complex algorithms.",
                "examples": [
                    "Simple `if` statement: `if score >= 90: \n    print('You got an A!')`",
                    "Using `if`, `elif`, and `else`: `if age < 13: \n    print('Child') \nelif age < 20: \n    print('Teenager') \nelse: \n    print('Adult')`"
                ]
                },
                {
                "subtopicTitle": "Loops: `for` and `while`",
                "explanation": "Loops are another crucial aspect of control flow, allowing a program to repeat a block of code multiple times. Python has two main types of loops: `for` loops and `while` loops. The **`for` loop** is used to iterate over a sequence (such as a list, tuple, dictionary, or string) or any other iterable object. The syntax is `for item in sequence: code_block`. The `for` loop will execute the code block once for each item in the sequence. For example, `for number in [1, 2, 3]: print(number)` would print `1`, then `2`, then `3`. A common use of the `for` loop is with the `range()` function, which generates a sequence of numbers, like `for i in range(5): print(i)` which prints numbers from 0 to 4. The **`while` loop** is used to execute a block of code as long as a certain condition is `True`. The syntax is `while condition: code_block`. The loop will continue to run until the condition becomes `False`. It's important to ensure that the condition will eventually become `False` to avoid an **infinite loop**. For example, a `while` loop can be used to process user input until a specific keyword is entered. Both loops can be controlled using `break` and `continue` statements. The **`break`** statement exits the loop entirely, while the **`continue`** statement skips the current iteration and moves to the next one. Understanding which type of loop to use is key: a `for` loop is typically used when you know the number of iterations in advance or are iterating over a fixed collection, while a `while` loop is used when the number of iterations is not known beforehand, and the loop depends on a specific condition being met. ",
                "examples": [
                    "A `for` loop over a list: `fruits = ['apple', 'banana']; for fruit in fruits: print(fruit)`",
                    "A `while` loop that counts to 5: `count = 0; while count < 5: \n    print(count) \n    count += 1`"
                ]
                },
                {
                "subtopicTitle": "Core Data Structures: Lists, Tuples, Dictionaries, and Sets",
                "explanation": "Beyond the basic data types, Python provides several built-in **data structures** for organizing and storing collections of data. A **list** is an ordered, mutable collection of items. Lists are created using square brackets `[]`, and items can be of different data types. For example, `my_list = [1, 'hello', 3.14]`. Lists are highly flexible, allowing you to add, remove, and modify elements. A **tuple** is similar to a list but is **immutable**, meaning its contents cannot be changed after creation. Tuples are created using parentheses `()`, e.g., `my_tuple = (1, 2, 'three')`. Their immutability makes them useful for data that should not be altered, and they can be slightly more efficient than lists. A **dictionary** is an unordered collection of key-value pairs. Dictionaries are created using curly braces `{}` and are highly optimized for retrieving data based on a key. For example, `person = {'name': 'Alice', 'age': 30}`. You access values using their keys, like `person['name']`. A **set** is an unordered collection of unique elements. Sets are useful for tasks involving membership testing and eliminating duplicate entries. They are also created using curly braces `{}` but contain single values, not key-value pairs, e.g., `my_set = {1, 2, 3}`. The ability to choose the right data structure for a given task is a crucial skill for any Python programmer, as each one has its own strengths and weaknesses. Mastering these four core data structures is a significant step toward writing more powerful and efficient programs.",
                "examples": [
                    "A list of numbers: `numbers = [10, 20, 30]`",
                    "A dictionary with a person's information: `user = {'id': 1, 'username': 'Pythonista'}`"
                ]
                }
            ],
            "chapterSummary": "Chapter 2 explored the foundational concepts of control flow and core data structures. We learned about conditional statements like `if`, `elif`, and `else` for making decisions in our code. We then covered loops, including the `for` loop for iterating over sequences and the `while` loop for repeating code based on a condition. Finally, we were introduced to Python's essential data structures: lists (mutable sequences), tuples (immutable sequences), dictionaries (key-value pairs), and sets (unique, unordered elements), understanding when to use each for effective data management.",
            "quiz": [
                {
                "question": "Which keyword is used to provide an alternative code block in an `if` statement?",
                "type": "one-word",
                "answer": "else"
                },
                {
                "question": "What type of loop is used to iterate over a sequence of items?",
                "type": "one-word",
                "answer": "for"
                },
                {
                "question": "Which data structure is an ordered, mutable collection of items?",
                "type": "one-word",
                "answer": "List"
                },
                {
                "question": "Which keyword is used to handle multiple conditions in an `if` statement?",
                "options": [
                    "else",
                    "elif",
                    "then",
                    "while"
                ],
                "type": "mcq",
                "answer": "elif"
                },
                {
                "question": "What is the result of `range(3)`?",
                "options": [
                    "A list of [0, 1, 2, 3]",
                    "A tuple of (0, 1, 2)",
                    "An iterable object representing the sequence 0, 1, 2",
                    "The number 3"
                ],
                "type": "mcq",
                "answer": "An iterable object representing the sequence 0, 1, 2"
                },
                {
                "question": "Which statement is used to exit a loop entirely?",
                "type": "one-word",
                "answer": "break"
                },
                {
                "question": "What is the key characteristic of a tuple?",
                "type": "one-word",
                "answer": "Immutability"
                },
                {
                "question": "Which data structure uses key-value pairs?",
                "options": [
                    "List",
                    "Tuple",
                    "Dictionary",
                    "Set"
                ],
                "type": "mcq",
                "answer": "Dictionary"
                },
                {
                "question": "What does a `while` loop continue to do as long as its condition is?",
                "type": "one-word",
                "answer": "True"
                },
                {
                "question": "What is the primary feature of a set?",
                "type": "one-word",
                "answer": "Uniqueness"
                }
            ]
            },
            {
            "chapterNumber": 3,
            "chapterTitle": "Functions and Modularity",
            "subtopics": [
                {
                "subtopicTitle": "Defining and Calling Functions",
                "explanation": "A **function** in Python is a reusable block of code that performs a specific task. Functions help organize code, making it more modular, readable, and easier to maintain. They are a core concept in all programming languages. To define a function in Python, you use the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`. The code block for the function must be indented. Functions can optionally accept input values, known as **arguments** or **parameters**, which are specified within the parentheses. They can also return a value using the `return` statement. The basic syntax is: `def function_name(parameters): \n    \"\"\"Docstring explaining the function\"\"\" \n    # Function code block \n    return result`. The docstring is a string literal that describes the function's purpose and is a best practice for code documentation. To execute the code inside a function, you must **call** it by its name followed by parentheses. If the function expects arguments, you must provide them when calling it. For example, if you define `def greet(name): print(f'Hello, {name}')`, you would call it with `greet('Alice')`. Functions can also return a value, which can then be stored in a variable or used in an expression. For instance, `def add(a, b): return a + b`. You would call this as `result = add(5, 3)`, and `result` would be `8`. Functions are essential for breaking down complex problems into smaller, manageable pieces, and they promote the concept of **Don't Repeat Yourself (DRY)** by allowing you to reuse the same code block multiple times.",
                "examples": [
                    "A function that greets a person: `def greet(name): \n    print(f'Hello, {name}!') \n\ngreet('Bob')`",
                    "A function that returns a calculation: `def square(x): \n    return x * x \n\narea = square(4)`"
                ]
                },
                {
                "subtopicTitle": "Arguments and Parameters",
                "explanation": "Understanding how to pass data to and from functions is crucial. The terms **parameter** and **argument** are often used interchangeably, but they have a subtle distinction. A **parameter** is the variable listed inside the parentheses in the function definition, e.g., `name` in `def greet(name):`. An **argument** is the actual value passed to the function when it is called, e.g., `'Alice'` in `greet('Alice')`. Python supports several ways of passing arguments. **Positional arguments** are the most common; they are passed in the same order as their corresponding parameters. For example, `def power(base, exponent): ...` would require you to call it as `power(2, 3)`. **Keyword arguments** are passed by explicitly naming the parameter. This allows you to pass arguments in any order and makes the function call more readable. `power(exponent=3, base=2)` is a valid keyword argument call. You can also define **default arguments**, which are parameters that have a default value if no argument is provided. For example, `def greet(name, message='Hello'): ...`. If you call `greet('Bob')`, the `message` will be 'Hello'. **Arbitrary arguments** (`*args` for non-keyword arguments and `**kwargs` for keyword arguments) allow a function to accept a variable number of arguments. This is useful when you don't know in advance how many arguments will be passed to your function. Mastering these different ways of handling arguments gives you a lot of flexibility and control over how your functions are used. It allows you to create versatile functions that can be adapted to a variety of situations without needing to write a separate function for each case.",
                "examples": [
                    "Function with positional arguments: `def divide(a, b): return a / b; divide(10, 2)`",
                    "Function with a default argument: `def say_hello(name, lang='en'): ...; say_hello('Alex', 'es')`"
                ]
                },
                {
                "subtopicTitle": "Modules and Packages",
                "explanation": "As programs grow in size, it becomes impractical to keep all the code in a single file. This is where **modularity** comes in, and in Python, it's implemented using **modules** and **packages**. A **module** is simply a Python file (`.py` file) that contains Python code, such as functions, classes, and variables. To use the code from a module, you need to import it using the `import` keyword. For example, if you have a file named `calculator.py` with an `add` function, you can use it in another file by writing `import calculator` and then calling the function as `calculator.add(5, 3)`. You can also import specific functions or variables from a module using `from module_name import function_name`. This allows you to use the function directly without the module prefix, like `from calculator import add; add(5, 3)`. A **package** is a way of organizing related modules into a directory hierarchy. A package directory must contain a special file named `__init__.py` (which can be empty) to be recognized as a package. Packages allow for better organization of larger projects and prevent name conflicts. For example, if you have a `geometry` package with `shapes.py` and `colors.py` modules inside it, you can import them as `from geometry import shapes`. Python's standard library is a collection of built-in modules and packages that come with the language installation, providing tools for everything from mathematical operations to file handling. The ability to import and reuse code from modules and packages is a cornerstone of modern software development, enabling collaboration and the creation of large, maintainable applications.",
                "examples": [
                    "Importing the `math` module: `import math; print(math.sqrt(16))`",
                    "Importing a specific function: `from random import randint; print(randint(1, 10))`"
                ]
                }
            ],
            "chapterSummary": "Chapter 3 focused on the crucial concepts of functions and modularity. We began by learning how to define and call functions using the `def` keyword, understanding how they help organize and reuse code. We then explored the different ways to pass data to functions through arguments, including positional, keyword, and default arguments. Finally, we learned about modules and packages, which allow us to organize our code into separate files and directories, promoting better code structure and reusability through the `import` statement.",
            "quiz": [
                {
                "question": "Which keyword is used to define a function in Python?",
                "type": "one-word",
                "answer": "def"
                },
                {
                "question": "What is a reusable block of code that performs a specific task called?",
                "type": "one-word",
                "answer": "Function"
                },
                {
                "question": "What is the name for the values a function expects as input in its definition?",
                "type": "one-word",
                "answer": "Parameters"
                },
                {
                "question": "What is the purpose of the `return` statement in a function?",
                "options": [
                    "To print a value to the console",
                    "To terminate the function without a value",
                    "To send a value back to the caller",
                    "To define a new variable"
                ],
                "type": "mcq",
                "answer": "To send a value back to the caller"
                },
                {
                "question": "Which of the following is a Python file that contains code and can be imported?",
                "options": [
                    "A package",
                    "A module",
                    "A library",
                    "A class"
                ],
                "type": "mcq",
                "answer": "A module"
                },
                {
                "question": "Which keyword is used to bring a module into your current file?",
                "type": "one-word",
                "answer": "import"
                },
                {
                "question": "What is the term for an actual value passed to a function when it is called?",
                "type": "one-word",
                "answer": "Argument"
                },
                {
                "question": "What does a package directory contain to be recognized as a package?",
                "type": "one-word",
                "answer": "__init__.py"
                },
                {
                "question": "Which type of argument allows you to pass a variable number of non-keyword arguments?",
                "options": [
                    "Keyword arguments",
                    "Default arguments",
                    "Arbitrary arguments",
                    "Positional arguments"
                ],
                "type": "mcq",
                "answer": "Arbitrary arguments"
                },
                {
                "question": "The string literal used to describe a function's purpose is called a _______________.",
                "type": "one-word",
                "answer": "Docstring"
                }
            ]
            },
            {
            "chapterNumber": 4,
            "chapterTitle": "Object-Oriented Programming (OOP) in Python",
            "subtopics": [
                {
                "subtopicTitle": "Introduction to OOP: Classes and Objects",
                "explanation": "**Object-Oriented Programming (OOP)** is a programming paradigm that uses 'objects' to design applications and computer programs. These objects are instances of **classes**, which act as blueprints. OOP focuses on bundling data and the functions that operate on that data into a single unit, which is the object. This approach helps in managing complex software by modeling real-world entities. A **class** is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that an object of that class will have. For example, a `Car` class might have attributes like `color` and `make`, and methods like `start_engine()` and `drive()`. To define a class in Python, you use the `class` keyword. The basic syntax is `class ClassName: \n    # class body`. An **object** is a specific instance of a class. When you create an object, you are instantiating the class. For example, `my_car = Car('blue', 'Toyota')` would create a new `Car` object named `my_car` with the color 'blue' and make 'Toyota'. The object `my_car` would then have access to the `start_engine()` and `drive()` methods defined in the `Car` class. A key concept in OOP is the special `__init__` method, which is a constructor. It is automatically called when a new object is created and is used to initialize the object's attributes. The `self` parameter in a method refers to the instance of the object itself. OOP promotes code reusability, organization, and a more intuitive way of thinking about program design, which is why it is so widely used in modern software development. ",
                "examples": [
                    "Defining a simple class: `class Dog: \n    def bark(self): \n        print('Woof!') \n\nmy_dog = Dog() \nmy_dog.bark()`"
                ]
                },
                {
                "subtopicTitle": "Attributes and Methods",
                "explanation": "In the context of OOP, **attributes** and **methods** are the core components of a class. **Attributes** are variables that belong to an object. They represent the state or properties of the object. For example, in a `Student` class, attributes could be `name`, `student_id`, and `major`. Attributes are defined within the class and are typically initialized in the `__init__` constructor method. You access an object's attributes using the dot notation, like `student1.name`. Attributes can be either **instance attributes** (specific to a particular object, like `student1.name`) or **class attributes** (shared by all objects of the class, like a `MINIMUM_GPA` constant). **Methods** are functions that belong to a class and define the behaviors of an object. They are defined just like regular functions but are placed inside the class definition and have `self` as their first parameter, which is a reference to the instance itself. For example, a `Student` class might have a method `get_gpa()` that returns the student's GPA or a `register_for_course()` method that modifies the student's enrolled courses. Methods are also called using dot notation, like `student1.get_gpa()`. The `self` parameter is automatically passed by Python when you call a method on an object. Understanding the distinction between attributes (the data) and methods (the behavior) is central to building effective object-oriented programs. This separation of concerns allows for the creation of well-structured and maintainable code, where the state and actions of an object are clearly defined.",
                "examples": [
                    "A class with attributes and a method: `class Circle: \n    def __init__(self, radius): \n        self.radius = radius \n    def area(self): \n        return 3.14 * self.radius * self.radius \n\ncircle1 = Circle(5) \nprint(circle1.radius) \nprint(circle1.area())`"
                ]
                },
                {
                "subtopicTitle": "Inheritance and Polymorphism",
                "explanation": "Two of the most powerful concepts in OOP are **inheritance** and **polymorphism**. **Inheritance** is a mechanism that allows a new class (**child class** or **subclass**) to inherit attributes and methods from an existing class (**parent class** or **superclass**). This promotes code reuse and creates a hierarchical relationship between classes. The child class can extend or modify the behavior of the parent class. For example, you could have a `Vehicle` parent class with a `drive()` method, and then a `Car` and `Motorcycle` child classes that inherit from `Vehicle`. The child classes can then have their own specific attributes and methods, like a `Car` having `num_doors`. To create a child class, you specify the parent class in parentheses in the class definition: `class ChildClass(ParentClass): ...`. The `super()` function is often used in the child class's `__init__` method to call the parent's constructor. **Polymorphism** (meaning 'many forms') is the ability of an object to take on many forms. In the context of inheritance, it means that a child class can override a method from its parent class to provide its own implementation. For example, both `Car` and `Motorcycle` might have a `drive()` method, but their implementations could be different. Polymorphism also allows a single function to operate on objects of different classes that are related by inheritance. For instance, a function that takes a `Vehicle` object as an argument can accept a `Car` object or a `Motorcycle` object, and the appropriate `drive()` method for that specific object will be called. Inheritance and polymorphism are key to building flexible and extensible programs, as they allow for the creation of a clean, logical structure for your code.",
                "examples": [
                    "Inheritance: `class Animal: \n    def speak(self): print('Animal sound') \nclass Dog(Animal): \n    def speak(self): print('Woof') \n\nmy_dog = Dog() \nmy_dog.speak()`"
                ]
                }
            ],
            "chapterSummary": "Chapter 4 provided an introduction to Object-Oriented Programming (OOP) in Python. We started by defining classes as blueprints and objects as instances of those classes, which bundle data and behavior. We then distinguished between attributes (data) and methods (functions) that belong to a class. Finally, we explored the core principles of inheritance, which allows classes to inherit from other classes, and polymorphism, which enables objects to take on different forms and allows for method overriding. These concepts are fundamental to building structured, reusable, and scalable applications.",
            "quiz": [
                {
                "question": "What is a class in Object-Oriented Programming?",
                "type": "one-word",
                "answer": "Blueprint"
                },
                {
                "question": "What is a specific instance of a class called?",
                "type": "one-word",
                "answer": "Object"
                },
                {
                "question": "What is the name for the functions that belong to a class?",
                "type": "one-word",
                "answer": "Methods"
                },
                {
                "question": "Which special method is automatically called when a new object is created?",
                "options": [
                    "__init__",
                    "__main__",
                    "__new__",
                    "__call__"
                ],
                "type": "mcq",
                "answer": "__init__"
                },
                {
                "question": "What is the term for the process where a child class inherits from a parent class?",
                "options": [
                    "Polymorphism",
                    "Encapsulation",
                    "Inheritance",
                    "Abstraction"
                ],
                "type": "mcq",
                "answer": "Inheritance"
                },
                {
                "question": "What is the name for the variables that belong to an object?",
                "type": "one-word",
                "answer": "Attributes"
                },
                {
                "question": "What is the first parameter of a method that refers to the instance itself?",
                "type": "one-word",
                "answer": "self"
                },
                {
                "question": "The ability of an object to take on many forms is called _______________.",
                "type": "one-word",
                "answer": "Polymorphism"
                },
                {
                "question": "How is a child class created in Python?",
                "options": [
                    "By using the 'new' keyword",
                    "By listing the parent class in parentheses",
                    "By using the 'inherit' keyword",
                    "By using the `super()` function"
                ],
                "type": "mcq",
                "answer": "By listing the parent class in parentheses"
                },
                {
                "question": "What is the key benefit of inheritance in OOP?",
                "type": "one-word",
                "answer": "Code reuse"
                }
            ]
            },
            {
            "chapterNumber": 5,
            "chapterTitle": "File Handling and Error Handling",
            "subtopics": [
                {
                "subtopicTitle": "Reading and Writing to Files",
                "explanation": "Interacting with files is a fundamental task in many applications. Python provides built-in functions for **file handling**, allowing you to read data from a file or write data to a file. The primary function for this is `open()`, which takes the filename and a mode as arguments. The mode specifies how the file will be used: `'r'` for reading (the default), `'w'` for writing (overwriting the file), `'a'` for appending (adding to the end of the file), and `'x'` for exclusive creation (failing if the file already exists). The best practice for handling files is to use the `with` statement, which ensures that the file is automatically closed, even if errors occur. The syntax is `with open('filename.txt', 'mode') as f: # code to read/write`. To **read from a file**, you can use methods like `f.read()` to read the entire content, `f.readline()` to read a single line, or `f.readlines()` to read all lines into a list. For example, `with open('data.txt', 'r') as f: content = f.read()`. To **write to a file**, you use methods like `f.write(string)` or `f.writelines(list_of_strings)`. For example, `with open('output.txt', 'w') as f: f.write('Hello, world!')`. When writing, the `'w'` mode will create the file if it doesn't exist or overwrite it if it does. If you want to add content without deleting the existing content, you would use the `'a'` (append) mode. Python's file handling capabilities are crucial for tasks like processing log files, storing application data, or generating reports. ",
                "examples": [
                    "Writing to a file: `with open('my_file.txt', 'w') as file: \n    file.write('This is a new line.')`",
                    "Reading from a file: `with open('my_file.txt', 'r') as file: \n    content = file.read() \n    print(content)`"
                ]
                },
                {
                "subtopicTitle": "Understanding and Handling Errors: `try` and `except`",
                "explanation": "When a program encounters an error that prevents it from running, it raises an **exception**. Examples of exceptions include a `NameError` if a variable is not defined, a `TypeError` if an operation is performed on an incompatible data type, or a `FileNotFoundError` if you try to open a file that doesn't exist. Instead of letting the program crash, you can use **error handling** to gracefully handle these exceptions. The primary tool for this in Python is the `try...except` block. The `try` block contains the code that might raise an exception. If an exception occurs within the `try` block, the program's execution jumps to the `except` block. The `except` block contains the code that will be executed to handle the error. The basic syntax is `try: \n    # Code that might raise an error \nexcept ExceptionType: \n    # Code to handle the error`. You can specify a particular `ExceptionType` to catch specific errors. For example, `except FileNotFoundError:`. If you don't specify an exception type, it will catch any error. It's also possible to have multiple `except` blocks to handle different types of exceptions. The `else` block can be included after all `except` blocks and will execute only if the code in the `try` block runs without any errors. The `finally` block is optional and is always executed, whether an exception occurred or not. It is often used for cleanup actions, such as closing a file. Proper error handling is essential for building robust and reliable applications that can handle unexpected situations without crashing. It allows your program to fail gracefully and continue running.",
                "examples": [
                    "Handling a `ZeroDivisionError`: `try: \n    result = 10 / 0 \nexcept ZeroDivisionError: \n    print('Cannot divide by zero!')`",
                    "Handling file-not-found errors: `try: \n    with open('non_existent.txt', 'r') as file: \n        content = file.read() \nexcept FileNotFoundError: \n    print('The file was not found.')`"
                ]
                },
                {
                "subtopicTitle": "The `with` Statement for Context Management",
                "explanation": "The **`with` statement** is a powerful and elegant feature in Python that simplifies the management of resources, such as files, database connections, and network sockets. It is part of Python's **context management protocol**. The primary benefit of using `with` is that it guarantees a resource is properly cleaned up, even if an exception occurs. When you use the `with` statement, a **context manager** is used to handle the setup and teardown of a resource. For example, when you open a file with `with open('file.txt', 'r') as f:`, the `open()` function is the context manager. When the `with` block is entered, the file is opened. When the block is exited, whether it's through normal execution or because of an error, the context manager's `__exit__` method is automatically called, which ensures the file is closed. This prevents common programming errors like leaving files open, which can lead to resource leaks and other issues. Prior to the `with` statement, you would have to use a `try...finally` block to ensure a file was closed, which is more verbose and less readable. The `with` statement is not limited to file handling; it can be used with any object that supports the context manager protocol, which includes many objects in the standard library and third-party libraries. This makes `with` a versatile tool for writing clean, safe, and efficient code. By automatically managing resources, it reduces the risk of errors and makes your code more reliable.",
                "examples": [
                    "Using `with` to ensure a file is closed: `with open('my_data.txt', 'w') as f: \n    f.write('Some data') \n# The file is now guaranteed to be closed.`"
                ]
                }
            ],
            "chapterSummary": "Chapter 5 focused on essential practices for building robust and reliable Python applications. We first covered file handling, learning how to read from and write to files using the `open()` function and the recommended `with` statement. We then delved into error handling, using `try`, `except`, and `finally` blocks to gracefully manage exceptions and prevent program crashes. Finally, we explored the `with` statement in more detail, understanding its role as a context manager to ensure resources are properly cleaned up, which is a best practice for writing safe and efficient code.",
            "quiz": [
                {
                "question": "What is the default mode for the `open()` function?",
                "type": "one-word",
                "answer": "'r'"
                },
                {
                "question": "Which block is used to handle code that might raise an exception?",
                "type": "one-word",
                "answer": "try"
                },
                {
                "question": "Which of the following is an advantage of using the `with` statement for file handling?",
                "options": [
                    "It makes the file read-only",
                    "It automatically closes the file",
                    "It speeds up file operations",
                    "It prevents all errors"
                ],
                "type": "mcq",
                "answer": "It automatically closes the file"
                },
                {
                "question": "Which mode is used to write to a file, overwriting its contents if it exists?",
                "type": "one-word",
                "answer": "'w'"
                },
                {
                "question": "The `except` block is executed only if an exception is raised in the `try` block. True or False?",
                "options": [
                    "True",
                    "False"
                ],
                "type": "mcq",
                "answer": "True"
                },
                {
                "question": "The `finally` block is always executed, whether an exception occurred or not. True or False?",
                "type": "one-word",
                "answer": "True"
                },
                {
                "question": "What is a `FileNotFoundError` an example of?",
                "type": "one-word",
                "answer": "Exception"
                },
                {
                "question": "Which method reads all lines from a file into a list?",
                "options": [
                    "read()",
                    "readline()",
                    "readlines()",
                    "getlines()"
                ],
                "type": "mcq",
                "answer": "readlines()"
                },
                {
                "question": "Which keyword is used to append to a file?",
                "type": "one-word",
                "answer": "'a'"
                },
                {
                "question": "What does a `try...except` block do?",
                "type": "one-word",
                "answer": "Handles errors"
                }
            ]
            }
        ]
        }]
    
    let currentCourse = dummyData[courseID]
    
    return <>
        <h1>Welcome to {currentCourse.courseTitle}!!</h1>
        {/* list of chapters */}
        <div className="chapter-list">
            <h2>Chapters:</h2>
            {currentCourse.chapters.map((chapter, id)=>(
                <Chapter key={id} chapter={chapter}></Chapter>
            ))}
        </div>
    </>
}

export default CourseHome;