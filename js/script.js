document.addEventListener('DOMContentLoaded', () => {
    // عناصر القائمة الجانبية
    const menuItems = document.querySelectorAll('.menu-item');

    // الرسائل والإشعارات
    const messagesNotification = document.querySelector('#messages-notification');
    const messages = document.querySelector('.messages');
    const messageItems = document.querySelectorAll('.messages .message');
    const messageSearch = document.querySelector('#messages-search');

    // تخصيص الثيم
    const theme = document.querySelector('.menu-item#theme');
    const themeModal = document.querySelector('.customize-theme');

    // =======================
    // SIDEBAR
    // =======================

    const changeActiveItem = () => {
        menuItems.forEach(item => item.classList.remove('active'));
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');

            // إشعارات
            const popup = document.querySelector('.notifications-popup');
            if (item.id === 'notifications') {
                if (popup) popup.style.display = 'block';
                const notifCount = item.querySelector('.notification-count');
                if (notifCount) notifCount.style.display = 'none';
            } else {
                if (popup) popup.style.display = 'none';
            }
        });
    });

    // =======================
    // MESSAGES SEARCH
    // =======================

    if (messageSearch && messageItems.length > 0) {
        messageSearch.addEventListener('input', () => {
            const val = messageSearch.value.toLowerCase();
            messageItems.forEach(chat => {
                const nameElement = chat.querySelector('.message-body h5');
                const name = nameElement ? nameElement.textContent.toLowerCase() : '';
                chat.style.display = name.includes(val) ? 'flex' : 'none';
            });
        });
    }

    // =======================
    // MESSAGES NOTIFICATION
    // =======================

    if (messagesNotification && messages) {
        messagesNotification.addEventListener('click', () => {
            messages.style.boxShadow = '0 0 1rem var(--color-primary)';
            const notifCount = messagesNotification.querySelector('.notification-count');
            if (notifCount) notifCount.style.display = 'none';

            setTimeout(() => {
                messages.style.boxShadow = 'none';
            }, 2000);
        });
    }

    // =======================
    // THEME CUSTOMIZATION
    // =======================

    if (theme && themeModal) {
        theme.addEventListener('click', () => {
            themeModal.style.display = 'grid';
        });

        themeModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('customize-theme')) {
                themeModal.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // عناصر تخصيص الثيم
    const fontSizes = document.querySelectorAll('.choose-size span');
    const colorPalette = document.querySelectorAll('.choose-color span');
    const bgOptions = document.querySelectorAll('.choose-bg > div');

    // تطبيق حجم الخط
    fontSizes.forEach((size, index) => {
        size.addEventListener('click', () => {
            fontSizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');

            let fontSize;
            switch (index) {
                case 0:
                    fontSize = '12px';
                    break;
                case 1:
                    fontSize = '14px';
                    break;
                case 2:
                    fontSize = '16px';
                    break;
                case 3:
                    fontSize = '18px';
                    break;
                case 4:
                    fontSize = '20px';
                    break;
            }

            document.documentElement.style.fontSize = fontSize;
            localStorage.setItem('themeFontSize', fontSize);
        });
    });

    // تطبيق اللون الأساسي
    const colorMap = {
        'color-1': '#ff0055',
        'color-2': '#00bcd4',
        'color-3': '#4caf50',
        'color-4': '#ff9800',
        'color-5': '#9c27b0'
    };

    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            colorPalette.forEach(c => c.classList.remove('active'));
            color.classList.add('active');

            const selectedClass = [...color.classList].find(cls => cls.startsWith('color-'));
            const selectedColor = colorMap[selectedClass];

            document.documentElement.style.setProperty('--color-primary', selectedColor);
            localStorage.setItem('themeColor', selectedColor);
        });
    });

    // تطبيق الخلفية
    bgOptions.forEach((bg, index) => {
        bg.addEventListener('click', () => {
            bgOptions.forEach(b => b.classList.remove('active'));
            bg.classList.add('active');

            let bgLight, bgDark, bgWhite;
            switch (index) {
                case 0: // Light
                    bgLight = '#fff';
                    bgDark = '#000';
                    bgWhite = '#f0f0f0';
                    break;
                case 1: // Dark
                    bgLight = '#1e1e1e';
                    bgDark = '#000';
                    bgWhite = '#2c2c2c';
                    break;
                case 2: // Lights Out
                    bgLight = '#000';
                    bgDark = '#000';
                    bgWhite = '#000';
                    break;
            }

            document.documentElement.style.setProperty('--color-light', bgLight);
            document.documentElement.style.setProperty('--color-dark', bgDark);
            document.documentElement.style.setProperty('--color-white', bgWhite);

            localStorage.setItem('themeBackground', JSON.stringify({ bgLight, bgDark, bgWhite }));
        });
    });

    // تطبيق الإعدادات المحفوظة عند تحميل الصفحة
    const savedFontSize = localStorage.getItem('themeFontSize');
    if (savedFontSize) document.documentElement.style.fontSize = savedFontSize;

    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) document.documentElement.style.setProperty('--color-primary', savedColor);

    const savedBg = localStorage.getItem('themeBackground');
    if (savedBg) {
        const { bgLight, bgDark, bgWhite } = JSON.parse(savedBg);
        document.documentElement.style.setProperty('--color-light', bgLight);
        document.documentElement.style.setProperty('--color-dark', bgDark);
        document.documentElement.style.setProperty('--color-white', bgWhite);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // عناصر تخصيص الثيم
    const fontSizes = document.querySelectorAll('.choose-size span');
    const colorPalette = document.querySelectorAll('.choose-color span');
    const bgOptions = document.querySelectorAll('.choose-bg > div');

    // ========== حجم الخط ==========
    fontSizes.forEach((size, index) => {
        size.addEventListener('click', () => {
            fontSizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');

            let fontSize;
            switch (index) {
                case 0:
                    fontSize = '12px';
                    break;
                case 1:
                    fontSize = '14px';
                    break;
                case 2:
                    fontSize = '16px';
                    break;
                case 3:
                    fontSize = '18px';
                    break;
                case 4:
                    fontSize = '20px';
                    break;
            }

            document.documentElement.style.fontSize = fontSize;
            localStorage.setItem('themeFontSize', fontSize);
        });
    });

    // ========== اللون الأساسي ==========
    const colorMap = {
        'color-1': '#ff0055',
        'color-2': '#00bcd4',
        'color-3': '#4caf50',
        'color-4': '#ff9800',
        'color-5': '#9c27b0'
    };

    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            colorPalette.forEach(c => c.classList.remove('active'));
            color.classList.add('active');

            const selectedClass = [...color.classList].find(cls => cls.startsWith('color-'));
            const selectedColor = colorMap[selectedClass];

            document.documentElement.style.setProperty('--color-primary', selectedColor);
            localStorage.setItem('themeColor', selectedColor);
        });
    });

    // ========== الخلفية ==========
    bgOptions.forEach((bg, index) => {
        bg.addEventListener('click', () => {
            bgOptions.forEach(b => b.classList.remove('active'));
            bg.classList.add('active');

            let bgLight, bgDark, bgWhite;
            switch (index) {
                case 0: // Light
                    bgLight = '#fff';
                    bgDark = '#000';
                    bgWhite = '#f0f0f0';
                    break;
                case 1: // Dark
                    bgLight = '#1e1e1e';
                    bgDark = '#000';
                    bgWhite = '#2c2c2c';
                    break;
                case 2: // Lights Out
                    bgLight = '#000';
                    bgDark = '#000';
                    bgWhite = '#000';
                    break;
            }

            document.documentElement.style.setProperty('--color-light', bgLight);
            document.documentElement.style.setProperty('--color-dark', bgDark);
            document.documentElement.style.setProperty('--color-white', bgWhite);

            localStorage.setItem('themeBackground', JSON.stringify({ bgLight, bgDark, bgWhite }));
        });
    });

    // ========== تطبيق الإعدادات المحفوظة ==========
    const savedFontSize = localStorage.getItem('themeFontSize');
    if (savedFontSize) document.documentElement.style.fontSize = savedFontSize;

    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) document.documentElement.style.setProperty('--color-primary', savedColor);

    const savedBg = localStorage.getItem('themeBackground');
    if (savedBg) {
        const { bgLight, bgDark, bgWhite } = JSON.parse(savedBg);
        document.documentElement.style.setProperty('--color-light', bgLight);
        document.documentElement.style.setProperty('--color-dark', bgDark);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // حجم الخط
    const fontSizes = document.querySelectorAll('.choose-size span');
    fontSizes.forEach((size, index) => {
        size.addEventListener('click', () => {
            fontSizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');

            const fontSize = ['12px', '14px', '16px', '18px', '20px'][index];
            document.documentElement.style.fontSize = fontSize;
            localStorage.setItem('themeFontSize', fontSize);
        });
    });

    // اللون الأساسي
    const colorPalette = document.querySelectorAll('.choose-color span');
    const colorValues = [
        'hsl(252, 75%, 60%)',
        'hsl(52, 75%, 60%)',
        'hsl(352, 75%, 60%)',
        'hsl(152, 75%, 60%)',
        'hsl(202, 75%, 60%)'
    ];

    colorPalette.forEach((color, index) => {
        color.addEventListener('click', () => {
            colorPalette.forEach(c => c.classList.remove('active'));
            color.classList.add('active');

            const selectedColor = colorValues[index];
            document.documentElement.style.setProperty('--color-primary', selectedColor);
            localStorage.setItem('themeColor', selectedColor);
        });
    });

    // الخلفية (Light و Dark فقط)
    const bgOptions = document.querySelectorAll('.choose-bg > div');
    const bgValues = [
        { light: '#fff', dark: '#000', white: '#f0f0f0' }, // Light
        { light: '#1e1e1e', dark: '#000', white: '#2c2c2c' } // Dark
    ];

    bgOptions.forEach((bg, index) => {
        if (index > 1) return; // تجاهل Lights Out

        bg.addEventListener('click', () => {
            bgOptions.forEach(b => b.classList.remove('active'));
            bg.classList.add('active');

            const { light, dark, white } = bgValues[index];
            document.documentElement.style.setProperty('--color-light', light);
            document.documentElement.style.setProperty('--color-dark', dark);
            document.documentElement.style.setProperty('--color-white', white);

            localStorage.setItem('themeBackground', JSON.stringify({ light, dark, white }));
        });
    });

    // تطبيق الإعدادات المحفوظة
    const savedFontSize = localStorage.getItem('themeFontSize');
    if (savedFontSize) document.documentElement.style.fontSize = savedFontSize;

    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) document.documentElement.style.setProperty('--color-primary', savedColor);

    const savedBg = localStorage.getItem('themeBackground');
    if (savedBg) {
        const { light, dark, white } = JSON.parse(savedBg);
        document.documentElement.style.setProperty('--color-light', light);
        document.documentElement.style.setProperty('--color-dark', dark);
        document.documentElement.style.setProperty('--color-white', white);
    }
});

// notifications
const notifications = [
    { type: 'comment', text: '💬New comment from Sarah: "Your design is awesome!"' },
    { type: 'like', text: '❤️Mohamed liked your latest post' },
    { type: 'follow', text: '🔔 New update from your friend Laila' }
];

const container = document.getElementById('notifications-container');

notifications.forEach((note, index) => {
    setTimeout(() => {
        const div = document.createElement('div');
        div.className = `notification ${note.type}`;
        div.textContent = note.text;
        container.appendChild(div);

        // إزالة الإشعار بعد 5 ثوانٍ
        setTimeout(() => {
            div.remove();
        }, 5000);
    }, index * 1000);
});