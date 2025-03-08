import streamlit as st

st.set_page_config(page_title="unit converter", page_icon="⏳", layout="centered")

st.title("Unit Converter")

category = st.selectbox(label="", options=["Length", "Mass", "Temperature"])


length = {
    'kilometer': 1,  # base unit
    'meter': 1000,
    'decimeter': 10000,
    'centimeter': 100000,
    'millimeter': 1000000,  
}

mass = {
    'kilogram': 1,  # base unit
    'gram': 1000,
    'decigram': 10000,
    'centigram': 100000,
    'milligram': 1000000, 
}

unit= None
if category == 'Length':
    unit = length
elif category == 'Mass':
    unit = mass

def conversion():
    output = None

    if category == "Length":
        from_unit = st.selectbox(label="From", options=list(length.keys()))
        to_unit = st.selectbox(label="To", options=['meter', 'kilometer', 'decimeter', 'centimeter', 'millimeter'])
    elif category == "Mass":
        from_unit = st.selectbox(label="From", options=list(mass.keys()))
        to_unit = st.selectbox(label="To", options=['gram', 'kilogram', 'decigram', 'centigram', 'milligram'])
    elif category == "Temperature":
        from_unit = st.selectbox(label="From", options=['celsius', 'fahrenheit', 'kelvin'])
        to_unit = st.selectbox(label="To", options=['fahrenheit', 'celsius', 'kelvin'])

    user_input = st.number_input(label="")

    if st.button(label="Convert"):
        if category == "Temperature":
            if from_unit == 'celsius':
                if to_unit == 'fahrenheit':
                    output =  (user_input * 9/5) + 32
                elif to_unit == 'kelvin':
                    output = user_input + 273.15
            if from_unit == 'fahrenheit':
                if to_unit == 'celsius':
                    output = (user_input - 32) * 5/9
                elif to_unit == 'kelvin':
                    output = ((user_input - 32) * 5/9) + 273.15
            if from_unit == 'kelvin':
                if to_unit == 'celsius':
                    output = user_input - 273.15
                elif to_unit == 'fahrenheit':
                    output = ((user_input - 273.15) * 5/9) + 32      

        elif unit:
            base_unit = user_input / unit[from_unit]
            output = base_unit * unit[to_unit]
    
        if output is not None:
            st.success(f"{user_input} {from_unit} = {output:.6f} {to_unit}")
        else:
            st.error("Invalid conversion. Please check your selection.")

conversion()
