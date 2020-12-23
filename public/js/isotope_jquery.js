$(document).ready(function () {
    let $btns = $('.project_area .button_group button');
    $btns.click(function(e)
    {
     $('.project_area .button_group button').removeClass('active');
     e.target.classList.add('active');
     let selector = $(e.target).attr('data-filter');
     $('.project_area .grid').isotope({
         filter:selector
     });
     return false;
    }
)


})
