from bson import ObjectId
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

load_dotenv()


mongo_user = os.getenv("mongodb_user")
mongo_pass = os.getenv("mongodb_pass")


uri = f'mongodb+srv://{mongo_user}:{mongo_pass}@w3s.0uerwtd.mongodb.net/?retryWrites=true&w=majority&appName=W3S'

def connect():
    global client
    global courses
    client = MongoClient(uri, server_api=ServerApi('1'))
    courses = client.Courses

    return client, courses


# course = {
#     "courseTitle": "Introduction to Python Programming",
#     "difficulty": "beginner",
#     "description": "A comprehensive introduction to the Python programming language, covering fundamental concepts, data structures, control flow, functions, and basic file handling. This course is designed for individuals with no prior programming experience.",
#     "chapters": [
#         {
#             "chapterNumber": 1,
#             "chapterTitle": "Getting Started with Python",
#             "subtopics": [
#                 {
#                     "subtopicTitle": "What is Python?",
#                     "explanation": "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming. Python is known for its extensive standard library and its clear, concise syntax, making it an excellent choice for beginners and experienced developers alike. It's widely used in web development, data science, artificial intelligence, and automation.",
#                     "examples": [
#                         "print('Hello, World!')"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Setting Up Your Python Environment",
#                     "explanation": "To start coding in Python, you need to install a Python interpreter and potentially a code editor or Integrated Development Environment (IDE). The most common way to get Python is to download it from the official Python website (python.org). During installation, it's crucial to check the option 'Add Python to PATH' to easily run Python from your command line. For writing and running code, you can use simple text editors like Notepad or Sublime Text, or more powerful IDEs like VS Code, PyCharm, or IDLE, which come bundled with Python.",
#                     "examples": [
#                         "On Windows: Download installer from python.org, run it, check 'Add Python to PATH'.",
#                         "On macOS: Use Homebrew (`brew install python`) or download from python.org.",
#                         "On Linux: Often pre-installed or installable via package manager (`sudo apt install python3`)."
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Basic Syntax and Variables",
#                     "explanation": "Python syntax is known for its readability. Statements are typically on a single line, and indentation is used to define blocks of code (like loops or functions), rather than braces. Variables in Python are created the moment you first assign a value to them. You don't need to declare the type of a variable explicitly; Python infers it. Variable names must start with a letter or an underscore, followed by any number of letters, numbers, or underscores. They are case-sensitive. Python supports various data types, including integers, floats, strings, and booleans.",
#                     "examples": [
#                         "message = \"Hello, Python!\"",
#                         "count = 10",
#                         "price = 19.99",
#                         "is_active = True"
#                     ]
#                 }
#             ],
#             "chapterSummary": "This chapter introduces Python as a programming language, guides users through setting up their development environment, and covers the foundational elements of Python syntax and variable declaration.",
#             "quiz": [
#                 {
#                     "question": "What is the primary design philosophy of Python?",
#                     "type": "mcq",
#                     "answer": "Code readability",
#                     "options": [
#                         "Code efficiency",
#                         "Code obfuscation",
#                         "Code readability",
#                         "Code security"
#                     ]
#                 },
#                 {
#                     "question": "Which official website should you use to download Python?",
#                     "type": "one-word",
#                     "answer": "python.org"
#                 },
#                 {
#                     "question": "What is used to define code blocks in Python?",
#                     "type": "one-word",
#                     "answer": "Indentation"
#                 },
#                 {
#                     "question": "Which of the following is NOT a valid Python variable name?",
#                     "type": "mcq",
#                     "answer": "2variable",
#                     "options": [
#                         "my_variable",
#                         "variable2",
#                         "_variable",
#                         "2variable"
#                     ]
#                 },
#                 {
#                     "question": "Is Python a statically or dynamically typed language?",
#                     "type": "one-word",
#                     "answer": "Dynamically"
#                 },
#                 {
#                     "question": "What command typically initiates a Python interpreter in a terminal?",
#                     "type": "one-word",
#                     "answer": "python"
#                 },
#                 {
#                     "question": "Which programming paradigm does Python support?",
#                     "type": "mcq",
#                     "answer": "Object-oriented",
#                     "options": [
#                         "Assembly",
#                         "Machine code",
#                         "Object-oriented",
#                         "Low-level"
#                     ]
#                 },
#                 {
#                     "question": "Which keyword is used to assign a value to a variable in Python?",
#                     "type": "one-word",
#                     "answer": "Assignment"
#                 },
#                 {
#                     "question": "What does 'interpreted' mean in the context of Python?",
#                     "type": "mcq",
#                     "answer": "Code is executed line by line without prior compilation",
#                     "options": [
#                         "Code is compiled to machine code before execution",
#                         "Code requires manual linking before execution",
#                         "Code is executed line by line without prior compilation",
#                         "Code must be run on a specific hardware architecture"
#                     ]
#                 },
#                 {
#                     "question": "Are variable names in Python case-sensitive?",
#                     "type": "one-word",
#                     "answer": "Yes"
#                 }
#             ]
#         },
#         {
#             "chapterNumber": 2,
#             "chapterTitle": "Data Types and Operations",
#             "subtopics": [
#                 {
#                     "subtopicTitle": "Basic Data Types: Numbers, Strings, Booleans",
#                     "explanation": "Python offers several built-in data types to represent different kinds of values. Integers (`int`) are whole numbers, floats (`float`) are numbers with decimal points, and strings (`str`) are sequences of characters enclosed in quotes (single or double). Booleans (`bool`) represent truth values, being either `True` or `False`. Understanding these fundamental types is crucial as they form the basis for storing and manipulating data within your programs. Python also supports complex numbers, though they are less commonly used in introductory programming.",
#                     "examples": [
#                         "age: int = 30",
#                         "height: float = 5.9",
#                         "name: str = \"Alice\"",
#                         "is_student: bool = True"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Operators: Arithmetic, Comparison, Logical",
#                     "explanation": "Operators are symbols that perform operations on values and variables. Python supports arithmetic operators (+, -, *, /, %, //, **) for calculations, comparison operators (==, !=, >, <, >=, <=) for comparing values, and logical operators (and, or, not) for combining conditional statements. These operators are essential for building logic within your programs, allowing you to make decisions and perform calculations based on data. For instance, you can add numbers, check if one value is greater than another, or determine if two conditions are met simultaneously.",
#                     "examples": [
#                         "Arithmetic: `5 + 3` (8), `10 / 2` (5.0), `7 % 3` (1)",
#                         "Comparison: `5 > 3` (True), `10 == 10` (True)",
#                         "Logical: `True and False` (False), `True or False` (True)"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "String Manipulation and Formatting",
#                     "explanation": "Strings in Python are versatile and support a wide range of manipulation techniques. You can concatenate strings using the '+' operator, repeat them using '*', and access individual characters or slices using indexing and slicing. Python also offers powerful string formatting methods, such as f-strings (formatted string literals), which allow you to embed expressions inside string literals efficiently. Other methods include `.format()` and the older `%` operator. These tools are vital for creating readable output and dynamic messages in your applications.",
#                     "examples": [
#                         "Concatenation: `\"Hello\" + \" \" + \"World!\"` -> \"Hello World!\"",
#                         "Slicing: `my_string = \"Python\"; my_string[0:2]` -> \"Py\"",
#                         "f-string: `name = \"Bob\"; print(f\"Hello, {name}!\")` -> \"Hello, Bob!\""
#                     ]
#                 }
#             ],
#             "chapterSummary": "This chapter delves into Python's core data types, including numbers, strings, and booleans. It also explains the various operators used for calculations and comparisons, and demonstrates essential string manipulation and formatting techniques.",
#             "quiz": [
#                 {
#                     "question": "What is the data type for whole numbers in Python?",
#                     "type": "one-word",
#                     "answer": "int"
#                 },
#                 {
#                     "question": "Which operator performs integer division in Python?",
#                     "type": "one-word",
#                     "answer": "//"
#                 },
#                 {
#                     "question": "What is the result of `15 % 4`?",
#                     "type": "one-word",
#                     "answer": "3"
#                 },
#                 {
#                     "question": "Which logical operator returns True if at least one of its operands is True?",
#                     "type": "mcq",
#                     "answer": "or",
#                     "options": [
#                         "and",
#                         "not",
#                         "or",
#                         "xor"
#                     ]
#                 },
#                 {
#                     "question": "How do you concatenate two strings in Python?",
#                     "type": "one-word",
#                     "answer": "'+'"
#                 },
#                 {
#                     "question": "What is the boolean value for `10 > 5`?",
#                     "type": "one-word",
#                     "answer": "True"
#                 },
#                 {
#                     "question": "Which method is generally preferred for modern string formatting in Python?",
#                     "type": "mcq",
#                     "answer": "f-strings",
#                     "options": [
#                         "%.format()",
#                         "%-formatting",
#                         "string.append()",
#                         "f-strings"
#                     ]
#                 },
#                 {
#                     "question": "What data type represents text in Python?",
#                     "type": "one-word",
#                     "answer": "str"
#                 },
#                 {
#                     "question": "Which operator checks for equality between two values?",
#                     "type": "mcq",
#                     "answer": "==",
#                     "options": [
#                         "=",
#                         "==",
#                         "!=",
#                         ">="
#                     ]
#                 },
#                 {
#                     "question": "What is the result of `'abc' * 3`?",
#                     "type": "one-word",
#                     "answer": "abcabcabc"
#                 }
#             ]
#         },
#         {
#             "chapterNumber": 3,
#             "chapterTitle": "Control Flow: Decisions and Loops",
#             "subtopics": [
#                 {
#                     "subtopicTitle": "Conditional Statements: if, elif, else",
#                     "explanation": "Conditional statements allow your program to make decisions based on whether certain conditions are met. The `if` statement executes a block of code if its condition is true. An `elif` (else if) statement provides an alternative condition to check if the preceding `if` or `elif` conditions were false. The `else` statement executes a block of code if none of the preceding conditions are true. Proper indentation is critical for defining which statements belong to each block. This structure is fundamental for creating dynamic and responsive programs.",
#                     "examples": [
#                         "if score >= 90:\n    print(\"Grade: A\")\nelif score >= 80:\n    print(\"Grade: B\")\nelse:\n    print(\"Grade: C\")"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Loops: for and while",
#                     "explanation": "Loops are used to execute a block of code repeatedly. The `for` loop iterates over a sequence (like a list, tuple, string, or range) or other iterable object. It executes the indented block of code for each item in the sequence. The `while` loop executes a block of code as long as a specified condition is true. It's important to ensure that the condition in a `while` loop eventually becomes false to avoid an infinite loop. Both loop types are essential for automating repetitive tasks and processing collections of data efficiently.",
#                     "examples": [
#                         "For loop: for i in range(5): print(i)\nWhile loop: count = 0\nwhile count < 3: print(count); count += 1"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Loop Control Statements: break, continue, pass",
#                     "explanation": "Python provides statements to control the flow of loops. The `break` statement terminates the loop entirely, exiting the loop body. The `continue` statement skips the rest of the current iteration and proceeds to the next iteration of the loop. The `pass` statement is a null operation; it does nothing but is useful as a placeholder where syntax requires a statement but you don't want to execute any code, such as in an empty `if` block or an unfinished function definition.",
#                     "examples": [
#                         "break: for i in range(10): if i == 5: break; print(i)  # prints 0, 1, 2, 3, 4",
#                         "continue: for i in range(5): if i == 2: continue; print(i) # prints 0, 1, 3, 4",
#                         "pass: if True: pass  # does nothing"
#                     ]
#                 }
#             ],
#             "chapterSummary": "This chapter covers the essential control flow structures in Python, including conditional statements (`if`, `elif`, `else`) for decision-making and loops (`for`, `while`) for repetition. It also details loop control statements like `break`, `continue`, and `pass`.",
#             "quiz": [
#                 {
#                     "question": "Which keyword introduces an alternative condition in a sequence of if statements?",
#                     "type": "one-word",
#                     "answer": "elif"
#                 },
#                 {
#                     "question": "What happens if a `while` loop's condition never becomes false?",
#                     "type": "mcq",
#                     "answer": "Infinite loop",
#                     "options": [
#                         "Program crashes",
#                         "Infinite loop",
#                         "Loop executes once",
#                         "Python interpreter stops"
#                     ]
#                 },
#                 {
#                     "question": "Which statement is used to exit a loop immediately?",
#                     "type": "one-word",
#                     "answer": "break"
#                 },
#                 {
#                     "question": "What does the `continue` statement do in a loop?",
#                     "type": "mcq",
#                     "answer": "Skips the rest of the current iteration and proceeds to the next",
#                     "options": [
#                         "Terminates the entire loop",
#                         "Skips the rest of the current iteration and proceeds to the next",
#                         "Causes an error",
#                         "Resets the loop counter"
#                     ]
#                 },
#                 {
#                     "question": "What is the `pass` statement used for?",
#                     "type": "one-word",
#                     "answer": "Placeholder"
#                 },
#                 {
#                     "question": "How many times will the code inside `for i in range(3):` execute?",
#                     "type": "one-word",
#                     "answer": "3"
#                 },
#                 {
#                     "question": "Which statement executes if all preceding `if` and `elif` conditions are false?",
#                     "type": "mcq",
#                     "answer": "else",
#                     "options": [
#                         "elif",
#                         "if",
#                         "loop",
#                         "else"
#                     ]
#                 },
#                 {
#                     "question": "What is the primary purpose of a `for` loop in Python?",
#                     "type": "one-word",
#                     "answer": "Iteration"
#                 },
#                 {
#                     "question": "Which keyword is used to start a loop that continues as long as a condition is met?",
#                     "type": "mcq",
#                     "answer": "while",
#                     "options": [
#                         "for",
#                         "loop",
#                         "iterate",
#                         "while"
#                     ]
#                 },
#                 {
#                     "question": "What is the output of this code: `for x in 'abc': if x == 'b': print('Found') else: print('Not found')`?",
#                     "type": "one-word",
#                     "answer": "NotfoundFoundNotfound"
#                 }
#             ]
#         },
#         {
#             "chapterNumber": 4,
#             "chapterTitle": "Data Structures: Lists and Tuples",
#             "subtopics": [
#                 {
#                     "subtopicTitle": "Lists: Creating, Accessing, and Modifying",
#                     "explanation": "Lists are ordered, mutable (changeable) sequences of items in Python. They are defined using square brackets `[]` and can contain items of different data types. You can access elements by their index (starting from 0), and you can modify, add, or remove elements after the list has been created. Common operations include appending items, inserting at specific positions, removing items by value or index, and slicing lists to get sub-lists. Lists are fundamental for storing collections of related data that may need to be altered during program execution.",
#                     "examples": [
#                         "my_list = [1, 'hello', 3.14]\nprint(my_list[1])  # Output: hello\nmy_list.append(True)\nmy_list[0] = 5"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Tuples: Creating and Immutability",
#                     "explanation": "Tuples are also ordered sequences of items, similar to lists, but they are immutable, meaning once a tuple is created, its elements cannot be changed, added, or removed. Tuples are defined using parentheses `()` and are often used for data that should not be modified, such as coordinates or configuration settings. Because of their immutability, tuples can sometimes be slightly more efficient than lists. Like lists, elements are accessed by index, and tuples can contain items of different data types.",
#                     "examples": [
#                         "my_tuple = (1, 'world', 2.71)\nprint(my_tuple[0])  # Output: 1\n# my_tuple[0] = 10  # This would raise a TypeError"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "List and Tuple Methods and Operations",
#                     "explanation": "Both lists and tuples support various methods and operations. Common list methods include `append()`, `insert()`, `remove()`, `pop()`, `sort()`, and `reverse()`. While tuples are immutable, they support operations like concatenation (`+`), repetition (`*`), and membership testing (`in`). You can also use slicing on both lists and tuples to extract portions of the sequence. Understanding these methods allows for effective manipulation and retrieval of data stored within these structures, enabling more complex data processing.",
#                     "examples": [
#                         "List sort: numbers = [3, 1, 4]; numbers.sort(); print(numbers)  # Output: [1, 3, 4]",
#                         "Tuple concatenation: tuple1 = (1, 2); tuple2 = (3, 4); combined = tuple1 + tuple2; print(combined)  # Output: (1, 2, 3, 4)",
#                         "Membership: print(3 in [1, 2, 3])  # Output: True"
#                     ]
#                 }
#             ],
#             "chapterSummary": "This chapter explores two fundamental Python data structures: lists, which are mutable ordered sequences, and tuples, which are immutable ordered sequences. It covers their creation, modification, access methods, and common operations.",
#             "quiz": [
#                 {
#                     "question": "Are Python lists mutable or immutable?",
#                     "type": "one-word",
#                     "answer": "Mutable"
#                 },
#                 {
#                     "question": "What symbol is used to define a list in Python?",
#                     "type": "one-word",
#                     "answer": "[]"
#                 },
#                 {
#                     "question": "Which method adds an item to the end of a list?",
#                     "type": "mcq",
#                     "answer": "append()",
#                     "options": [
#                         "insert()",
#                         "add()",
#                         "append()",
#                         "extend()"
#                     ]
#                 },
#                 {
#                     "question": "What distinguishes tuples from lists in Python?",
#                     "type": "mcq",
#                     "answer": "Immutability",
#                     "options": [
#                         "Order",
#                         "Mutability",
#                         "Syntax",
#                         "Immutability"
#                     ]
#                 },
#                 {
#                     "question": "What symbol is used to define a tuple in Python?",
#                     "type": "one-word",
#                     "answer": "()"
#                 },
#                 {
#                     "question": "What is the result of `my_list = [1, 2]; my_list.pop(0)`?",
#                     "type": "one-word",
#                     "answer": "1"
#                 },
#                 {
#                     "question": "Which operation can you perform on tuples that you cannot directly perform on lists (without converting to list)?",
#                     "type": "mcq",
#                     "answer": "Used as dictionary keys",
#                     "options": [
#                         "Indexing",
#                         "Slicing",
#                         "Concatenation",
#                         "Used as dictionary keys"
#                     ]
#                 },
#                 {
#                     "question": "How do you access the second element of a list named `data`?",
#                     "type": "one-word",
#                     "answer": "data[1]"
#                 },
#                 {
#                     "question": "What is the output of `print(tuple([1, 2, 3]))`?",
#                     "type": "mcq",
#                     "answer": "(1, 2, 3)",
#                     "options": [
#                         "[1, 2, 3]",
#                         "1, 2, 3",
#                         "(1, 2, 3)",
#                         "Error"
#                     ]
#                 },
#                 {
#                     "question": "Which method removes the first occurrence of a specific value from a list?",
#                     "type": "one-word",
#                     "answer": "remove"
#                 }
#             ]
#         },
#         {
#             "chapterNumber": 5,
#             "chapterTitle": "Functions and File I/O",
#             "subtopics": [
#                 {
#                     "subtopicTitle": "Defining and Calling Functions",
#                     "explanation": "Functions are reusable blocks of code that perform a specific task. They help in organizing code, making it more readable, and preventing repetition. You define a function using the `def` keyword, followed by the function name, parentheses `()`, and a colon `:`. The code block within the function must be indented. Functions can accept arguments (inputs) and can return values (outputs) using the `return` statement. Calling a function involves using its name followed by parentheses, potentially with arguments passed inside.",
#                     "examples": [
#                         "def greet(name):\n    return f\"Hello, {name}!\"\n\nmessage = greet(\"Alice\")\nprint(message)  # Output: Hello, Alice!"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "File Input/Output (I/O): Reading and Writing",
#                     "explanation": "File I/O allows your Python programs to interact with files on your computer. You can read data from existing files or write data to new or existing files. The `open()` function is used to open a file, and it requires the file path and a mode (e.g., 'r' for read, 'w' for write, 'a' for append). It's crucial to close files after use using the `close()` method or, preferably, by using the `with open(...)` statement, which ensures the file is automatically closed. Reading can be done line by line or all at once, while writing involves using methods like `write()`.",
#                     "examples": [
#                         "# Writing to a file\nwith open(\"output.txt\", \"w\") as f:\n    f.write(\"This is the first line.\\n\")\n\n# Reading from a file\nwith open(\"output.txt\", \"r\") as f:\n    content = f.read()\n    print(content)"
#                     ]
#                 },
#                 {
#                     "subtopicTitle": "Working with Dictionaries",
#                     "explanation": "Dictionaries are unordered, mutable collections of key-value pairs in Python. Each key must be unique and immutable (like strings, numbers, or tuples), while values can be of any data type. Dictionaries are defined using curly braces `{}`. You can access values by their keys, add new key-value pairs, modify existing values, and remove pairs. Dictionaries are highly efficient for looking up data when you know the key. They are widely used for storing structured data, configurations, and mapping relationships.",
#                     "examples": [
#                         "student = {\"name\": \"Bob\", \"age\": 22, \"major\": \"Computer Science\"}\nprint(student[\"name\"])  # Output: Bob\nstudent[\"age\"] = 23\nstudent[\"university\"] = \"Tech Uni\""
#                     ]
#                 }
#             ],
#             "chapterSummary": "This final chapter introduces the concept of functions for code modularity and reusability. It also covers essential file input/output operations for reading from and writing to files, and explains how to use dictionaries for key-value data storage.",
#             "quiz": [
#                 {
#                     "question": "What keyword is used to define a function in Python?",
#                     "type": "one-word",
#                     "answer": "def"
#                 },
#                 {
#                     "question": "Which statement is used within a function to send a value back to the caller?",
#                     "type": "mcq",
#                     "answer": "return",
#                     "options": [
#                         "send",
#                         "return",
#                         "yield",
#                         "pass"
#                     ]
#                 },
#                 {
#                     "question": "What is the primary advantage of using functions?",
#                     "type": "one-word",
#                     "answer": "Reusability"
#                 },
#                 {
#                     "question": "Which mode is used to open a file for reading in Python?",
#                     "type": "mcq",
#                     "answer": "'r'",
#                     "options": [
#                         "'w'",
#                         "'a'",
#                         "'r'",
#                         "'rw'"
#                     ]
#                 },
#                 {
#                     "question": "What does the `with open(...)` statement ensure for files?",
#                     "type": "one-word",
#                     "answer": "Automatic closing"
#                 },
#                 {
#                     "question": "What are the two main components of a dictionary entry?",
#                     "type": "mcq",
#                     "answer": "Key-value pair",
#                     "options": [
#                         "Index-item",
#                         "Key-value pair",
#                         "Name-data",
#                         "Label-value"
#                     ]
#                 },
#                 {
#                     "question": "How do you access the value associated with the key 'city' in a dictionary named `location`?",
#                     "type": "one-word",
#                     "answer": "location['city']"
#                 },
#                 {
#                     "question": "What is the output of `print(\"Hello\\nWorld\")`?",
#                     "type": "mcq",
#                     "answer": "Hello\nWorld",
#                     "options": [
#                         "HelloWorld",
#                         "Hello World",
#                         "Hello\nWorld",
#                         "Error"
#                     ]
#                 },
#                 {
#                     "question": "Which file mode is used to append data to the end of an existing file?",
#                     "type": "one-word",
#                     "answer": "a"
#                 },
#                 {
#                     "question": "Are dictionary keys guaranteed to be in any specific order in Python versions prior to 3.7?",
#                     "type": "one-word",
#                     "answer": "No"
#                 }
#             ]
#         }
#     ]
# }

def upload_course(course):
    collection = courses[course["difficulty"]]
    result = collection.insert_one(course)

    course_name_id = {"courseTitle": course["courseTitle"], "difficulty": course["difficulty"], "id": str(result.inserted_id)}
    course_name = courses["coursename"]
    course_name.insert_one(course_name_id)

    print("success")

def load_course_names():
    course_name = courses["coursename"]
    cursor = course_name.find({}, {"_id": 0})
    return list(cursor)


def load_course(id, difficulty):
    collection = courses[f'{difficulty}']
    cursor = collection.find_one({"_id": ObjectId(id)}, {"_id": 0})
    print("course found")
    print(cursor)
    return cursor