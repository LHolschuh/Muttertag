function checkPassword() {
        const password = document.getElementById('passwordInput').value;
        const errorElement = document.getElementById('errorMessage');

        if (password.toLowerCase() === 'mutti') {
            document.getElementById('passwordScreen').classList.add('hidden');
            document.getElementById('contentScreen').classList.remove('hidden');
        } else {
            errorElement.classList.remove('hidden');
            document.getElementById('passwordInput').classList.add('border-red-500');
            setTimeout(() => {
                errorElement.classList.add('hidden');
                document.getElementById('passwordInput').classList.remove('border-red-500');
            }, 2000);
        }
    }