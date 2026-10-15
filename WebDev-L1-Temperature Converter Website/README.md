# 🌡️ Temperature Converter Web Application
### Oasis Infobyte Web Development & Designing Internship (OIBSIP)
**Track:** Web Development | **Level:** 1 | **Task:** 3 (Temperature Converter)

---

## 📖 Project Overview

An interactive, responsive, and robust **Temperature Converter Web Application** built using HTML5, CSS3, and modern Vanilla JavaScript.

The application allows users to convert temperatures seamlessly between **Celsius (°C)**, **Fahrenheit (°F)**, and **Kelvin (K)**. It features real-time validation, scientific absolute zero boundary checks, and the ability to view either an individual target unit or **all converted units simultaneously**.

---

## 🌟 Key Features

- **Multi-Unit Conversion**: Convert between Celsius, Fahrenheit, and Kelvin in any direction.
- **Simultaneous "All Units" View**: View conversions across all temperature scales in one click.
- **Accurate Mathematical Formulas**:
  - $°F = (°C \times \frac{9}{5}) + 32$
  - $K = °C + 273.15$
  - $°C = (°F - 32) \times \frac{5}{9}$
  - Values formatted neatly to 2 decimal places.
- **Input Validation & Error Handling**:
  - Validates for empty or non-numeric inputs.
  - Scientific absolute zero error protection (checks against values below $-273.15\ ^\circ\text{C}$, $-459.67\ ^\circ\text{F}$, and $0\text{ K}$).
- **Modern Glassmorphic UI**:
  - Centered responsive card interface.
  - Distinct colored result badges for Celsius, Fahrenheit, and Kelvin.
  - Accessible ARIA live regions for screen readers.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, form controls, and accessible tags |
| **CSS3** | Modern responsive layout, glassmorphic effects, card styling |
| **JavaScript (ES6+)** | Dynamic conversion logic, mathematical operations, and DOM validation |
| **Google Fonts** | `Poppins` (Weights: 400, 500, 600, 700) |

---

## 📁 File Structure

```plaintext
WebDev-L1-Temperature Converter Website/
│
├── index.html        # Main app interface and form layout
├── style.css         # Styling, card designs, animations, and color schemes
├── script.js         # Conversion formulas, DOM handling, and validation logic
└── README.md         # Project documentation and details
```

---

## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SunitaMaurya2051999/photovoltaic.git
   ```

2. **Navigate to the Temperature Converter folder**:
   ```bash
   cd "OIBSIP/WebDev-L1-Temperature Converter Website"
   ```

3. **Open the project**:
   - Double click `index.html` to run in any browser.

---

## 👩‍💻 Author & Internship Details

- **Developer:** Priyanshi Lakhani
- **Role:** Web Development Intern
- **Program:** Oasis Infobyte Student Internship Program (OIBSIP)
- **Batch:** Level 1 Internship Tasks
