import streamlit as st
import matplotlib.pyplot as plt

st.set_page_config(page_title="Python Learning", page_icon="🐍", layout="centered")

st.title("15 Days of Python Learning!")
st.write("Let's start to learn Python at a very fast pace....")

# Initialize session states
if "selected_topic" not in st.session_state:
    st.session_state.selected_topic = None
if "show_quiz" not in st.session_state:
    st.session_state.show_quiz = False
if "user_answers" not in st.session_state:
    st.session_state.user_answers = {}

st.subheader("Learn, Attempt quiz and check your progress.")

# Data for each day
days = [
    {
        "day": "Day_1",
        "topic": "Introduction to Python",
        "learn_url": "https://github.com/panaversity/learn-modern-ai-python/tree/main/00_python_colab/01_introduction_to_python",
        "quiz_label": "Quiz",
        "quiz": [
            {
                "question": "What makes Python a versatile programming language?",
                "options": [
                    "It is only used for web development",
                    "It supports multiple programming paradigms like procedural, object-oriented, and functional programming",
                    "It is limited to scientific computing",
                    "It cannot be used for automation"
                ],
                "answer": "It supports multiple programming paradigms like procedural, object-oriented, and functional programming"
            },
            {
                "question": "How is Python used in Agentic AI?",
                "options": ["It is used to create autonomous systems that can make decisions without human intervention",
                            "It is only used for data visualization",
                            "It is not suitable for AI development",
                            "It is used exclusively for game development"],
                "answer": "It is used to create autonomous systems that can make decisions without human intervention"
            },
            {
            "question": "Which of the following is NOT a practical application of Python?",
            "options": ["Web development",
                        "Data analysis and machine learning",
                        "Operating system development",
                        "Game development"],
            "answer": "Operating system development"
            },
            {
            "question": "What is the correct sequence in the code execution continuum?",
            "options": ["Code Writing → Compilation → Execution → Output",
                        "Execution → Code Writing → Output → Compilation",
                        "Output → Execution → Compilation → Code Writing",
                        "Compilation → Output → Code Writing → Execution"],
            "answer": "Code Writing → Compilation → Execution → Output"
            },
            {
            "question": "What is the role of the Python execution engine?",
            "options": ["It converts Python code into machine code for execution",
                        "It only checks for syntax errors",
                        "It is responsible for formatting the code",
                        "It does not interact with the code"],
            "answer": "It converts Python code into machine code for execution"
            },
            {
            "question": "What is Python bytecode?",
            "options": ["A low-level representation of Python code that is executed by the Python Virtual Machine (PVM)",
                        "A high-level representation of Python code",
                        "A type of Python syntax",
                        "A Python library"],
            "answer": "A low-level representation of Python code that is executed by the Python Virtual Machine (PVM)"
            },
            {
            "question": "What happens during the compilation of Python code?",
            "options": ["Python code is converted into bytecode",
                        "Python code is converted directly into machine code",
                        "Python code is executed line by line without compilation",
                        "Python code is deleted"],
            "answer": "Python code is converted into bytecode"
            },
            {
            "question": "Which of the following best describes Python bytecode?",
            "options": [" A human-readable version of Python code",
                        "A platform-independent intermediate representation of Python code",
                        "A type of Python syntax error",
                        "A Python library for debugging"],
            "answer": "A platform-independent intermediate representation of Python code"
            },
            {
            "question": "What is the purpose of the dis module in Python?",
            "options": ["To disassemble Python bytecode into human-readable instructions",
                        "To delete Python files",
                        "To display syntax errors",
                        "To compile Python code"],
            "answer": "To disassemble Python bytecode into human-readable instructions"
            },
            {
            "question": "Why is Python bytecode important?",
            "options": ["It allows Python code to be executed faster than machine code",
                        "It makes Python code platform-independent",
                        "It eliminates the need for a Python interpreter",
                        "It is only used for debugging"],
            "answer": "It makes Python code platform-independent"
            },
            {
            "question": "How does Python use bytecode?",
            "options": ["The Python Virtual Machine (PVM) executes the bytecode",
                        "The bytecode is executed directly by the CPU",
                        "The bytecode is converted into machine code before execution",
                        "The bytecode is only used for debugging"],
            "answer": "The Python Virtual Machine (PVM) executes the bytecode"
            },
            {
            "question": "Is Python bytecode platform-independent?",
            "options": ["Yes, it can run on any operating system with a Python interpreter",
                        "No, it is specific to the operating system",
                        "Only on Windows",
                        "Only on Linux"],
            "answer": "Yes, it can run on any operating system with a Python interpreter"
            },
            {
            "question": "Can Python bytecode be executed directly without a Python interpreter?",
            "options": ["Yes, it can be executed directly",
                        "No, it requires the Python Virtual Machine (PVM)",
                        "Only on specific operating systems",
                        "Only if it is converted into machine code"],
            "answer": "No, it requires the Python Virtual Machine (PVM)"
            },
            {
            "question": "How can you manually run Python bytecode?",
            "options": ["By using the python command followed by the .pyc file",
                        "By converting it into machine code first",
                        "By using the dis module",
                        "By editing the bytecode file"],
            "answer": "By using the python command followed by the .pyc file"
            },
            {
            "question": "What is the significance of indentation in Python?",
            "options": ["It is used to define code blocks and is mandatory",
                        "It is optional and only used for readability",
                        "It is used to define variables",
                        "It is used to comment code"],
            "answer": "It is used to define code blocks and is mandatory"
            },
            {
            "question": "What does it mean for Python to be a dynamically-typed language?",
            "options": ["Variable types are determined at runtime",
                        "Variable types must be declared explicitly",
                        "Python does not support type hinting",
                        "Python is a statically-typed language"],
            "answer": "Variable types are determined at runtime"
            },
            {
            "question": "What is the difference between an object-based language and an object-oriented language?",
            "options": ["Object-based languages do not support inheritance, while object-oriented languages do",
                        "Object-based languages do not support objects",
                        "Object-oriented languages do not support encapsulation",
                        "There is no difference"],
            "answer": "Object-based languages do not support inheritance, while object-oriented languages do"
            },
            {
            "question": "What does Python's object-centric nature mean?",
            "options": ["Everything in Python is an object",
                        "Python does not support objects",
                        "Python is only used for object-oriented programming",
                        "Python objects are immutable"],
            "answer": "Everything in Python is an object"
            },
            {
            "question": "What is duck typing in Python?",
            "options": ["The type of an object is determined by its behavior rather than its class",
                        "A type of syntax error",
                        "A way to define classes",
                        "A type of Python bytecode"],
            "answer": "The type of an object is determined by its behavior rather than its class"
            },
        ]
    },
    {
    "day": "Day_2",
    "topic": "data_types",
    "learn_url": "https://github.com/panaversity/learn-modern-ai-python/tree/main/00_python_colab/02_data_types",
    "quiz_label": "Quiz",
    "quiz": [
        {
            "question": "Which of the following is NOT a numeric type in Python?",
            "options": ["int", "float", "complex", "char"],
            "answer": "char"
        },
        {
            "question": "What is the boolean value of an empty list `[]` in Python?",
            "options": ["True", "False", "None", "It depends on the elements"],
            "answer": "False"
        },
        {
            "question": "Which of the following is a mutable sequence type in Python?",
            "options": ["tuple", "list", "str", "bytes"],
            "answer": "list"
        },
        {
            "question": "Which data type in Python is used for unordered collections of unique elements?",
            "options": ["list", "tuple", "set", "dict"],
            "answer": "set"
        },
        {
            "question": "What is the key characteristic of a mapping type in Python?",
            "options": [
                "It stores elements in a sequential manner",
                "It uses key-value pairs",
                "It can only store numeric data",
                "It does not support iteration"
            ],
            "answer": "It uses key-value pairs"
        },
        {
            "question": "What is the number system base for binary numbers?",
            "options": ["2", "8", "10", "16"],
            "answer": "2"
        },
        {
            "question": "Which of the following correctly defines UTF-8?",
            "options": [
                "A character encoding system that uses a fixed 8-bit representation",
                "A variable-length character encoding for Unicode",
                "A number system with base 16",
                "A function used to check data types"
            ],
            "answer": "A variable-length character encoding for Unicode"
        },
        {
            "question": "What does the `memoryview` function in Python do?",
            "options": [
                "Creates a copy of an object in memory",
                "Provides a view of the memory of an object without copying it",
                "Converts a variable to bytes",
                "Removes an object from memory"
            ],
            "answer": "Provides a view of the memory of an object without copying it"
        },
        {
            "question": "What does the `id()` function return in Python?",
            "options": [
                "The type of a variable",
                "The unique memory address of an object",
                "The length of an object",
                "The ASCII value of a character"
            ],
            "answer": "The unique memory address of an object"
        },
        {
            "question": "What is Integer Interning in Python?",
            "options": [
                "A technique where Python reuses integer objects in a certain range to save memory",
                "A way to dynamically allocate memory for integers",
                "A process of converting float to integer",
                "A debugging mechanism for integer operations"
            ],
            "answer": "A technique where Python reuses integer objects in a certain range to save memory"
        },
        {
            "question": "Which of the following values is considered 'Falsy' in Python?",
            "options": ["1", "'False'", "[]", "['Python']"],
            "answer": "[]"
        },
        {
            "question": "Which function is used to check if an object is an instance of a specific class or data type?",
            "options": ["type()", "id()", "isinstance()", "str()"],
            "answer": "isinstance()"
        }
        ]
    },
]

