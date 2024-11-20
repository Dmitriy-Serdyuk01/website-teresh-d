
//Бургер меню. Start
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header_menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});
//Бургер меню. End


//Слайдер з відгуками. Start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        
        768: {
            slidesPerView: 2, 
        },
        // Відповідає для екранів шириною 767px і менше
        300: {
            slidesPerView: 1.2, // Показувати один слайд
        },
    },
});
//Слайдер з відгуками. End
  


//Акордеон з відгуками. Start
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-questions_answers");

    accordions.forEach(accordion => {
        const header = accordion.querySelector(".accordion-header-questions_answers");
        const content = accordion.querySelector(".accordion-content-questions_answers");
        const icon = accordion.querySelector(".accordion-icon-single");

        header.addEventListener("click", function () {
            // Перевіряємо, чи акордеон вже відкритий
            const isOpen = content.style.maxHeight;

            // Закриваємо всі акордеони перед відкриттям нового
            accordions.forEach(acc => {
                acc.querySelector(".accordion-content-questions_answers").style.maxHeight = null;
                acc.querySelector(".accordion-icon-single").style.transform = "rotate(0deg)";
            });

            // Якщо акордеон не був відкритий, відкриваємо його
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "2800px";
                icon.style.transform = "rotate(180deg)"; // Обертаємо іконку
            }
        });
    });
});
//Акордеон з відгуками. End



//Сайдбар для блогу Мобільна версія. Start

// Отримуємо елементи кнопок і мобільного сайдбару
// const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
// const mobileSidebar = document.getElementById('mobile-sidebar');
// const mobileSidebarClose = document.getElementById('mobile-sidebar-close');

// Відкриваємо сайдбар по кліку на кнопку
// mobileSidebarToggle.addEventListener('click', function() {
//     mobileSidebar.classList.add('open');
// });

// Закриваємо сайдбар по кліку на кнопку закриття
// mobileSidebarClose.addEventListener('click', function() {
//     mobileSidebar.classList.remove('open');
// });

//Закриваємо модальне вікно поза межами модального вікна
// document.addEventListener('click', function(event) {
//     if (!mobileSidebar.contains(event.target) && !mobileSidebarToggle.contains(event.target)) {
//         mobileSidebar.classList.remove('open');
//     }
// });


//Сайдбар для блогу Мобільна версія. End






//Модальне віккно "Запис на консультацію". Start
document.addEventListener('DOMContentLoaded', function() {
    // Модальне вікно для консультацій
    const openModalBtns = document.querySelectorAll('.open-modal');
    const modal = document.getElementById('consultationModal');
    const closeModalBtn = modal ? modal.querySelector('.close-modal') : null;

    // Модальне вікно для відгуків
    const openFeedbackModalBtns = document.querySelectorAll('.open-feedback-modal');
    const feedbackModal = document.getElementById('feedbackModal');
    const closeFeedbackModalBtn = feedbackModal ? feedbackModal.querySelector('.close-modal') : null;

    // Сайдбар
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileSidebarClose = document.getElementById('mobile-sidebar-close');

    // Відкрити модальне вікно для консультацій
    openModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Закрити модальне вікно для консультацій
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Закрити модальне вікно для консультацій при кліку поза ним
    window.addEventListener('click', function(e) {
        if (modal && e.target === modal) {
            modal.style.display = 'none';
        }
        if (feedbackModal && e.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });

    // Відкрити модальне вікно для відгуків
    openFeedbackModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (feedbackModal) {
                feedbackModal.style.display = 'block';
            }
        });
    });

    // Закрити модальне вікно для відгуків
    if (closeFeedbackModalBtn) {
        closeFeedbackModalBtn.addEventListener('click', function() {
            feedbackModal.style.display = 'none';
        });
    }

    // Відкрити сайдбар по кліку на кнопку
    if (mobileSidebarToggle) {
        mobileSidebarToggle.addEventListener('click', function() {
            if (mobileSidebar) {
                mobileSidebar.classList.add('open');
            }
        });
    }

    // Закрити сайдбар по кліку на кнопку закриття
    if (mobileSidebarClose) {
        mobileSidebarClose.addEventListener('click', function() {
            if (mobileSidebar) {
                mobileSidebar.classList.remove('open');
            }
        });
    }

    // Закрити сайдбар при кліку поза межами сайдбару
    document.addEventListener('click', function(event) {
        if (mobileSidebar && !mobileSidebar.contains(event.target) && !mobileSidebarToggle.contains(event.target)) {
            mobileSidebar.classList.remove('open');
        }
    });

    // Обробка форми консультацій
    document.getElementById('consultationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігає стандартному надсиланню форми
        sendForm('consultationForm');
    });

    // Обробка форми відгуків
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігає стандартному надсиланню форми
        sendForm('feedbackForm');
    });

    // function sendForm(formId) {
    //     var form = document.getElementById(formId);

        
    //     setTimeout(function() {
           
    //         form.reset();

            
    //         var successMessage = document.getElementById('successMessage');
    //         if (successMessage) {
    //             successMessage.style.display = 'block';

                
    //             setTimeout(function() {
    //                 successMessage.style.display = 'none';
    //             }, 3000);
    //         }

            
    //         if (formId === 'feedbackForm' && feedbackModal) {
    //             feedbackModal.style.display = 'none';
    //         } else if (formId === 'consultationForm' && modal) {
    //             modal.style.display = 'none';
    //         }
    //     }, 500);
    // }
    function sendForm(formId) {
        var form = document.getElementById(formId);
        var formData = new FormData(form);
    
        fetch('process-form.php', { // Замість 'process-form.php' вставте шлях до вашого PHP скрипту
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                form.reset();
    
                var successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.style.display = 'block';
    
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                    }, 3000);
                }
    
                if (formId === 'feedbackForm' && feedbackModal) {
                    feedbackModal.style.display = 'none';
                } else if (formId === 'consultationForm' && modal) {
                    modal.style.display = 'none';
                }
            } else {
                alert(data.message); // Показати повідомлення про помилку
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
    }
    

    // Власні повідомлення про помилки для обов'язкових полів
    function setCustomErrorMessages(form) {
        var fields = form.querySelectorAll('input[required], select[required], textarea[required]');
        fields.forEach(function(field) {
            field.addEventListener('invalid', function(event) {
                event.preventDefault(); // Запобігає стандартному повідомленню про помилку
                if (field.validity.valueMissing) {
                    field.setCustomValidity('Please fill out this field.'); // Задає власне повідомлення
                } else {
                    field.setCustomValidity(''); // Скидає власне повідомлення
                }
                field.reportValidity(); // Відображає повідомлення
            });

            field.addEventListener('input', function() {
                field.setCustomValidity(''); // Очищає власне повідомлення при введенні
                field.reportValidity(); // Оновлює повідомлення
            });
        });
    }

    var consultationForm = document.getElementById('consultationForm');
    var feedbackForm = document.getElementById('feedbackForm');

    if (consultationForm) {
        setCustomErrorMessages(consultationForm);
    }

    if (feedbackForm) {
        setCustomErrorMessages(feedbackForm);
    }
});

//Модальне віккно "Запис на консультацію". End





