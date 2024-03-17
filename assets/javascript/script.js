// MixitUp 
$(document).ready(function () {
    var mixer = mixitup('.deal-button', {
        selectors: {
            target: '.property-card-animation'
        },
        animation: {
            enable: true,
            effects: 'fade translateZ(-100px) rotateY(180deg)',
            duration: 600,
            easing: 'ease-in-out'
        }
    });

    // Button click event to filter properties
    $('.deal-button ul button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        mixer.filter(filterValue);
    });
});

// Pagination 
$('.nav-button').on('click', function () {
    var page = parseInt($(this).attr('data-page'));
    var itemsPerPage = 3;
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = page * itemsPerPage;

    $('.property-card-animation').hide().slice(startIndex, endIndex).show();
});

// user select Favorites listing
document.querySelectorAll('.favorite-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Toggle the color of the heart icon
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas', 'text-danger');
        } else {
            this.classList.remove('fas', 'text-danger');
            this.classList.add('far');
        }
    });
});


