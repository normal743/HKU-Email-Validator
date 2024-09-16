<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HKU Email Validator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            transition: background-color 0.3s;
        }
        .container {
            text-align: center;
        }
        #email {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
            width: 250px;
        }
        #submit {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #submit:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        #uidDisplay {
            margin-top: 20px;
            font-size: 18px;
        }
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #333;
                color: #fff;
            }
            #email {
                background-color: #444;
                color: #fff;
                border-color: #555;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <input type="email" id="email" placeholder="Enter HKU email">
        <button id="submit" disabled>Submit</button>
        <div id="uidDisplay"></div>
    </div>

    <script>
        const emailInput = document.getElementById('email');
        const submitButton = document.getElementById('submit');
        const uidDisplay = document.getElementById('uidDisplay');

        function validateEmail(email) {
            const regex = /@(connect\.hku\.hk|hku\.hk)$/;
            return regex.test(email);
        }

        function updateUI() {
            const email = emailInput.value;
            const isValid = validateEmail(email);
            
            emailInput.style.borderColor = isValid ? 'green' : 'red';
            submitButton.disabled = !isValid;
        }

        emailInput.addEventListener('input', updateUI);

        submitButton.addEventListener('click', () => {
            const email = emailInput.value;
            const uid = email.split('@')[0];
            uidDisplay.textContent = `UID: ${uid}`;
        });
    </script>
</body>
</html>