st.markdown(
    """
    <style>
        .stButton>button, .stLinkButton>button {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            background-color: transparent;
            color: black;
            font-size: 16px;
        }
        /* Button hover effect */
        .stButton>button:hover {
            background-color: #ddd; /* Darker gray on hover */
            color: black;
        }
    </style>
    """,
    unsafe_allow_html=True
)


# Sidebar for topic selection
with st.sidebar:
    st.header("Topics:")
    for index, day in enumerate(days):
        if st.button(f"{index + 1}. {day['topic']}"):
            st.session_state.selected_topic = day
            st.session_state.show_quiz = False  # Reset quiz view on topic change
            st.rerun()

# Show selected topic curriculum
if st.session_state.selected_topic:
    col1, col2, col3, col4 = st.columns([2, 6, 2, 3])
    with col1:
        topic = st.session_state.selected_topic
        st.write(f"{topic['day']}:")

    with col2:
        st.write(topic['topic'])

    with col3:              
        st.link_button("Learn", topic["learn_url"])

    with col4:
        if st.button("Attempt Quiz", key="attempt_quiz"):
            st.session_state.show_quiz = True
            st.rerun()

# Show quiz only when button is clicked
if st.session_state.show_quiz and st.session_state.selected_topic:
    quiz = st.session_state.selected_topic["quiz"]

    # Initialize quiz state
    for i, q in enumerate(quiz):
        if f"q_{i}" not in st.session_state.user_answers:
            st.session_state.user_answers[f"q_{i}"] = None

    # Function to update selected answers
    def update_answer(index):
        st.session_state.user_answers[f"q_{index}"] = st.session_state[f"q_{index}"]

    # Display questions
    for i, q in enumerate(quiz):
        st.write(f"**Question {i+1}:** {q['question']}")
        selected = st.radio(
            f"Select your answer for Question {i+1}",
            q["options"],
            index=q["options"].index(st.session_state.user_answers[f"q_{i}"]) if st.session_state.user_answers[f"q_{i}"] in q["options"] else None,
            key=f"q_{i}",
            on_change=update_answer,
            args=(i,)
        )

    # Submit quiz button
    score = 0
    if st.button("Submit Quiz"):
        score = sum(1 for i, q in enumerate(quiz) if st.session_state.user_answers[f"q_{i}"] == q["answer"])
        total_question = len(quiz)
        percentage = (score / total_question * 100)

        st.write(f"### Your Score: {score}/{total_question}")

        if percentage >= 70:
            st.balloons()

        # Show feedback
        for i, q in enumerate(quiz):
            user_answer = st.session_state.user_answers[f"q_{i}"]
            correct_answer = q["answer"]

            if user_answer == correct_answer:
                st.success(f"Question {i+1}: ✅ Correct!  \nYour answer: {user_answer}")
            else:
                st.error(f"""Question {i+1}: ❌ Incorrect. Your answer: {user_answer}.  
                        Correct answer: {correct_answer}""")
                
           #pie chart
        total_question = len(quiz)
        
        labels = ["Correct", "Incorrect"]
        values = [score, total_question - score]
        colors = ["lightgreen", "red"]

        fig, ax = plt.subplots()
        # fig.patch.set_facecolor("gray")
        ax.pie(values, labels=labels,  autopct="%1.1f%%", colors=colors, startangle=90, wedgeprops={"edgecolor": "black"})
        ax.axis("equal")
        ax.set_title("Quiz Performance")

        st.pyplot(fig)
